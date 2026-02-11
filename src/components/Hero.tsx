import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { motion } from "motion/react";

export function Hero() {
  const [searchData, setSearchData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: ''
  });

  const handleSearch = () => {
    console.log('Searching with:', searchData);
    // Add search functionality
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background with gradient */}
      <div 
        className="absolute inset-0 -z-10"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Floating decorative shapes */}
      <motion.div 
        className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-30 blur-3xl"
        style={{ background: 'var(--gradient-peach)' }}
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-30 blur-3xl"
        style={{ background: 'var(--gradient-ocean)' }}
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brand */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-light tracking-wide mb-4">
              Arcadia
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
              Where time slows down and nature whispers
            </p>
          </motion.div>
          
          {/* Floating Search Bar */}
          <motion.div 
            className="mt-12 md:mt-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-8 border border-white/40 hover:shadow-3xl transition-shadow duration-500">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Destination */}
                <div className="relative group">
                  <label className="block text-sm text-left mb-2 text-foreground/70">
                    Destination
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/60 group-hover:text-primary transition-colors" />
                    <Input
                      type="text"
                      placeholder="Where to?"
                      value={searchData.destination}
                      onChange={(e) => setSearchData({...searchData, destination: e.target.value})}
                      className="pl-10 bg-input-background border-0 rounded-2xl h-12 focus:ring-2 focus:ring-primary/30 transition-all"
                    />
                  </div>
                </div>
                
                {/* Check-in */}
                <div className="relative group">
                  <label className="block text-sm text-left mb-2 text-foreground/70">
                    Check-in
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/60 group-hover:text-primary transition-colors" />
                    <Input
                      type="date"
                      placeholder="Add dates"
                      value={searchData.checkIn}
                      onChange={(e) => setSearchData({...searchData, checkIn: e.target.value})}
                      className="pl-10 bg-input-background border-0 rounded-2xl h-12 focus:ring-2 focus:ring-primary/30 transition-all"
                    />
                  </div>
                </div>
                
                {/* Check-out */}
                <div className="relative group">
                  <label className="block text-sm text-left mb-2 text-foreground/70">
                    Check-out
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/60 group-hover:text-primary transition-colors" />
                    <Input
                      type="date"
                      placeholder="Add dates"
                      value={searchData.checkOut}
                      onChange={(e) => setSearchData({...searchData, checkOut: e.target.value})}
                      className="pl-10 bg-input-background border-0 rounded-2xl h-12 focus:ring-2 focus:ring-primary/30 transition-all"
                    />
                  </div>
                </div>
                
                {/* Guests */}
                <div className="relative group">
                  <label className="block text-sm text-left mb-2 text-foreground/70">
                    Guests
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/60 group-hover:text-primary transition-colors" />
                    <Input
                      type="number"
                      placeholder="Add guests"
                      value={searchData.guests}
                      onChange={(e) => setSearchData({...searchData, guests: e.target.value})}
                      className="pl-10 bg-input-background border-0 rounded-2xl h-12 focus:ring-2 focus:ring-primary/30 transition-all"
                    />
                  </div>
                </div>
              </div>
              
              {/* Search Button */}
              <div className="mt-6">
                <Button 
                  onClick={handleSearch}
                  className="w-full md:w-auto px-12 h-12 rounded-2xl hover:scale-105 transition-transform duration-300"
                  style={{ background: 'var(--gradient-ocean)' }}
                >
                  <Search className="mr-2 h-5 w-5" />
                  Search Retreats
                </Button>
              </div>
            </div>
          </motion.div>
          
          {/* Subtle tagline */}
          <motion.p 
            className="mt-8 text-sm text-muted-foreground font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Curated escapes for the mindful traveler
          </motion.p>
        </div>
      </div>
    </section>
  );
}