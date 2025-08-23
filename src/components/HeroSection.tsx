import { Download, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useWebsiteContent } from '@/hooks/useWebsiteContent';
import { useToast } from '@/hooks/use-toast';
import logoImage from '@/assets/conference-logo.png';

const HeroSection = () => {
  const { data: content } = useWebsiteContent();
  const { toast } = useToast();

  const getContent = (section: string, key: string) => {
    return content?.find(c => c.section === section && c.key === key)?.value || '';
  };

  const handleRegistrationClick = () => {
    toast({
      title: "Coming Soon",
      description: "Registration will open soon. Stay tuned for updates!",
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-background"
        style={{ background: 'var(--hero-gradient)' }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Conference Logo */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto">
              <img 
                src={logoImage} 
                alt="TAG-PC 2025 Conference Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground leading-tight">
            {getContent('hero', 'title') || 'International Conference on Translating Across Genres'}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            {getContent('hero', 'subtitle') || '03 – 04 November 2025 | Amity University Rajasthan, Jaipur, India'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-background text-primary hover:bg-background/90 transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('/cfp.pdf', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Call for Papers
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-background text-background hover:bg-background hover:text-primary transition-all duration-300"
              onClick={handleRegistrationClick}
            >
              <Users className="mr-2 h-5 w-5" />
              Registration Opening Soon
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-background/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-background/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-background/5 rounded-full blur-lg"></div>
    </section>
  );
};

export default HeroSection;