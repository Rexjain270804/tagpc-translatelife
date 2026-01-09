import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full glass-nav z-50 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 lg:h-18">
          <a href="#" className="text-2xl font-bold text-primary flex items-center gap-2">
            <em className="italic">TAG-PC</em> <span className="text-primary">2026</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 lg:space-x-10">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-all duration-300 font-medium text-base lg:text-lg relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-all duration-300 font-medium text-base lg:text-lg relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('cfp')}
              className="text-foreground hover:text-primary transition-all duration-300 font-medium text-base lg:text-lg relative group"
            >
              CFP
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('dates')}
              className="text-foreground hover:text-primary transition-all duration-300 font-medium text-base lg:text-lg relative group"
            >
              Important Dates
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-all duration-300 font-medium text-base lg:text-lg relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="glass"
            size="icon"
            className="md:hidden rounded-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden glass-card rounded-2xl mt-2 mb-4 animate-slide-down">
            <div className="py-4 space-y-1">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-6 py-3 text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 rounded-xl mx-2 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-6 py-3 text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 rounded-xl mx-2 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('cfp')}
                className="block w-full text-left px-6 py-3 text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 rounded-xl mx-2 font-medium"
              >
                CFP
              </button>
              <button
                onClick={() => scrollToSection('dates')}
                className="block w-full text-left px-6 py-3 text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 rounded-xl mx-2 font-medium"
              >
                Important Dates
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-6 py-3 text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 rounded-xl mx-2 font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;