import { Download, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useWebsiteContent } from '@/hooks/useWebsiteContent';

const CFPSection = () => {
  const { data: content } = useWebsiteContent();

  const getContent = (section: string, key: string) => {
    return content?.find(c => c.section === section && c.key === key)?.value || '';
  };

  return (
    <section id="cfp" className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            {getContent('cfp', 'title') || 'Call for Papers'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {getContent('cfp', 'intro') || 'We invite submissions that explore innovative approaches to translation across different genres and contexts.'}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <Button 
                  size="lg" 
                  className="transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open('/cfp.pdf', '_blank')}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Full Call for Papers
                </Button>
              </div>
            </CardContent>
          </Card>

          <div id="dates" className="grid md:grid-cols-2 gap-6">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-primary">Abstract Submission Deadline</h3>
                <p className="text-2xl font-bold text-foreground">
                  {getContent('dates', 'abstract_deadline') || '15 Sept 2025'}
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-primary">Notification Date</h3>
                <p className="text-2xl font-bold text-foreground">
                  {getContent('dates', 'notification_date') || '30 Sept 2025'}
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-primary">Full Paper Deadline</h3>
                <p className="text-2xl font-bold text-foreground">
                  {getContent('dates', 'full_paper_deadline') || '15 Oct 2025'}
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-primary">Conference Dates</h3>
                <p className="text-2xl font-bold text-foreground">
                  {getContent('dates', 'conference_dates') || '03–04 Nov 2025'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CFPSection;