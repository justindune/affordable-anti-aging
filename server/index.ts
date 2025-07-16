import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// In-memory storage for appointments (in production, use a database)
let appointments: { id: string; date: string; status: 'pending' | 'confirmed' | 'cancelled' }[] = [];

// Get all appointments
app.get('/api/appointments', (req, res) => {
  res.json(appointments);
});

// Add new appointment
app.post('/api/appointments', (req, res) => {
  const { date } = req.body;
  const newAppointment = {
    id: Date.now().toString(),
    date,
    status: 'pending'
  };
  appointments.push(newAppointment);
  res.status(201).json(newAppointment);
});

// Update appointment status
app.put('/api/appointments/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const appointmentIndex = appointments.findIndex(a => a.id === id);
  if (appointmentIndex !== -1) {
    appointments[appointmentIndex].status = status;
    res.json(appointments[appointmentIndex]);
  } else {
    res.status(404).json({ error: 'Appointment not found' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
