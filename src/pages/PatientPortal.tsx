import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Phone, Mail } from 'lucide-react';

const PatientPortal = () => {
  // Mock patient data
  const appointments = [
    {
      id: 1,
      date: '2024-01-15',
      time: '09:00',
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      status: 'confirmed',
      notes: 'Routine checkup'
    },
    {
      id: 2,
      date: '2024-01-16',
      time: '14:00',
      doctor: 'Dr. Michael Chen',
      specialty: 'Pediatrics',
      status: 'pending',
      notes: 'Child immunization'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-medical-blue mb-2">Patient Portal</h1>
        <p className="text-muted-foreground">Manage your appointments and health records</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Upcoming Appointments */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Upcoming Appointments
            </CardTitle>
          </CardHeader>
          <CardContent>
            {appointments.length === 0 ? (
              <p className="text-center text-muted-foreground">No upcoming appointments</p>
            ) : (
              <div className="space-y-4">
                {appointments.map((apt) => (
                  <div key={apt.id} className="p-4 bg-medical-blue-light rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <div className="font-medium">{apt.doctor}</div>
                        <div className="text-sm text-muted-foreground">{apt.specialty}</div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {new Date(apt.date).toLocaleDateString()} at {apt.time}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">{apt.notes}</div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Office Hours: 8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Phone: (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>Email: info@affordableantiaging.com</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Button variant="default" size="lg">
          Book New Appointment
        </Button>
      </div>
    </div>
  );
};

export default PatientPortal;
