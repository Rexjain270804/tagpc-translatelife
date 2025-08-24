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
      <div 
  className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-background"
  style={{ background: 'var(--hero-gradient)' }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Conference Logo */}
          <div className="mb-4 flex flex-col items-center justify-center">
            <div className="w-32 h-32 sm:w-44 sm:h-44 flex items-center justify-center rounded-full bg-background/40 shadow-lg border-2 border-primary mb-2">
              <img 
                src={logoImage} 
                alt="TAG-PC 2025 Conference Logo" 
                className="w-28 h-28 sm:w-40 sm:h-40 object-contain drop-shadow-lg"
              />
            </div>
          </div>
          
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-primary-foreground leading-tight">
            {getContent('hero', 'title') || 'International Conference on Translating Across Genres'}
          </h1>
          
          <p className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 text-primary-foreground/90">
            {getContent('hero', 'subtitle') || '03 – 04 November 2025 | Amity University Rajasthan, Jaipur, India'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-6 sm:mt-8 w-full px-2">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-105 shadow-md border border-primary min-w-[220px]"
              onClick={() => window.open('/src/assets/CFP%20for%20International%20Conference%202025%20ASL.pdf', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Call for Papers
            </Button>
            <form className="flex flex-col items-stretch sm:flex-row sm:items-center gap-2 w-full sm:w-auto" onSubmit={async e => {
              e.preventDefault();
              const email = (e.target as any).email.value;
              if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
                toast({ title: 'Invalid Email', description: 'Please enter a valid email address.' });
                return;
              }
              // Save to Supabase contact_messages table
              const { error } = await supabase.from('contact_messages').insert({
                email,
                name: 'Subscription',
                message: 'Subscribed via homepage'
              });
              if (error) {
                toast({ title: 'Error', description: 'Failed to subscribe. Please try again.' });
              } else {
                toast({ title: 'Subscribed!', description: 'You will receive updates.' });
                (e.target as any).reset();
              }
            }}>
              <label htmlFor="email" className="text-background font-semibold text-base sm:text-lg mb-1 sm:mb-0 sm:mr-2">Get Updates</label>
              <input 
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 rounded-lg border-2 border-primary bg-background text-primary focus:outline-none focus:ring-2 focus:ring-primary min-w-[140px] sm:min-w-[180px]"
                required
                aria-label="Email address"
              />
              <Button 
                size="lg" 
                type="submit"
                className="bg-accent text-accent-foreground border border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 min-w-[100px] sm:min-w-[120px]"
              >
                Subscribe
              </Button>
            </form>
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