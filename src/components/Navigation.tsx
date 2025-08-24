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
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-lg text-primary">TAG-PC 2025</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('cfp')}
              className="text-foreground hover:text-primary transition-colors"
            >
              CFP
            </button>
            <button
              onClick={() => scrollToSection('dates')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Important Dates
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="py-4 space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-accent transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-accent transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('cfp')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-accent transition-colors"
              >
                CFP
              </button>
              <button
                onClick={() => scrollToSection('dates')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-accent transition-colors"
              >
                Important Dates
              </button>
              <button
                onClick={() => scrollToSection('committee')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-accent transition-colors"
              >
                Committee
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-accent transition-colors"
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