import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const ClientBooking = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleBookAppointment = () => {
    if (selectedDate) {
      setShowConfirmation(true);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Book Your Appointment</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Select a date and time that works best for you. Our team will confirm your appointment shortly.
            </p>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
            <Button onClick={handleBookAppointment} disabled={!selectedDate}>
              Book Appointment
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Booking Confirmation Modal */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Appointment Confirmation</DialogTitle>
            <DialogDescription>
              Your appointment has been successfully booked!
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex items-center gap-4">
              <p className="text-sm font-medium leading-none">Appointment Date:</p>
              <p className="text-sm text-muted-foreground">
                {selectedDate ? format(selectedDate, 'MMMM d, yyyy') : 'Not selected'}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-sm font-medium leading-none">Time:</p>
              <p className="text-sm text-muted-foreground">
                {selectedDate ? format(selectedDate, 'HH:mm') : 'Not selected'}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-sm font-medium leading-none">Confirmation:</p>
              <p className="text-sm text-muted-foreground">
                Details have been sent to your email address.
              </p>
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <Button variant="outline" onClick={() => setShowConfirmation(false)}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ClientBooking;
