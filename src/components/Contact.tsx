import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    toast.success("Message sent! We'll get back to you soon.", {
      description: "Our team typically responds within 24 hours."
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-muted/20 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
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
              <Mail className="h-6 w-6" />
              <span className="text-sm uppercase tracking-widest font-light">Get in Touch</span>
            </div>
          </div>
          <h2 className="mb-6">Let's Start Your Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Have questions about our retreats? Ready to plan your escape? We're here to help you find the perfect sanctuary.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 font-light">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="rounded-2xl border-border/50 focus:border-primary transition-colors h-12"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 font-light">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="rounded-2xl border-border/50 focus:border-primary transition-colors h-12"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm mb-2 font-light">
                  Phone Number <span className="text-muted-foreground">(optional)</span>
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="rounded-2xl border-border/50 focus:border-primary transition-colors h-12"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 font-light">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your dream retreat..."
                  rows={6}
                  className="rounded-2xl border-border/50 focus:border-primary transition-colors resize-none"
                />
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full rounded-full h-12 text-white font-light shadow-lg hover:shadow-xl transition-all"
                  style={{ background: 'var(--gradient-ocean)' }}
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Info Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-border/50">
              <h3 className="mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1 font-light">Email</p>
                    <a href="mailto:info@arcadia.com" className="hover:text-primary transition-colors">
                      info@arcadia.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1 font-light">Phone</p>
                    <a href="tel:+15031234567" className="hover:text-primary transition-colors">
                      +1 (503) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1 font-light">Address</p>
                    <p>1132 NW Glisan St<br />Portland, OR 97209</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 border border-border/30">
              <h4 className="mb-4">Hours of Operation</h4>
              <div className="space-y-3 text-sm font-light">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span>10:00 AM - 4:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            {/* Quick Note */}
            <div className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-border/30">
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                <strong className="text-foreground">Need help choosing a retreat?</strong> Our travel specialists are available to guide you through our collection and help you find the perfect sanctuary for your needs.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}