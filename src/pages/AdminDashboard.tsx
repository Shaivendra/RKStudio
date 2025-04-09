
import { useEffect } from 'react';
import Layout from "../components/layout/Layout";
import Dashboard from "../components/admin/Dashboard";
import { useToast } from '@/components/ui/use-toast';

const AdminDashboard = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // This would be replaced with actual authentication logic
    const isAuthenticated = true; // In a real app, this would check if user is authenticated
    
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please log in to access the admin dashboard",
        variant: "destructive",
      });
      // In a real app, this would redirect to login
    }
  }, [toast]);

  return (
    <Layout>
      <section className="section bg-light">
        <Dashboard />
      </section>
    </Layout>
  );
};

export default AdminDashboard;
