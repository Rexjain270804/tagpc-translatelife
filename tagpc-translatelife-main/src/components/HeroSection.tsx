import heroImage from '@/assets/TAG-PC-AUR.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="flex items-center justify-center relative overflow-hidden animate-fade-in pt-16 lg:pt-18">
      {/* Hero Image */}
      <div className="w-full">
        <img src={heroImage} alt="Hero Background" className="w-full h-auto block" />
      </div>
    </section>
  );
};

export default HeroSection;