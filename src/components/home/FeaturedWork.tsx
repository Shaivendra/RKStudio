
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const featuredImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    alt: "Wedding photography",
    category: "Wedding",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    alt: "Pre-Wedding shoot",
    category: "Pre-Wedding",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    alt: "Family event coverage",
    category: "Family Events",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    alt: "Commercial photography",
    category: "Commercial",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    alt: "Corporate event",
    category: "Corporate",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1604326531570-2689ea7ae287",
    alt: "Live event coverage",
    category: "Live",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1578269174936-2709b6aeb913",
    alt: "Video reels",
    category: "Reels",
  },
];

const categories = ["All", "Wedding", "Pre-Wedding", "Reels", "Live", "Corporate", "Family Events", "Commercial"];

const FeaturedWork = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredImages = activeCategory === "All" 
    ? featuredImages.slice(0, 4) // Show only 4 items for "All" to keep the grid clean
    : featuredImages.filter(img => img.category === activeCategory);

  return (
    <section className="section bg-secondary/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Featured Work</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Browse through a selection of our best photography and videography projects.
        </p>
      </div>
      
      <div className="flex justify-center flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full transition-all ${
              activeCategory === category 
                ? "bg-teal text-white" 
                : "bg-white text-dark hover:bg-teal/10"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredImages.map((image) => (
          <div key={image.id} className="card group animate-fade-in">
            <div className="relative overflow-hidden">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <span className="text-xs text-teal font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {image.category}
                  </span>
                  <h3 className="text-white font-medium mt-2">{image.alt}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link to="/portfolio">
          <Button className="btn-outline rounded-full">
            View All Work <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedWork;
