
import { Camera, Award, Clock, Heart } from 'lucide-react';

const AboutContent = () => {
  return (
    <div className="space-y-16">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4">
            <p>
              ShutterVista was founded in 2018 with a simple mission: to capture life's most precious moments 
              with artistry and passion. What started as a solo photographer's dream has grown into a team of 
              talented professionals dedicated to visual storytelling.
            </p>
            <p>
              We believe that every moment deserves to be preserved beautifully. Our approach combines technical 
              expertise with creative vision to deliver stunning imagery that stands the test of time.
            </p>
            <p>
              Whether it's a wedding, family portrait, or commercial project, we bring the same level of dedication 
              and attention to detail to every shoot.
            </p>
          </div>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
            alt="Photographer at work" 
            className="w-full h-auto rounded-2xl shadow-lg"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg">
            <p className="font-semibold">5+ Years</p>
            <p className="text-sm text-muted-foreground">Professional Experience</p>
          </div>
        </div>
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card p-6 text-center">
          <div className="mb-4 mx-auto bg-teal/10 w-16 h-16 rounded-full flex items-center justify-center">
            <Camera className="h-8 w-8 text-teal" />
          </div>
          <h3 className="text-2xl font-bold">500+</h3>
          <p className="text-muted-foreground">Photoshoots Completed</p>
        </div>
        
        <div className="card p-6 text-center">
          <div className="mb-4 mx-auto bg-teal/10 w-16 h-16 rounded-full flex items-center justify-center">
            <Award className="h-8 w-8 text-teal" />
          </div>
          <h3 className="text-2xl font-bold">15+</h3>
          <p className="text-muted-foreground">Awards Won</p>
        </div>
        
        <div className="card p-6 text-center">
          <div className="mb-4 mx-auto bg-teal/10 w-16 h-16 rounded-full flex items-center justify-center">
            <Heart className="h-8 w-8 text-teal" />
          </div>
          <h3 className="text-2xl font-bold">300+</h3>
          <p className="text-muted-foreground">Happy Clients</p>
        </div>
        
        <div className="card p-6 text-center">
          <div className="mb-4 mx-auto bg-teal/10 w-16 h-16 rounded-full flex items-center justify-center">
            <Clock className="h-8 w-8 text-teal" />
          </div>
          <h3 className="text-2xl font-bold">10,000+</h3>
          <p className="text-muted-foreground">Hours Behind Camera</p>
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card overflow-hidden group">
            <div className="relative">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Michael Anderson" 
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <h4 className="text-white font-semibold">Lead Photographer</h4>
                  <p className="text-white/80 text-sm">Specialized in weddings and portraits</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">Michael Anderson</h3>
              <p className="text-muted-foreground mt-2">
                With over 10 years of experience, Michael's artistic vision and technical expertise 
                make him a master of capturing emotional and authentic moments.
              </p>
            </div>
          </div>
          
          <div className="card overflow-hidden group">
            <div className="relative">
              <img 
                src="https://randomuser.me/api/portraits/women/44.jpg" 
                alt="Sarah Johnson" 
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <h4 className="text-white font-semibold">Creative Director</h4>
                  <p className="text-white/80 text-sm">Fine art and editorial photography</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-muted-foreground mt-2">
                Sarah's background in fine arts gives her a unique perspective, creating photographs 
                that are both emotionally powerful and visually stunning.
              </p>
            </div>
          </div>
          
          <div className="card overflow-hidden group">
            <div className="relative">
              <img 
                src="https://randomuser.me/api/portraits/men/67.jpg" 
                alt="David Rodriguez" 
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <h4 className="text-white font-semibold">Videographer</h4>
                  <p className="text-white/80 text-sm">Cinematic video production</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">David Rodriguez</h3>
              <p className="text-muted-foreground mt-2">
                David's background in filmmaking allows him to create cinematic videos that tell compelling 
                stories with stunning visuals and emotional depth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutContent;
