import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, User, Mail, Building, FileText, Phone, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useSubmitRegistration } from '@/hooks/useRegistration';
// Using the uploaded QR code URL directly
const paymentQR = '/lovable-uploads/3207353f-c982-4664-8f4b-6dd9028a2af1.png';

const Registration = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const submitRegistration = useSubmitRegistration();
  
  const planType = searchParams.get('plan') || 'amitians';
  const category = searchParams.get('category') || 'professional';
  
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    affiliation: '',
    category: `${planType}-${category}`,
    abstract_title: '',
    abstract_content: '',
    presentation_type: ''
  });

  const [showPayment, setShowPayment] = useState(false);

  const planPricing = {
    'amitians-professional': '₹1,000',
    'amitians-student': '₹800',
    'non-amitians-professional': '₹1,180 (₹1,000 + 18% GST)',
    'non-amitians-student': '₹944 (₹800 + 18% GST)',
    'international-all': '$35'
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.full_name || !formData.email || !formData.category) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setShowPayment(true);
  };

  const handlePaymentConfirmation = async () => {
    try {
      await submitRegistration.mutateAsync(formData);
      toast({
        title: "Registration Submitted",
        description: "Your registration has been submitted successfully. You'll receive a confirmation email soon.",
      });
      navigate('/');
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "Failed to submit registration. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (showPayment) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/10 py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <Button 
            variant="ghost" 
            onClick={() => setShowPayment(false)}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Form
          </Button>
          
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-primary">Payment</CardTitle>
              <p className="text-muted-foreground">Complete your registration payment</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Registration Fee</h3>
                <p className="text-3xl font-bold text-primary">{planPricing[formData.category as keyof typeof planPricing]}</p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-4">Scan QR Code to Pay</h3>
                <div className="flex justify-center mb-4">
                  <img 
                    src={paymentQR} 
                    alt="Payment QR Code" 
                    className="w-64 h-64 border rounded-lg shadow-md"
                  />
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Scan this QR code with your preferred payment app to complete the registration
                </p>
              </div>

              <div className="bg-accent/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Registration Summary:</h4>
                <p><strong>Name:</strong> {formData.full_name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Category:</strong> {formData.category.replace('-', ' ').toUpperCase()}</p>
                <p><strong>Amount:</strong> {planPricing[formData.category as keyof typeof planPricing]}</p>
              </div>

              <Button 
                onClick={handlePaymentConfirmation}
                className="w-full"
                size="lg"
              >
                <CreditCard className="mr-2 h-4 w-4" />
                I have completed the payment
              </Button>
              
              <p className="text-xs text-center text-muted-foreground">
                Click the button above after completing your payment. You will receive a confirmation email shortly.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/10 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
        
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary text-center">
              Conference Registration
            </CardTitle>
            <p className="text-center text-muted-foreground">
              Translation across Genres: Adapting Approaches for Diverse Contexts
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Personal Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="full_name">Full Name *</Label>
                    <Input
                      id="full_name"
                      value={formData.full_name}
                      onChange={(e) => handleInputChange('full_name', e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="affiliation">Affiliation</Label>
                    <Input
                      id="affiliation"
                      value={formData.affiliation}
                      onChange={(e) => handleInputChange('affiliation', e.target.value)}
                      placeholder="University/Organization"
                    />
                  </div>
                </div>
              </div>

              {/* Registration Category */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Registration Details</h3>
                
                <div>
                  <Label htmlFor="category">Registration Category *</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="amitians-professional">Amitians - Professional/Academician (₹1,000)</SelectItem>
                      <SelectItem value="amitians-student">Amitians - Student/Research Scholar (₹800)</SelectItem>
                      <SelectItem value="non-amitians-professional">Non-Amitians - Professional/Academician (₹1,180)</SelectItem>
                      <SelectItem value="non-amitians-student">Non-Amitians - Student/Research Scholar (₹944)</SelectItem>
                      <SelectItem value="international-all">International - All Participants ($35)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Abstract Submission */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Abstract Submission (Optional)</h3>
                
                <div>
                  <Label htmlFor="presentation_type">Presentation Type</Label>
                  <Select value={formData.presentation_type} onValueChange={(value) => handleInputChange('presentation_type', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select presentation type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">No Presentation</SelectItem>
                      <SelectItem value="oral">Oral Presentation (15-20 mins + Q&A)</SelectItem>
                      <SelectItem value="poster">Poster Presentation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {formData.presentation_type && (
                  <>
                    <div>
                      <Label htmlFor="abstract_title">Abstract Title</Label>
                      <Input
                        id="abstract_title"
                        value={formData.abstract_title}
                        onChange={(e) => handleInputChange('abstract_title', e.target.value)}
                        placeholder="Enter your abstract title"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="abstract_content">Abstract Content (250-300 words)</Label>
                      <Textarea
                        id="abstract_content"
                        value={formData.abstract_content}
                        onChange={(e) => handleInputChange('abstract_content', e.target.value)}
                        placeholder="Enter your abstract content..."
                        rows={6}
                        className="resize-none"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        {formData.abstract_content.split(' ').filter(word => word.length > 0).length} words
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Registration Fee Display */}
              <div className="bg-accent/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Registration Fee:</h4>
                <p className="text-2xl font-bold text-primary">
                  {planPricing[formData.category as keyof typeof planPricing] || 'Please select category'}
                </p>
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={submitRegistration.isPending}>
                {submitRegistration.isPending ? 'Processing...' : 'Proceed to Payment'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Registration;