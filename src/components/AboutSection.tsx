import { Globe, BookOpen, Users } from 'lucide-react';
import { useWebsiteContent } from '@/hooks/useWebsiteContent';

const AboutSection = () => {
  const { data: content } = useWebsiteContent();

  const getContent = (section: string, key: string) => {
    return content?.find(c => c.section === section && c.key === key)?.value || '';
  };

  return (
  <section id="about" className="py-16 md:py-20 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-primary">
                  About the Conference
            </h2>
            
            <div className="prose max-w-none">
              <p className="text-base md:text-lg text-foreground mb-4 md:mb-6 leading-relaxed">
                With globalization and digital media, the demand for specialized translation has grown exponentially. This conference addresses the need for tailored approaches to ensure accuracy, cultural relevance, and functional effectiveness across genres.
              </p>
              
              <p className="text-base md:text-lg text-foreground mb-4 md:mb-6 leading-relaxed">
                It celebrates the diversity of translation across all genres and specializations, from literary and technical translation to multimedia localization and AI-driven solutions. Scholars, translators, linguists, and industry professionals will discuss the complexities of translating different genres—such as literary, technical, legal, medical, audiovisual, and digital texts.
              </p>
            </div>
            
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Globe className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                </div>
                <span className="text-sm md:text-base text-foreground font-medium">Global perspectives on translation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <BookOpen className="h-4 w-4 md:h-5 md:w-5 text-accent" />
                </div>
                <span className="text-sm md:text-base text-foreground font-medium">Academic and industry collaboration</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                </div>
                <span className="text-sm md:text-base text-foreground font-medium">Interdisciplinary research focus</span>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center shadow-lg border border-primary/20">
              <div className="text-center p-6">
                <BookOpen className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 text-primary mx-auto mb-4 drop-shadow-lg" />
                <h3 className="text-lg md:text-xl font-semibold text-primary mb-2">Translation Studies</h3>
                <p className="text-sm md:text-base text-muted-foreground">Bridging languages,<br />cultures, and genres</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 md:w-20 md:h-20 bg-accent/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;