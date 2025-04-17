
import { useState } from 'react';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { CalendarIcon, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';

const serviceTypes = [
  {
    id: 'wedding',
    name: 'Wedding Photography',
    description: 'Full day coverage of your special day',
  },
  {
    id: 'portrait',
    name: 'Portrait Session',
    description: 'Professional portraits for individuals or couples',
  },
  {
    id: 'family',
    name: 'Family Session',
    description: 'Capture beautiful moments with your loved ones',
  },
  {
    id: 'event',
    name: 'Event Coverage',
    description: 'Photography for corporate events, parties, etc.',
  },
  {
    id: 'commercial',
    name: 'Commercial Photography',
    description: 'Professional photos for your business or products',
  },
];

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
];

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  });
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectService = (value: string) => {
    setFormData(prev => ({ ...prev, serviceType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date) {
      toast({
        title: "Date required",
        description: "Please select a date for your booking",
        variant: "destructive",
      });
      return;
    }
    
    if (!timeSlot) {
      toast({
        title: "Time slot required",
        description: "Please select a time for your booking",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    try {
      // Format date for email
      const formattedDate = format(date, "PPP");
      
      // Prepare booking data
      const bookingData = {
        ...formData,
        date: formattedDate,
        timeSlot: timeSlot,
      };
      
      // Call the Supabase Edge Function to send email
      const { data, error } = await supabase.functions.invoke('send-booking-email', {
        body: bookingData,
      });
      
      if (error) {
        throw new Error(error.message);
      }
      
      toast({
        title: "Booking request sent",
        description: "We'll contact you shortly to confirm your booking",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        message: '',
      });
      setDate(undefined);
      setTimeSlot(undefined);
    } catch (error) {
      console.error("Error sending booking email:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your booking. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="rounded-xl"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="rounded-xl"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              className="rounded-xl"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="serviceType">Service Type *</Label>
            <Select value={formData.serviceType} onValueChange={handleSelectService} required>
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {serviceTypes.map((service) => (
                  <SelectItem key={service.id} value={service.id}>
                    {service.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Select Date *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal rounded-xl",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  disabled={(date) => {
                    // Disable dates in the past
                    const now = new Date();
                    now.setHours(0, 0, 0, 0);
                    return date < now;
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div className="space-y-2">
            <Label>Select Time *</Label>
            <Select value={timeSlot} onValueChange={setTimeSlot} required>
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder="Select a time slot">
                  {timeSlot ? (
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      {timeSlot}
                    </div>
                  ) : (
                    "Select a time slot"
                  )}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="message">Additional Details</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us more about your event or requirements..."
            className="rounded-xl min-h-[120px]"
          />
        </div>
        
        {formData.serviceType && (
          <div className="bg-secondary/50 p-4 rounded-xl">
            <h4 className="font-medium mb-2">Selected Service</h4>
            <p className="text-sm">
              {serviceTypes.find(s => s.id === formData.serviceType)?.name} - {serviceTypes.find(s => s.id === formData.serviceType)?.description}
            </p>
          </div>
        )}
        
        <Button
          type="submit"
          className="w-full bg-teal hover:bg-teal/90 text-white rounded-xl py-6"
          disabled={loading}
        >
          {loading ? (
            <span>Processing...</span>
          ) : (
            <span>Book Appointment</span>
          )}
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
