
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const SettingsForm = () => {
  const [profileData, setProfileData] = useState({
    name: 'Admin User',
    email: 'admin@example.com',
    phone: '+1 (555) 123-4567',
    bio: 'Professional photographer with a passion for capturing the perfect moments.',
  });
  
  const [siteSettings, setSiteSettings] = useState({
    siteName: 'RK Studio Photography',
    siteTagline: 'Capturing Moments, Creating Memories',
    allowBookings: true,
    showPricing: true,
    enableNotifications: true,
  });
  
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleSiteSettingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSiteSettings(prev => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (name: string, checked: boolean) => {
    setSiteSettings(prev => ({ ...prev, [name]: checked }));
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      toast({
        title: "Profile updated",
        description: "Your profile information has been saved.",
      });
      setLoading(false);
    }, 1000);
  };

  const handleSiteSettingsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      toast({
        title: "Settings updated",
        description: "Your site settings have been saved.",
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <Tabs defaultValue="profile" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="site">Site Settings</TabsTrigger>
      </TabsList>
      
      <TabsContent value="profile">
        <form onSubmit={handleProfileSubmit} className="space-y-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={profileData.name}
                onChange={handleProfileChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={profileData.email}
                onChange={handleProfileChange}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              value={profileData.phone}
              onChange={handleProfileChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              name="bio"
              value={profileData.bio}
              onChange={handleProfileChange}
              rows={4}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">New Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Leave blank to keep current password"
            />
          </div>
          
          <Button type="submit" className="bg-teal hover:bg-teal/90" disabled={loading}>
            {loading ? 'Saving...' : 'Save Profile'}
          </Button>
        </form>
      </TabsContent>
      
      <TabsContent value="site">
        <form onSubmit={handleSiteSettingsSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="siteName">Site Name</Label>
            <Input
              id="siteName"
              name="siteName"
              value={siteSettings.siteName}
              onChange={handleSiteSettingsChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="siteTagline">Tagline</Label>
            <Input
              id="siteTagline"
              name="siteTagline"
              value={siteSettings.siteTagline}
              onChange={handleSiteSettingsChange}
            />
          </div>
          
          <div className="space-y-6 py-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="allowBookings">Allow Bookings</Label>
                <p className="text-sm text-muted-foreground">
                  Enable clients to book appointments through the website
                </p>
              </div>
              <Switch
                id="allowBookings"
                checked={siteSettings.allowBookings}
                onCheckedChange={(checked) => handleSwitchChange('allowBookings', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="showPricing">Show Pricing</Label>
                <p className="text-sm text-muted-foreground">
                  Display pricing information on the website
                </p>
              </div>
              <Switch
                id="showPricing"
                checked={siteSettings.showPricing}
                onCheckedChange={(checked) => handleSwitchChange('showPricing', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="enableNotifications">Email Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive email notifications for new bookings
                </p>
              </div>
              <Switch
                id="enableNotifications"
                checked={siteSettings.enableNotifications}
                onCheckedChange={(checked) => handleSwitchChange('enableNotifications', checked)}
              />
            </div>
          </div>
          
          <Button type="submit" className="bg-teal hover:bg-teal/90" disabled={loading}>
            {loading ? 'Saving...' : 'Save Settings'}
          </Button>
        </form>
      </TabsContent>
    </Tabs>
  );
};
