import { BookOpen, Monitor, Palette, Cog, GraduationCap, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ThemesSection = () => {
  const themes = [
    {
      title: "Literary Translation",
      icon: BookOpen,
      description: "Exploring narrative techniques, poetry, and creative writing across languages"
    },
    {
      title: "Specialized Translation",
      icon: Cog,
      description: "Technical, medical, legal, and scientific translation practices"
    },
    {
      title: "Audiovisual Translation",
      icon: Monitor,
      description: "Subtitling, dubbing, and multimedia content localization"
    },
    {
      title: "Technology in Translation",
      icon: Cog,
      description: "AI, machine translation, and digital tools in translation workflows"
    },
    {
      title: "Translation Pedagogy",
      icon: GraduationCap,
      description: "Teaching methods, curriculum design, and translator training"
    },
    {
      title: "Cultural Translation",
      icon: Globe,
      description: "Cross-cultural communication and cultural adaptation strategies"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Conference Themes & Topics
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore diverse research areas and innovative approaches in translation studies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme, index) => {
            const Icon = theme.icon;
            return (
              <Card 
                key={index} 
                className="border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
              >
                <CardHeader className="text-center">
                  <div className="mb-4">
                    <Icon className="h-12 w-12 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-xl text-primary">{theme.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {theme.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;