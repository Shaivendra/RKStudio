
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { BookingsList } from './BookingsList';
import { PortfolioManager } from './PortfolioManager';
import { SettingsForm } from './SettingsForm';
import { BarChart, Camera, Calendar as CalendarIcon, LayoutDashboard, Settings, Users } from 'lucide-react';

const stats = [
  {
    title: "Total Bookings",
    value: "24",
    change: "+5%",
    description: "from last month",
    icon: <Calendar className="h-6 w-6 text-teal" />,
  },
  {
    title: "New Clients",
    value: "12",
    change: "+8%",
    description: "from last month",
    icon: <Users className="h-6 w-6 text-orange" />,
  },
  {
    title: "Portfolio Items",
    value: "86",
    change: "+3%",
    description: "from last month",
    icon: <Camera className="h-6 w-6 text-teal" />,
  },
  {
    title: "Monthly Revenue",
    value: "$8,540",
    change: "+12%",
    description: "from last month",
    icon: <BarChart className="h-6 w-6 text-orange" />,
  }
];

export const Dashboard = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, Admin
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <div className="p-2 bg-secondary/50 rounded-full">
                {stat.icon}
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                  {stat.change}
                </span>
                {" "}{stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
            <CardDescription>
              You have 5 upcoming bookings for this week
            </CardDescription>
          </CardHeader>
          <CardContent>
            <BookingsList />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Booking Calendar</CardTitle>
            <CardDescription>
              Your schedule for this month
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border mx-auto"
            />
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="portfolio" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="portfolio" className="text-base">
            <Camera className="mr-2 h-4 w-4" /> Portfolio Manager
          </TabsTrigger>
          <TabsTrigger value="settings" className="text-base">
            <Settings className="mr-2 h-4 w-4" /> Settings
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="portfolio">
          <Card>
            <CardHeader>
              <CardTitle>Manage Portfolio</CardTitle>
              <CardDescription>
                Add, edit or remove items from your portfolio
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PortfolioManager />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>
                Manage your account preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SettingsForm />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
