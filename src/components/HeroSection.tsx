import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useWebsiteContent } from '@/hooks/useWebsiteContent';
import logoImage from '@/assets/conference-logo.png';
// PDF should be placed in public/ folder
const cfpPdfUrl = '/CFP TAG-PC_final.pdf';

const HeroSection = () => {
  const { data: content } = useWebsiteContent();

  const getContent = (section: string, key: string) => {
    return content?.find(c => c.section === section && c.key === key)?.value || '';
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden animate-fade-in pt-20">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0" style={{ background: 'var(--hero-gradient)' }} />

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/5 via-transparent to-background/10" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto space-y-6 sm:space-y-8">
          {/* Conference Logo */}
          <div className="animate-fade-in-up flex flex-col items-center justify-center">
            <div className="w-32 h-32 sm:w-44 sm:h-44 lg:w-52 lg:h-52 flex items-center justify-center rounded-full glass-card mb-4 border-2 border-primary/20">
              <img src={logoImage} alt="TAG-PC 2026 Conference Logo" className="w-28 h-28 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-contain drop-shadow-lg" />
            </div>
          </div>

          {/* Main Title */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-xl sm:text-2xl font-bold text-secondary mb-2 tracking-wide uppercase">
              ICSSR Sponsored
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary-foreground leading-tight tracking-tight">
              International Conference on
              <span className="block text-secondary font-extrabold italic">Translation Studies</span>
            </h1>
          </div>

          {/* Conference Details */}
          <div className="animate-fade-in-up flex flex-col items-center justify-center gap-6 mb-6" style={{ animationDelay: '0.4s' }}>
            {/* Theme - Full Line */}
            <div className="glass px-8 py-4 rounded-2xl text-secondary border border-primary/20 w-auto inline-block max-w-4xl shadow-lg hover:shadow-primary/10 transition-shadow duration-300">
              <span className="font-semibold text-lg sm:text-xl block sm:inline mb-1 sm:mb-0">Theme:</span> <span className="font-bold text-xl sm:text-2xl ml-0 sm:ml-2">Translating Across Genres: Practices & Challenges (TAG-PC)</span>
            </div>

            {/* Dates and Location - Below Theme */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-base sm:text-lg font-medium w-full">
              <div className="glass px-6 py-3 rounded-2xl text-secondary border border-secondary/20 flex items-center justify-center min-w-[200px]">
                <span className="font-semibold mr-2">Dates:</span> <span className="font-bold">29 – 30 January 2026</span>
              </div>
              <div className="glass px-6 py-3 rounded-2xl text-secondary border border-accent/20 flex items-center justify-center min-w-[200px]">
                <span className="font-semibold mr-2">Location:</span> <span className="font-bold">Amity University Rajasthan, Jaipur</span>
              </div>
            </div>
          </div>

          {/* Organizer */}
          <div className="animate-fade-in-up text-lg text-primary-foreground/90" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col items-center">
              <div className="text-center">
                <span className="font-medium">Organized by: </span>
                <span className="font-bold text-secondary">Amity School of Languages,</span>
              </div>
              <div className="font-bold text-secondary text-center">
                Amity University Rajasthan
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up pt-4" style={{ animationDelay: '0.8s' }}>
            <Button
              variant="modern"
              size="lg"
              className="min-w-[280px] bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-2xl shadow-secondary/20"
              onClick={() => window.open(cfpPdfUrl, '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Call for Papers
            </Button>
          </div>
        </div>
      </div>

      {/* Modern Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    </section>
  );
};

export default HeroSection;