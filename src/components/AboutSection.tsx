import { Globe, BookOpen, Users } from 'lucide-react';
import { useWebsiteContent } from '@/hooks/useWebsiteContent';

const AboutSection = () => {
  const { data: content } = useWebsiteContent();

  const getContent = (section: string, key: string) => {
    return content?.find(c => c.section === section && c.key === key)?.value || '';
  };

  return (
  <section id="about" className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              {getContent('about', 'title') || 'About the Conference'}
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {getContent('about', 'content') || 'The International Conference on Translating Across Genres brings together scholars, practitioners, and industry experts to explore the evolving landscape of translation studies in the digital era.'}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Globe className="h-6 w-6 text-accent" />
                <span className="text-accent-foreground">Global perspectives on translation</span>
              </div>
              <div className="flex items-center space-x-3">
                <BookOpen className="h-6 w-6 text-primary" />
                <span className="text-primary-foreground">Academic and industry collaboration</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-accent" />
                <span className="text-accent-foreground">Interdisciplinary research focus</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <BookOpen className="h-24 w-24 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary">Translation Studies</h3>
                <p className="text-muted-foreground mt-2">Bridging languages,<br />cultures, and genres</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-accent/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;