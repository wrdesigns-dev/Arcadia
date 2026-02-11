import { useState, useEffect, useRef } from "react";
import { MapPin, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { BookingModal } from "./BookingModal";
import { motion } from "motion/react";

interface Retreat {
  id: number;
  name: string;
  location: string;
  price: number;
  image: string;
  description: string;
  rating: number;
}

const retreats: Retreat[] = [
  {
    id: 1,
    name: "Mountain Serenity",
    location: "Norwegian Highlands",
    price: 245,
    image: "https://images.unsplash.com/photo-1758250899745-c2bbd225a110?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJlbmUlMjBjYWJpbiUyMG5hdHVyZSUyMG1vdW50YWluc3xlbnwxfHx8fDE3Njk1NDczNDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "A minimalist escape surrounded by peaks and pine",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Forest Whispers",
    location: "Pacific Northwest",
    price: 189,
    image: "https://images.unsplash.com/photo-1758710578651-038e877e989a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMGZvcmVzdCUyMHJldHJlYXR8ZW58MXx8fHwxNzY5NTQ3MzQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Nestled among ancient trees, where silence speaks",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Lakeside Dreams",
    location: "Lake District, UK",
    price: 210,
    image: "https://images.unsplash.com/photo-1639405791326-b1168dd7ad71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwbGFrZXNpZGUlMjBjYWJpbnxlbnwxfHx8fDE3Njk1NDczNDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Wake up to misty mornings and gentle waves",
    rating: 5.0,
  },
  {
    id: 4,
    name: "Nordic Minimalism",
    location: "Swedish Archipelago",
    price: 265,
    image: "https://images.unsplash.com/photo-1749063240249-ff4f8f996871?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBjYWJpbiUyMG1vdW50YWluc3xlbnwxfHx8fDE3Njk1NDczNjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Scandinavian design meets untouched wilderness",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Coastal Haven",
    location: "Big Sur, California",
    price: 320,
    image: "https://images.unsplash.com/photo-1604609165742-58e1b9cf0457?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBjYWJpbiUyMG9jZWFuJTIwdmlld3xlbnwxfHx8fDE3Njk1NDczNjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Perched above the Pacific, where ocean meets sky",
    rating: 5.0,
  },
  {
    id: 6,
    name: "Sunset Sanctuary",
    location: "Iceland",
    price: 295,
    image: "https://images.unsplash.com/photo-1702959638073-3fa29ddb6a98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWJpbiUyMHdvb2RzJTIwZm9yZXN0fGVufDF8fHx8MTc3MDc2Njk5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Experience the midnight sun in elegant solitude",
    rating: 4.9,
  },
];

export function FeaturedRetreats() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedRetreat, setSelectedRetreat] = useState<Retreat | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.scrollWidth / retreats.length;
      scrollContainerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? retreats.length - 1 : currentIndex - 1;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === retreats.length - 1 ? 0 : currentIndex + 1;
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  return (
    <section id="retreats" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4">Featured Retreats</h2>
          <p className="text-muted-foreground font-light max-w-2xl mx-auto">
            Hand-picked sanctuaries that celebrate simplicity, beauty, and the art of slowing down
          </p>
        </motion.div>

        {/* Slider */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary/10 hover:scale-110 transition-all duration-300 opacity-0 md:opacity-100"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary/10 hover:scale-110 transition-all duration-300 opacity-0 md:opacity-100"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>

          {/* Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {retreats.map((retreat, index) => (
              <motion.div
                key={retreat.id}
                className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group h-full">
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={retreat.image}
                      alt={retreat.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      style={{ filter: 'brightness(0.95) contrast(0.95)' }}
                    />
                    {/* Gradient Overlay */}
                    <div 
                      className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                      style={{ background: 'var(--gradient-dreamy)' }}
                    />
                    {/* Favorite Button */}
                    <button
                      onClick={() => toggleFavorite(retreat.id)}
                      className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300"
                    >
                      <Heart
                        className={`h-5 w-5 transition-colors ${
                          favorites.includes(retreat.id)
                            ? 'fill-red-500 text-red-500'
                            : 'text-gray-600'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl mb-1">{retreat.name}</h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          {retreat.location}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground">from</div>
                        <div className="text-xl">${retreat.price}</div>
                        <div className="text-xs text-muted-foreground">per night</div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground font-light mb-4 leading-relaxed">
                      {retreat.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-sm">⭐ {retreat.rating}</span>
                      </div>
                      <Button 
                        variant="ghost" 
                        className="rounded-full hover:bg-primary/10"
                        onClick={() => setSelectedRetreat(retreat)}
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {retreats.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {selectedRetreat && (
        <BookingModal
          retreat={selectedRetreat}
          onClose={() => setSelectedRetreat(null)}
        />
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}