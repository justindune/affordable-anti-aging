import { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

// Physician Dashboard Data
const physicianAppointments = [
  {
    id: '1',
    date: '2025-07-17',
    time: '09:00 AM',
    patientName: 'John Smith',
    type: 'Initial Consultation',
    status: 'confirmed',
    notes: 'First visit for anti-aging assessment',
    duration: '1 hour',
    location: 'Exam Room 1'
  },
  {
    id: '2',
    date: '2025-07-17',
    time: '10:30 AM',
    patientName: 'Sarah Johnson',
    type: 'Follow-up',
    status: 'confirmed',
    notes: 'Review of test results',
    duration: '30 minutes',
    location: 'Exam Room 2'
  },
  {
    id: '3',
    date: '2025-07-17',
    time: '12:00 PM',
    patientName: 'Michael Chen',
    type: 'Testing Session',
    status: 'confirmed',
    notes: 'Glycation testing appointment',
    duration: '1 hour',
    location: 'Testing Room'
  },
  {
    id: '4',
    date: '2025-07-18',
    time: '2:30 PM',
    patientName: 'Emily Davis',
    type: 'Consultation',
    status: 'pending',
    notes: 'New patient consultation',
    duration: '1 hour',
    location: 'Exam Room 1'
  },
  {
    id: '5',
    date: '2025-07-18',
    time: '4:00 PM',
    patientName: 'Robert Wilson',
    type: 'Testing Session',
    status: 'confirmed',
    notes: 'Endothelial testing',
    duration: '1 hour',
    location: 'Testing Room'
  },
  {
    id: '6',
    date: '2025-07-19',
    time: '9:00 AM',
    patientName: 'Jessica Brown',
    type: 'Initial Consultation',
    status: 'confirmed',
    notes: 'First visit for anti-aging assessment',
    duration: '1 hour',
    location: 'Exam Room 1'
  },
  {
    id: '7',
    date: '2025-07-19',
    time: '11:00 AM',
    patientName: 'David Lee',
    type: 'Testing Session',
    status: 'confirmed',
    notes: 'Glycation testing',
    duration: '1 hour',
    location: 'Testing Room'
  }
];

interface Message {
  role: 'customer' | 'agent';
  content: string;
  timestamp: string;
}

const ConversationTimeline = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  // Group appointments by time slots for the selected date
  const groupedAppointments = physicianAppointments.reduce((acc, appointment) => {
    if (appointment.date === format(selectedDate, 'yyyy-MM-dd')) {
      const hour = appointment.time.split(':')[0];
      if (!acc[hour]) {
        acc[hour] = [];
      }
      acc[hour].push(appointment);
    }
    return acc;
  }, {} as Record<string, typeof physicianAppointments>);

  return (
    <div className="space-y-4">
      {/* Date Selector */}
      <Card>
        <CardHeader>
          <CardTitle>Select Date</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-4">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={(date) => setSelectedDate(date)}
              className="rounded-md border"
            />
            <p className="text-sm text-muted-foreground">
              Selected date: {format(selectedDate, 'MMMM d, yyyy')}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Daily Schedule */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Today's Schedule</CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Export Schedule
              </Button>
              <Button variant="outline" size="sm">
                Print Schedule
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {Object.entries(groupedAppointments).length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No appointments scheduled for this date</p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Morning */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Morning</h3>
                <div className="space-y-4">
                  {Object.entries(groupedAppointments)
                    .filter(([hour]) => parseInt(hour) < 12)
                    .map(([hour, appointments]) => (
                      <div key={hour}>
                        <h4 className="text-sm font-medium mb-2">{hour}:00</h4>
                        <div className="space-y-2">
                          {appointments.map((appointment) => (
                            <div key={appointment.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary text-secondary-foreground">
                              <div>
                                <p className="font-medium">{appointment.patientName}</p>
                                <p className="text-sm text-muted-foreground">{appointment.type}</p>
                                <p className="text-xs text-muted-foreground">{appointment.duration}</p>
                                <p className="text-xs text-muted-foreground">{appointment.location}</p>
                                <p className="text-xs text-muted-foreground">{appointment.notes}</p>
                              </div>
                              <div className={`flex items-center gap-2`}>
                                <div className={`px-3 py-1 rounded-full text-xs ${
                                  appointment.status === 'confirmed' 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                  {appointment.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                                </div>
                                <Button variant="outline" size="sm">
                                  View Details
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Afternoon */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Afternoon</h3>
                <div className="space-y-4">
                  {Object.entries(groupedAppointments)
                    .filter(([hour]) => parseInt(hour) >= 12)
                    .map(([hour, appointments]) => (
                      <div key={hour}>
                        <h4 className="text-sm font-medium mb-2">{hour}:00</h4>
                        <div className="space-y-2">
                          {appointments.map((appointment) => (
                            <div key={appointment.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary text-secondary-foreground">
                              <div>
                                <p className="font-medium">{appointment.patientName}</p>
                                <p className="text-sm text-muted-foreground">{appointment.type}</p>
                                <p className="text-xs text-muted-foreground">{appointment.duration}</p>
                                <p className="text-xs text-muted-foreground">{appointment.location}</p>
                                <p className="text-xs text-muted-foreground">{appointment.notes}</p>
                              </div>
                              <div className={`flex items-center gap-2`}>
                                <div className={`px-3 py-1 rounded-full text-xs ${
                                  appointment.status === 'confirmed' 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                  {appointment.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                                </div>
                                <Button variant="outline" size="sm">
                                  View Details
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>


    </div>
  );
};

export default ConversationTimeline;
