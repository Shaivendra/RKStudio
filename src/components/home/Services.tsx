
import { Camera, Video, Users, Calendar } from 'lucide-react';

const services = [
  {
    title: "Portrait Photography",
    description: "Capture your best self with our professional portrait sessions. Perfect for individuals, couples, and families.",
    icon: <Camera className="h-10 w-10 text-teal" />,
  },
  {
    title: "Wedding Photography",
    description: "Document your special day with stunning photographs that tell your love story.",
    icon: <Users className="h-10 w-10 text-teal" />,
  },
  {
    title: "Event Coverage",
    description: "Full coverage of your important events, celebrations, and corporate gatherings.",
    icon: <Calendar className="h-10 w-10 text-teal" />,
  },
  {
    title: "Video Production",
    description: "Professional videography services for weddings, events, and commercial projects.",
    icon: <Video className="h-10 w-10 text-teal" />,
  },
];

const Services = () => {
  return (
    <section className="section bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We offer a wide range of photography and videography services to capture your precious moments.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="card p-6 flex flex-col items-center text-center hover:translate-y-[-5px]"
          >
            <div className="mb-4 p-4 bg-secondary rounded-full">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
