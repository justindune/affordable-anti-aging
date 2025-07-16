import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, Phone, Mail, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DoctorDashboard = () => {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  
  // Mock appointment data
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '(555) 123-4567',
      date: '2024-01-15',
      time: '09:00',
      doctor: 'Dr. Sarah Johnson - Cardiology',
      reason: 'Routine checkup',
      status: 'pending',
      notes: 'First-time patient, referred by Dr. Williams'
    },
    {
      id: 2,
      name: 'Emily Davis',
      email: 'emily.davis@email.com',
      phone: '(555) 234-5678',
      date: '2024-01-15',
      time: '10:00',
      doctor: 'Dr. Sarah Johnson - Cardiology',
      reason: 'Follow-up appointment',
      status: 'confirmed',
      notes: 'Blood pressure monitoring'
    },
    {
      id: 3,
      name: 'Michael Brown',
      email: 'michael.brown@email.com',
      phone: '(555) 345-6789',
      date: '2024-01-15',
      time: '14:00',
      doctor: 'Dr. Michael Chen - Pediatrics',
      reason: 'Child immunization',
      status: 'pending',
      notes: ''
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      email: 'sarah.wilson@email.com',
      phone: '(555) 456-7890',
      date: '2024-01-15',
      time: '15:00',
      doctor: 'Dr. Emily Rodriguez - Dermatology',
      reason: 'Skin consultation',
      status: 'cancelled',
      notes: 'Cancelled due to emergency'
    }
  ]);

  const handleStatusChange = (id: number, newStatus: string) => {
    setAppointments(prev => 
      prev.map(apt => 
        apt.id === id ? { ...apt, status: newStatus } : apt
      )
    );
    
    toast({
      title: "Status Updated",
      description: `Appointment ${newStatus} successfully.`,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-success text-success-foreground';
      case 'pending': return 'bg-warning text-warning-foreground';
      case 'cancelled': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed': return <CheckCircle className="h-4 w-4" />;
      case 'pending': return <AlertCircle className="h-4 w-4" />;
      case 'cancelled': return <XCircle className="h-4 w-4" />;
      default: return null;
    }
  };

  // Get dates for the week
  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(selectedDate);
    date.setDate(date.getDate() + i);
    return date.toISOString().split('T')[0];
  });

  // Group appointments by date
  const appointmentsByDate = appointments.reduce((acc, apt) => {
    if (!acc[apt.date]) acc[apt.date] = [];
    acc[apt.date].push(apt);
    return acc;
  }, {} as { [key: string]: typeof appointments });

  // Get today's appointments
  const todaysAppointments = appointmentsByDate[selectedDate] || [];
  const todaysAppointmentsSorted = [...todaysAppointments].sort((a, b) => {
    const timeA = new Date(`2024-01-15T${a.time}`).getTime();
    const timeB = new Date(`2024-01-15T${b.time}`).getTime();
    return timeA - timeB;
  });

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-medical-blue mb-2">Doctor Dashboard</h1>
        <p className="text-muted-foreground">Manage your appointments and patient bookings</p>
      </div>

      {/* Weekly Schedule Overview */}
      <Card className="shadow-card mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Weekly Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2">
            {weekDates.map((date, index) => {
              const appointmentsForDay = appointmentsByDate[date] || [];
              const day = new Date(date);
              const dayName = day.toLocaleDateString('en-US', { weekday: 'short' });
              
              return (
                <div key={index} className="text-center">
                  <div className="text-sm font-medium text-muted-foreground mb-1">
                    {dayName}
                  </div>
                  <div className="bg-medical-blue-light rounded-lg p-2">
                    <div className="text-lg font-bold text-medical-blue">
                      {appointmentsForDay.length}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <div className="mb-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Select Date
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Today's Schedule</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4">
        {todaysAppointmentsSorted.length === 0 ? (
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground">No appointments scheduled for {selectedDate}</p>
            </CardContent>
          </Card>
        ) : (
          todaysAppointmentsSorted.map((appointment) => (
            <Card key={appointment.id} className="shadow-card animate-fade-in hover:shadow-elevated transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    {appointment.name}
                  </CardTitle>
                  <Badge className={getStatusColor(appointment.status)}>
                    {getStatusIcon(appointment.status)}
                    {appointment.status}
                  </Badge>
                </div>
                <CardDescription>
                  {appointment.doctor}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{appointment.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4" />
                      <span>{appointment.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4" />
                      <span>{appointment.email}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm">
                      <strong>Reason:</strong> {appointment.reason}
                    </div>
                    {appointment.notes && (
                      <div className="text-sm">
                        <strong>Notes:</strong> {appointment.notes}
                      </div>
                    )}
                  </div>
                </div>
                
                {appointment.status === 'pending' && (
                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="success"
                      size="sm"
                      onClick={() => handleStatusChange(appointment.id, 'confirmed')}
                    >
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Confirm
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleStatusChange(appointment.id, 'cancelled')}
                    >
                      <XCircle className="h-4 w-4 mr-1" />
                      Cancel
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default DoctorDashboard;