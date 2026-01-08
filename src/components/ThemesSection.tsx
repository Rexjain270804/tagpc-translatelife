import { BookOpen, Monitor, Palette, Cog, GraduationCap, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ThemesSection = () => {
  const themes = [
    {
      title: "Literary Translation",
      icon: BookOpen,
      description: "Fiction, poetry, drama, graphic novels"
    },
    {
      title: "Scientific Translation",
      icon: Cog,
      description: "Scholarly work across disciplines"
    },
    {
      title: "Audiovisual Translation",
      icon: Monitor,
      description: "Subtitling, dubbing, voice-over, translation for theatre"
    },
    {
      title: "Artificial Intelligence and Translation",
      icon: Cog,
      description: "Computer-Assisted Translation"
    },
    {
      title: "Business & Marketing Translation",
      icon: GraduationCap,
      description: "Advertisements, annual reports, corporate communications"
    },
    {
      title: "Journalistic Translation",
      icon: Globe,
      description: "Navigating media bias and culturally sensitive topics"
    },
    {
      title: "Multilingualism and Language Politic",
      icon: Palette,
      description: "Language policies and multilingual practices"
    },
    {
      title: "Translating the Digital",
      icon: Monitor,
      description: "Localizing websites, social media content, memes, and marketing campaigns; Transcreating slogans and brand identities"
    },
    {
      title: "Translation and Technology",
      icon: Cog,
      description: "Ethics, accessibility, disciplinary discourse"
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