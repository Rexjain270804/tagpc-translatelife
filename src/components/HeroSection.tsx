import { Download, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useWebsiteContent } from '@/hooks/useWebsiteContent';
import { useToast } from '@/hooks/use-toast';
import logoImage from '@/assets/conference-logo.png';
import { supabase } from '@/integrations/supabase/client';

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
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-background" style={{ background: 'var(--hero-gradient)' }} />
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Conference Logo */}
          <div className="mb-4 flex flex-col items-center justify-center">
            <div className="w-32 h-32 sm:w-44 sm:h-44 flex items-center justify-center rounded-full bg-background/40 shadow-lg border-2 border-primary mb-2">
              <img src={logoImage} alt="TAG-PC 2025 Conference Logo" className="w-28 h-28 sm:w-40 sm:h-40 object-contain drop-shadow-lg" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 text-primary-foreground leading-tight tracking-tight">
            International Conference on Translation Studies
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-lg font-medium mb-4">
            <span className="bg-primary/30 px-4 py-2 rounded-xl text-white">Theme: <span className="font-bold text-white">Translating across Genres: Practices & Challenges (TAG-PC)</span></span>
            <span className="bg-accent/30 px-4 py-2 rounded-xl text-white">Dates: <span className="font-bold text-white">03 – 04 November 2025</span></span>
            <span className="bg-background/40 px-4 py-2 rounded-xl text-white">Location: <span className="font-bold text-white">Amity University Rajasthan, Jaipur, India</span></span>
          </div>
          <div className="mt-2 text-base text-white">Organized by: <span className="font-semibold text-white">Amity School of Languages, Amity University Rajasthan</span></div>
          <div className="flex justify-center mt-8">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-105 shadow-md border border-primary min-w-[220px]" onClick={() => window.open('/src/assets/CFP%20for%20International%20Conference%202025%20ASL.pdf', '_blank')}>
              <Download className="mr-2 h-5 w-5" />
              Download Call for Papers
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