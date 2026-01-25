import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ImportantDocuments from '@/components/ImportantDocuments';
import CFPSection from '@/components/CFPSection';
import ThemesSection from '@/components/ThemesSection';
import SpeakersSection from '@/components/SpeakersSection';
import RegistrationSection from '@/components/RegistrationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ImportantDocuments />
      <CFPSection />
      <ThemesSection />
      <SpeakersSection />
      <RegistrationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
