import { Sparkles, Clock, Leaf } from "lucide-react";
import { motion } from "motion/react";

const stories = [
  {
    icon: Clock,
    title: "The Art of Slow Travel",
    description: "In a world that moves too fast, we invite you to pause. Our retreats are designed for those who seek depth over distance, quality over quantity. Stay longer, wander slower, feel deeper.",
    image: "https://images.unsplash.com/photo-1759408174160-24fae6d9c94c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjByZWFkaW5nJTIwYm9vayUyMGNhYmlufGVufDF8fHx8MTc2OTU0NzM5MXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Sparkles,
    title: "Mindful Escapes",
    description: "Each cabin is a sanctuary. Thoughtfully curated spaces that blend seamlessly with their surroundings, offering comfort without excess, luxury without extravagance.",
    image: "https://images.unsplash.com/photo-1764192114257-ae9ecf97eb6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwbmF0dXJlJTIwcGVhY2VmdWx8ZW58MXx8fHwxNzY5NTQ3MzkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Leaf,
    title: "Sustainable Serenity",
    description: "We believe in leaving no trace but lasting memories. Our boutique cabins honor the earth with sustainable practices, renewable energy, and a deep respect for the land they inhabit.",
    image: "https://images.unsplash.com/photo-1623867483196-59106249d45e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBtb3JuaW5nJTIwd2luZG93JTIwdmlld3xlbnwxfHx8fDE3Njk1NDczOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Storytelling() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section intro */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            A Different Kind of Journey
          </h2>
          <p className="text-muted-foreground font-light max-w-2xl mx-auto">
            Arcadia is more than a booking platform—it's a philosophy of travel
          </p>
        </motion.div>

        {/* Asymmetrical Story Cards */}
        <div className="space-y-32">
          {stories.map((story, index) => {
            const Icon = story.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className={`flex flex-col ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-12 md:gap-16`}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Image Side */}
                <div className={`flex-1 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="relative group">
                    {/* Main Image */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                        style={{ filter: 'brightness(0.9) contrast(0.95)' }}
                      />
                      <div
                        className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                        style={{ background: 'var(--gradient-dreamy)' }}
                      />
                    </div>

                    {/* Floating decorative element */}
                    <motion.div
                      className={`absolute ${
                        isEven ? '-right-6 -bottom-6' : '-left-6 -bottom-6'
                      } w-32 h-32 rounded-full opacity-40 blur-2xl`}
                      style={{
                        background: isEven
                          ? 'var(--gradient-peach)'
                          : 'var(--gradient-ocean)',
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 0.6, 0.4],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className={`flex-1 ${isEven ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className="max-w-lg">
                    {/* Icon */}
                    <motion.div
                      className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
                      style={{
                        background: isEven
                          ? 'var(--gradient-ocean)'
                          : 'var(--gradient-peach)',
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-light mb-6">
                      {story.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
                      {story.description}
                    </p>

                    {/* Decorative line */}
                    <motion.div
                      className="w-24 h-1 rounded-full"
                      style={{
                        background: isEven
                          ? 'var(--gradient-ocean)'
                          : 'var(--gradient-peach)',
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: 96 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="mt-32 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="inline-block p-12 md:p-16 rounded-3xl"
            style={{ background: 'var(--gradient-hero)' }}
          >
            <h3 className="text-3xl md:text-4xl font-light mb-4">
              Ready to Slow Down?
            </h3>
            <p className="text-muted-foreground font-light mb-8 max-w-2xl mx-auto">
              Join our community of mindful travelers and discover your next sanctuary
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-3 rounded-2xl text-white shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ background: 'var(--gradient-ocean)' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore All Retreats
              </motion.button>
              <motion.button 
                className="px-8 py-3 rounded-2xl bg-white text-foreground border border-border hover:bg-muted transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn Our Story
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}