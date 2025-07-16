import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import BookingPage from "./pages/BookingPage";
import DashboardPage from "./pages/DashboardPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import PatientPortal from "./pages/PatientPortal";
import PatientsPage from "./pages/PatientsPage";
import Navigation from "./components/Navigation";
import PhysicianLayout from "./components/PhysicianLayout";

// Mock authentication context
const useAuth = () => {
  return {
    isAuthenticated: false, // This should be replaced with actual auth state
    login: () => {},
    logout: () => {}
  };
};

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background">
            <Navigation />
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Index />} />
              <Route path="/book" element={<BookingPage />} />
              <Route path="/patient" element={<PatientPortal />} />

              {/* Physician routes (no auth required in prototype) */}
              <Route path="/dashboard" element={<PhysicianLayout><DashboardPage /></PhysicianLayout>} />
              <Route path="/analytics" element={<PhysicianLayout><AnalyticsPage /></PhysicianLayout>} />
              <Route path="/patients" element={<PhysicianLayout><PatientsPage /></PhysicianLayout>} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
