import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, BarChart3, Stethoscope, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const PhysicianLayout = ({ children }: { children: React.ReactNode }) => {
  const navItems = [
    { path: '/dashboard', label: 'Appointments', icon: Calendar },
    { path: '/analytics', label: 'Analytics', icon: BarChart3 },
    { path: '/patients', label: 'Patients', icon: Users },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <aside className="w-64 bg-card border-r border-border">
        <div className="flex items-center justify-center h-16 border-b border-border">
          <div className="flex-shrink-0 flex items-center">
            <Stethoscope className="h-8 w-8 text-medical-blue mr-2" />
            <span className="text-xl font-bold text-medical-blue">
              Physician Portal
            </span>
          </div>
        </div>
        <nav className="mt-6">
          <div className="space-y-1">
            <div className="flex flex-col gap-2">
              <Link to="/dashboard" className="flex items-center gap-2 p-2 rounded-md hover:bg-accent hover:text-accent-foreground">
                <Calendar className="h-4 w-4" />
                Dashboard
              </Link>
              <Link to="/analytics" className="flex items-center gap-2 p-2 rounded-md hover:bg-accent hover:text-accent-foreground">
                <BarChart3 className="h-4 w-4" />
                Analytics
              </Link>
              <Link to="/patients" className="flex items-center gap-2 p-2 rounded-md hover:bg-accent hover:text-accent-foreground">
                <Users className="h-4 w-4" />
                Patients
              </Link>
            </div>
          </div>
        </nav>
      </aside>
      <main className="flex-1">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default PhysicianLayout;
