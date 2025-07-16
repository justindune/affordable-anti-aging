import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Plus, Calendar, Mail, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const PatientsPage = () => {
  // Mock patient data
  const patients = [
    {
      id: 1,
      name: 'John Smith',
      age: 45,
      gender: 'Male',
      lastVisit: '2024-01-15',
      nextAppointment: '2024-02-15',
      status: 'active',
      email: 'john.smith@email.com',
      phone: '(555) 123-4567',
      notes: 'Regular checkup patient, good compliance'
    },
    {
      id: 2,
      name: 'Emily Davis',
      age: 32,
      gender: 'Female',
      lastVisit: '2024-01-10',
      nextAppointment: '2024-02-10',
      status: 'active',
      email: 'emily.davis@email.com',
      phone: '(555) 234-5678',
      notes: 'New patient, first consultation'
    },
    {
      id: 3,
      name: 'Michael Brown',
      age: 58,
      gender: 'Male',
      lastVisit: '2024-01-12',
      nextAppointment: '2024-02-12',
      status: 'active',
      email: 'michael.brown@email.com',
      phone: '(555) 345-6789',
      notes: 'Follow-up for blood pressure'
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      age: 42,
      gender: 'Female',
      lastVisit: '2024-01-14',
      nextAppointment: '2024-02-14',
      status: 'active',
      email: 'sarah.wilson@email.com',
      phone: '(555) 456-7890',
      notes: 'Skin consultation follow-up'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-medical-blue mb-2">Patient Management</h1>
        <p className="text-muted-foreground">View and manage patient records</p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-medical-blue" />
          <span className="text-lg font-medium">Active Patients</span>
          <Badge variant="outline" className="bg-success text-success-foreground">
            {patients.length}
          </Badge>
        </div>
        <Button variant="default">
          <Plus className="h-4 w-4 mr-2" />
          Add New Patient
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {patients.map((patient) => (
          <Card key={patient.id} className="shadow-card hover:shadow-elevated transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  {patient.name}
                </CardTitle>
                <Badge variant="outline" className={cn(
                  "bg-success text-success-foreground",
                  patient.status === 'inactive' && "bg-muted text-muted-foreground"
                )}>
                  {patient.status}
                </Badge>
              </div>
              <CardDescription className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Age:</span>
                <span className="font-medium">{patient.age}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>Next Appointment: {patient.nextAppointment}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4" />
                    <span>{patient.email}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4" />
                    <span>{patient.phone}</span>
                  </div>
                  <div className="text-sm">
                    <strong>Notes:</strong> {patient.notes}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PatientsPage;
