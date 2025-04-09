
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

const bookings = [
  {
    id: '1',
    client: 'John Smith',
    service: 'Wedding Photography',
    date: '2025-04-15',
    time: '10:00 AM',
    status: 'Confirmed',
  },
  {
    id: '2',
    client: 'Sarah Johnson',
    service: 'Family Portrait',
    date: '2025-04-18',
    time: '2:00 PM',
    status: 'Pending',
  },
  {
    id: '3',
    client: 'Michael Davis',
    service: 'Commercial Shoot',
    date: '2025-04-20',
    time: '9:00 AM',
    status: 'Confirmed',
  },
  {
    id: '4',
    client: 'Emily Wilson',
    service: 'Portrait Session',
    date: '2025-04-22',
    time: '4:00 PM',
    status: 'Pending',
  },
  {
    id: '5',
    client: 'Robert Chen',
    service: 'Event Coverage',
    date: '2025-04-25',
    time: '6:00 PM',
    status: 'Cancelled',
  },
];

export const BookingsList = () => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Client</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell className="font-medium">{booking.client}</TableCell>
              <TableCell>{booking.service}</TableCell>
              <TableCell>{booking.date}</TableCell>
              <TableCell>{booking.time}</TableCell>
              <TableCell>
                <Badge 
                  variant={
                    booking.status === 'Confirmed' ? 'default' : 
                    booking.status === 'Pending' ? 'outline' : 'destructive'
                  }
                >
                  {booking.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    <Check className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
