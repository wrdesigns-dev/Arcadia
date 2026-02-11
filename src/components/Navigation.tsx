import { useState, useEffect } from "react";
import { Menu, X, User, Heart } from "lucide-react";
import { Button } from "./ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed nav height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-2xl font-light tracking-wide hover:opacity-70 transition-opacity"
          >
            Arcadia
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#retreats" 
              onClick={(e) => scrollToSection(e, 'retreats')}
              className="text-sm hover:text-primary transition-colors"
            >
              Retreats
            </a>
            <a 
              href="#about" 
              onClick={(e) => scrollToSection(e, 'about')}
              className="text-sm hover:text-primary transition-colors"
            >
              About
            </a>
            <a 
              href="#experiences" 
              onClick={(e) => scrollToSection(e, 'experiences')}
              className="text-sm hover:text-primary transition-colors"
            >
              Experiences
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="text-sm hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 hover:bg-primary/10 rounded-full transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            <Button
              className="rounded-full"
              style={{ background: 'var(--gradient-ocean)' }}
            >
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              <a 
                href="#retreats" 
                onClick={(e) => scrollToSection(e, 'retreats')}
                className="text-sm hover:text-primary transition-colors"
              >
                Retreats
              </a>
              <a 
                href="#about" 
                onClick={(e) => scrollToSection(e, 'about')}
                className="text-sm hover:text-primary transition-colors"
              >
                About
              </a>
              <a 
                href="#experiences" 
                onClick={(e) => scrollToSection(e, 'experiences')}
                className="text-sm hover:text-primary transition-colors"
              >
                Experiences
              </a>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="text-sm hover:text-primary transition-colors"
              >
                Contact
              </a>
              <Button
                className="w-full rounded-full mt-2"
                style={{ background: 'var(--gradient-ocean)' }}
              >
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}