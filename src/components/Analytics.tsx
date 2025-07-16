import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, TrendingUp, Users, Phone, Mail, Clock } from 'lucide-react';

const Analytics = () => {
  // Mock analytics data
  const todayStats = {
    totalAppointments: 8,
    pendingAppointments: 3,
    confirmedAppointments: 4,
    cancelledAppointments: 1,
    callsReceived: 12,
    emailsReceived: 15
  };

  const weeklyStats = {
    appointments: [
      { day: 'Mon', count: 6 },
      { day: 'Tue', count: 8 },
      { day: 'Wed', count: 7 },
      { day: 'Thu', count: 9 },
      { day: 'Fri', count: 8 },
      { day: 'Sat', count: 4 },
      { day: 'Sun', count: 2 }
    ],
    totalWeek: 44
  };

  const monthlyMetrics = {
    averageDaily: 6.8,
    peakDay: 'Thursday',
    totalMonth: 204,
    growthRate: '+12%'
  };

  const doctorStats = [
    { name: 'Dr. Sarah Johnson', appointments: 24, specialty: 'Cardiology' },
    { name: 'Dr. Michael Chen', appointments: 18, specialty: 'Pediatrics' },
    { name: 'Dr. Emily Rodriguez', appointments: 22, specialty: 'Dermatology' },
    { name: 'Dr. David Kim', appointments: 16, specialty: 'Orthopedics' },
    { name: 'Dr. Lisa Thompson', appointments: 20, specialty: 'Internal Medicine' }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-medical-blue mb-2">Analytics Dashboard</h1>
        <p className="text-muted-foreground">Track your practice performance and appointment metrics</p>
      </div>

      {/* Today's Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <Card className="shadow-card animate-fade-in">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calendar className="h-5 w-5 text-medical-blue" />
              Today's Appointments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-medical-blue mb-2">
              {todayStats.totalAppointments}
            </div>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Pending:</span>
                <Badge variant="outline" className="bg-warning text-warning-foreground">
                  {todayStats.pendingAppointments}
                </Badge>
              </div>
              <div className="flex justify-between">
                <span>Confirmed:</span>
                <Badge variant="outline" className="bg-success text-success-foreground">
                  {todayStats.confirmedAppointments}
                </Badge>
              </div>
              <div className="flex justify-between">
                <span>Cancelled:</span>
                <Badge variant="outline" className="bg-destructive text-destructive-foreground">
                  {todayStats.cancelledAppointments}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card animate-fade-in">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Phone className="h-5 w-5 text-medical-blue" />
              Calls Received
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-medical-blue mb-2">
              {todayStats.callsReceived}
            </div>
            <div className="text-sm text-muted-foreground">
              Rolling 24-hour count
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card animate-fade-in">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Mail className="h-5 w-5 text-medical-blue" />
              Email Inquiries
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-medical-blue mb-2">
              {todayStats.emailsReceived}
            </div>
            <div className="text-sm text-muted-foreground">
              Rolling 24-hour count
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Overview */}
      <Card className="shadow-card mb-6 animate-fade-in">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-medical-blue" />
            Weekly Overview
          </CardTitle>
          <CardDescription>
            Appointment trends for the past 7 days
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-7 gap-2">
              {weeklyStats.appointments.map((day, index) => (
                <div key={index} className="text-center">
                  <div className="text-sm font-medium text-muted-foreground mb-1">
                    {day.day}
                  </div>
                  <div className="bg-medical-blue-light rounded-lg p-2">
                    <div className="text-lg font-bold text-medical-blue">
                      {day.count}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center pt-2">
              <span className="text-sm text-muted-foreground">
                Total this week: 
              </span>
              <span className="text-lg font-bold text-medical-blue ml-2">
                {weeklyStats.totalWeek} appointments
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Monthly Metrics & Doctor Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-medical-blue" />
              Monthly Metrics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-medical-blue-light rounded-lg">
                <div className="text-2xl font-bold text-medical-blue">
                  {monthlyMetrics.averageDaily}
                </div>
                <div className="text-sm text-muted-foreground">
                  Daily Average
                </div>
              </div>
              <div className="text-center p-4 bg-medical-blue-light rounded-lg">
                <div className="text-2xl font-bold text-medical-blue">
                  {monthlyMetrics.totalMonth}
                </div>
                <div className="text-sm text-muted-foreground">
                  Total This Month
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Peak Day:</span>
                <span className="font-medium">{monthlyMetrics.peakDay}</span>
              </div>
              <div className="flex justify-between">
                <span>Growth Rate:</span>
                <Badge variant="outline" className="bg-success text-success-foreground">
                  {monthlyMetrics.growthRate}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-medical-blue" />
              Doctor Performance
            </CardTitle>
            <CardDescription>
              Monthly appointment counts by doctor
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {doctorStats.map((doctor, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-medical-blue-light rounded-lg">
                  <div>
                    <div className="font-medium">{doctor.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {doctor.specialty}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-medical-blue">
                      {doctor.appointments}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      appointments
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;