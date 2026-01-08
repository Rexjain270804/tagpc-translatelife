import { Download, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useWebsiteContent } from '@/hooks/useWebsiteContent';
// PDF should be placed in public/ folder, not imported as module
const cfpPdfUrl = "/CFP%20for%20International%20Conference%202025%20ASL.pdf";

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
          <div className="flex justify-center mb-8">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-105 shadow-md border border-primary px-8 py-4 text-base font-semibold"
              onClick={() => {
                window.open(cfpPdfUrl, '_blank');
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Full Call for Papers
            </Button>
          </div>

          <div id="dates" className="grid md:grid-cols-2 gap-6">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-primary">Abstract Submission Deadline</h3>
                <p className="text-2xl font-bold text-foreground">
                  {getContent('dates', 'abstract_deadline') || '10 Jan 2026'}
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-primary">Notification Date</h3>
                <p className="text-2xl font-bold text-foreground">
                  {getContent('dates', 'notification_date') || '11 Jan 2026'}
                </p>
                {/* Download button removed as per revert request */}
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-primary">Full Paper Deadline</h3>
                <p className="text-2xl font-bold text-foreground">
                  {getContent('dates', 'full_paper_deadline') || '18 Jan 2026'}
                </p>
                {/* Download button removed as per revert request */}
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-primary">Conference Dates</h3>
                <p className="text-2xl font-bold text-foreground">
                  {getContent('dates', 'conference_dates') || '29–30 Jan 2026'}
                </p>
                {/* Download button removed as per revert request */}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CFPSection;