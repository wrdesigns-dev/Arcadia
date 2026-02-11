import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "Brooklyn, NY",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    rating: 5,
    text: "Three weeks at the Mountain Haven changed my entire perspective on life. I finally understood what it means to truly disconnect and find yourself again. The silence was deafening at first, but it became the most beautiful soundtrack to my healing.",
    retreat: "Mountain Haven, Colorado"
  },
  {
    id: 2,
    name: "Marcus Chen",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    rating: 5,
    text: "I came to Arcadia searching for inspiration for my next novel. What I found was so much more—a profound connection to nature and a rhythm of life I never knew existed. The coastal retreat became my muse.",
    retreat: "Seashore Sanctuary, Oregon"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    rating: 5,
    text: "Arcadia isn't just about beautiful cabins—it's a philosophy. The slow-travel experience helped me rebuild my relationship with time itself. Every sunrise felt earned, every sunset felt sacred.",
    retreat: "Forest Whisper, Washington"
  },
  {
    id: 4,
    name: "James O'Connor",
    location: "Boston, MA",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    rating: 5,
    text: "After years of corporate burnout, I needed more than a vacation—I needed transformation. The desert escape gave me space to breathe, think, and rediscover who I am beneath all the noise.",
    retreat: "Desert Dreams, Arizona"
  },
  {
    id: 5,
    name: "Amara Johnson",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop",
    rating: 5,
    text: "The attention to detail in every Arcadia property is extraordinary. But what truly sets them apart is their commitment to sustainable, mindful travel. I left feeling restored and grateful.",
    retreat: "Lakeside Loft, Montana"
  },
  {
    id: 6,
    name: "Oliver Zhang",
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    rating: 5,
    text: "As a photographer, I've traveled extensively, but Arcadia showed me places and moments I never knew to look for. The slow-travel approach revealed layers of beauty I would have otherwise missed.",
    retreat: "Alpine Retreat, Wyoming"
  }
];

export function Experiences() {
  return (
    <section id="experiences" className="py-24 px-4 bg-gradient-to-b from-white to-muted/20">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 text-primary">
              <Quote className="h-6 w-6" />
              <span className="text-sm uppercase tracking-widest font-light">Experiences</span>
            </div>
          </div>
          <h2 className="mb-6">Stories from the Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Discover how Arcadia has transformed the lives of travelers seeking more than just a destination—they found a way of being.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col border border-border/50">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Quote */}
                <Quote className="h-8 w-8 text-primary/20 mb-4" />

                {/* Testimonial Text */}
                <p className="text-muted-foreground font-light leading-relaxed mb-6 flex-grow">
                  "{testimonial.text}"
                </p>

                {/* Retreat Info */}
                <p className="text-xs text-primary/60 mb-4 font-light">
                  {testimonial.retreat}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover relative z-10 ring-2 ring-white"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground font-light">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground font-light mb-6">
            Ready to write your own story?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full text-white font-light shadow-xl hover:shadow-2xl transition-all duration-300"
            style={{ background: 'var(--gradient-peach)' }}
            onClick={() => {
              const retreatsSection = document.getElementById('retreats');
              retreatsSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Retreats
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
