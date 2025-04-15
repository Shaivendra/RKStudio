
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
          filter: "brightness(0.7)"
        }}
      />
      
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Capturing Moments, Creating Memories</h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Professional photography and videography services for your special moments. Let's create something beautiful together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/portfolio">
              <Button className="bg-[#8B5CF6] text-white text-lg px-8 py-6 rounded-full hover:bg-[#8B5CF6]/90">
                View Portfolio <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/booking">
              <Button variant="outline" className="border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white text-lg px-8 py-6 rounded-full">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
