
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from "../components/layout/Layout";
import Dashboard from "../components/admin/Dashboard";
import { useToast } from '@/components/ui/use-toast';

const AdminDashboard = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem('user');
    const isAuthenticated = userData ? JSON.parse(userData).isAuthenticated : false;
    
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please log in to access the admin dashboard",
        variant: "destructive",
      });
      
      // Redirect to login page
      navigate('/login');
    }
  }, [toast, navigate]);

  return (
    <Layout>
      <section className="section bg-light">
        <Dashboard />
      </section>
    </Layout>
  );
};

export default AdminDashboard;
