
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    photo: "https://randomuser.me/api/portraits/women/32.jpg",
    text: "ShutterVista captured our wedding day perfectly. The photos are absolutely stunning and truly reflect the joy and love of our special day.",
    rating: 5,
    service: "Wedding Photography",
  },
  {
    id: 2,
    name: "Michael Chen",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Professional, creative, and a pleasure to work with. Our family portraits came out better than we could have imagined.",
    rating: 5,
    service: "Family Portrait",
  },
  {
    id: 3,
    name: "Sarah Williams",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "The commercial photos for our business were exactly what we needed. They've significantly improved our brand image and marketing materials.",
    rating: 4,
    service: "Commercial Photography",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Here's what our clients have to say about their experience working with us.
        </p>
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        <div className="testimonial-container overflow-hidden">
          <div className="flex transition-all duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="min-w-full px-4">
                <div className="card p-8 flex flex-col items-center">
                  <img 
                    src={testimonial.photo} 
                    alt={testimonial.name} 
                    className="w-20 h-20 rounded-full object-cover mb-6 border-4 border-teal"
                  />
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-orange text-orange" />
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                      <Star key={i + testimonial.rating} className="h-5 w-5 text-gray-300" />
                    ))}
                  </div>
                  <p className="text-center text-lg italic mb-6">"{testimonial.text}"</p>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
          onClick={prevTestimonial}
        >
          <ChevronLeft className="h-6 w-6 text-dark" />
        </button>
        
        <button 
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
          onClick={nextTestimonial}
        >
          <ChevronRight className="h-6 w-6 text-dark" />
        </button>
      </div>
      
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-teal scale-125' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
