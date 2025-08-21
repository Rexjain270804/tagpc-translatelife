import { Clock, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const RegistrationSection = () => {
  const { toast } = useToast();

  const handleRegistrationClick = () => {
    toast({
      title: "Coming Soon",
      description: "Registration & Payment details will be shared with acceptance mail.",
    });
  };

  return (
    <section className="py-20 bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Registration
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Registration and payment details will be provided along with the acceptance notification
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-primary/20">
            <CardHeader className="text-center">
              <div className="mb-4">
                <Clock className="h-16 w-16 text-primary mx-auto" />
              </div>
              <CardTitle className="text-2xl text-primary">Registration Opening Soon</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-muted-foreground">
                Registration process will be activated once paper submissions are reviewed. 
                Accepted participants will receive detailed registration and payment information via email.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <CreditCard className="h-4 w-4" />
                  <span>Multiple payment options available</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Early bird discounts for accepted papers</span>
                </div>
              </div>

              <Button 
                size="lg" 
                variant="outline"
                className="w-full max-w-sm"
                onClick={handleRegistrationClick}
              >
                Registration Opening Soon
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;