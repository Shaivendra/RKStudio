
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  type: 'photo' | 'video';
  src: string;
  thumbnail: string;
  description: string;
}

const portfolioItems: GalleryItem[] = [
  {
    id: 1,
    title: "Elegant Wedding",
    category: "Wedding",
    type: "photo",
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Capturing the elegance and romance of a beautiful spring wedding.",
  },
  {
    id: 2,
    title: "Studio Portrait",
    category: "Portrait",
    type: "photo",
    src: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    thumbnail: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Professional studio portraiture with artistic lighting.",
  },
  {
    id: 3,
    title: "Family Session",
    category: "Family",
    type: "photo",
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A heartwarming family photoshoot in a natural outdoor setting.",
  },
  {
    id: 4,
    title: "Product Photography",
    category: "Commercial",
    type: "photo",
    src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    thumbnail: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Clean, professional product photography for e-commerce and marketing.",
  },
  {
    id: 5,
    title: "Beachside Wedding",
    category: "Wedding",
    type: "photo",
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A romantic beachside wedding at sunset.",
  },
  {
    id: 6,
    title: "Corporate Headshots",
    category: "Portrait",
    type: "photo",
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Professional headshots for corporate profiles and LinkedIn.",
  },
  {
    id: 7,
    title: "Brand Campaign",
    category: "Commercial",
    type: "video",
    src: "https://player.vimeo.com/video/507589307",
    thumbnail: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Commercial video production for a lifestyle brand.",
  },
  {
    id: 8,
    title: "Wedding Highlights",
    category: "Wedding",
    type: "video",
    src: "https://player.vimeo.com/video/370756449",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Cinematic wedding highlight film.",
  },
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState("All");
  
  const categories = ["All", "Wedding", "Portrait", "Family", "Commercial"];
  const mediaTypes = ["All Media", "Photos", "Videos"];
  const [mediaType, setMediaType] = useState("All Media");
  
  const filteredItems = portfolioItems.filter(item => {
    const categoryMatch = filter === "All" || item.category === filter;
    const typeMatch = 
      mediaType === "All Media" || 
      (mediaType === "Photos" && item.type === "photo") ||
      (mediaType === "Videos" && item.type === "video");
    
    return categoryMatch && typeMatch;
  });

  return (
    <div className="space-y-8">
      <Tabs defaultValue="All Media" className="w-full">
        <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-8">
          <TabsList className="bg-secondary/80 p-1 rounded-full">
            {mediaTypes.map(type => (
              <TabsTrigger 
                key={type} 
                value={type}
                onClick={() => setMediaType(type)}
                className="rounded-full"
              >
                {type}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <div className="flex flex-wrap gap-2 justify-center md:justify-end">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full transition-all ${
                  filter === category 
                    ? "bg-teal text-white" 
                    : "bg-white text-dark hover:bg-teal/10"
                }`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <TabsContent value="All Media" className="m-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map(item => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <div 
                    className="card overflow-hidden cursor-pointer group"
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {item.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-16 w-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <div className="h-12 w-12 bg-teal rounded-full flex items-center justify-center pl-1">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="absolute top-3 right-3">
                        <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
                          {item.category}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <div>
                          <h3 className="text-white font-medium">{item.title}</h3>
                          <p className="text-white/80 text-sm">{item.description.substring(0, 60)}...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-3xl max-h-screen overflow-auto">
                  {item.type === 'photo' ? (
                    <img src={item.src} alt={item.title} className="w-full h-auto rounded-lg" />
                  ) : (
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <iframe
                        src={`${item.src}?autoplay=0&loop=0&title=0&byline=0&portrait=0`}
                        allow="autoplay; fullscreen; picture-in-picture"
                        className="w-full h-full"
                        title={item.title}
                      />
                    </div>
                  )}
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground mt-2">{item.description}</p>
                    <div className="mt-4">
                      <span className="bg-secondary text-xs font-medium px-2.5 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="Photos" className="m-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.filter(item => item.type === 'photo').map(item => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <div 
                    className="card overflow-hidden cursor-pointer group"
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-3 right-3">
                        <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
                          {item.category}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <div>
                          <h3 className="text-white font-medium">{item.title}</h3>
                          <p className="text-white/80 text-sm">{item.description.substring(0, 60)}...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-3xl max-h-screen overflow-auto">
                  <img src={item.src} alt={item.title} className="w-full h-auto rounded-lg" />
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground mt-2">{item.description}</p>
                    <div className="mt-4">
                      <span className="bg-secondary text-xs font-medium px-2.5 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="Videos" className="m-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.filter(item => item.type === 'video').map(item => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <div 
                    className="card overflow-hidden cursor-pointer group"
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-16 w-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <div className="h-12 w-12 bg-teal rounded-full flex items-center justify-center pl-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
                          {item.category}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <div>
                          <h3 className="text-white font-medium">{item.title}</h3>
                          <p className="text-white/80 text-sm">{item.description.substring(0, 60)}...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-3xl max-h-screen overflow-auto">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src={`${item.src}?autoplay=0&loop=0&title=0&byline=0&portrait=0`}
                      allow="autoplay; fullscreen; picture-in-picture"
                      className="w-full h-full"
                      title={item.title}
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground mt-2">{item.description}</p>
                    <div className="mt-4">
                      <span className="bg-secondary text-xs font-medium px-2.5 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Gallery;
