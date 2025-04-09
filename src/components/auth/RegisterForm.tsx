
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';
import { Eye, EyeOff, UserPlus } from 'lucide-react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match",
        variant: "destructive",
      });
      return;
    }
    
    if (!agreeTerms) {
      toast({
        title: "Terms agreement required",
        description: "Please agree to the terms and conditions",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // Simulate registration API call
    setTimeout(() => {
      // Store user data in localStorage to simulate authentication
      localStorage.setItem('user', JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        isAuthenticated: true
      }));
      
      toast({
        title: "Registration successful",
        description: "Your account has been created",
      });
      setLoading(false);
      
      // Redirect to admin dashboard
      navigate('/admin');
    }, 1500);
  };

  return (
    <div className="card max-w-md w-full mx-auto p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Create an Account</h2>
        <p className="text-muted-foreground">Sign up to get started</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="rounded-xl"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="rounded-xl"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
              className="rounded-xl pr-10"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="rounded-xl"
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="terms" 
            checked={agreeTerms} 
            onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
          />
          <label
            htmlFor="terms"
            className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I agree to the{" "}
            <a href="#" className="text-teal hover:underline">
              terms and conditions
            </a>
          </label>
        </div>
        
        <Button
          type="submit"
          className="w-full bg-teal hover:bg-teal/90 text-white rounded-xl py-6"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center">
              <span className="animate-spin mr-2">⏳</span> Creating account...
            </span>
          ) : (
            <span className="flex items-center">
              <UserPlus className="mr-2 h-5 w-5" /> Create Account
            </span>
          )}
        </Button>
      </form>
      
      <div className="text-center mt-6">
        <p className="text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="text-teal hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
