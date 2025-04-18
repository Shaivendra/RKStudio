
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CalendarClock, Phone } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
          filter: "brightness(0.3)"
        }}
      />
      
      <div className="relative container mx-auto text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Ready to Capture Your Story?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-12 text-white/90">
            Let's work together to create stunning visuals that tell your unique story.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/booking">
              <Button 
                className="bg-[#8B5CF6] text-white hover:bg-[#8B5CF6]/90 rounded-full flex items-center text-lg px-10 py-7 hover:scale-105 transition-all shadow-lg shadow-purple-500/30"
              >
                <CalendarClock className="mr-2 h-5 w-5" /> Book Now
              </Button>
            </Link>
            <a href="tel:+1234567890">
              <Button 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-[#8B5CF6] rounded-full flex items-center text-lg px-10 py-7 transition-all backdrop-blur-sm"
              >
                <Phone className="mr-2 h-5 w-5" /> Call Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
