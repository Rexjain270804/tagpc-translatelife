import { useState } from 'react';
import { Clock, CreditCard, Send, User, Mail, Building, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useSubmitRegistration } from '@/hooks/useRegistration';

const RegistrationSection = () => {
  const { toast } = useToast();
  const submitRegistration = useSubmitRegistration();
  const [showForm, setShowForm] = useState(false);
  
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    affiliation: '',
    category: '',
    abstract_title: '',
    abstract_content: '',
    presentation_type: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitRegistration.mutateAsync(formData);
      toast({
        title: "Registration Submitted",
        description: "Your registration has been submitted successfully. You'll receive a confirmation email soon.",
      });
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        affiliation: '',
        category: '',
        abstract_title: '',
        abstract_content: '',
        presentation_type: ''
      });
      setShowForm(false);
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "Failed to submit registration. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
  <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Registration Plans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your registration plan. Payment details will be provided with acceptance notification.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Student Plan */}
          <Card className="border-primary/20 relative">
            <CardHeader className="text-center">
              <CardTitle className="text-xl text-primary">Student</CardTitle>
              <div className="text-3xl font-bold text-foreground">₹2,500</div>
              <p className="text-sm text-muted-foreground">Per participant</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">Conference attendance</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">Abstract submission</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">Conference materials</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">Certificate</span>
              </div>
              <Button className="w-full mt-4" disabled>
                <Clock className="mr-2 h-4 w-4" />
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          {/* Faculty Plan */}
          <Card className="border-primary/20 relative ring-2 ring-primary">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                Popular
              </div>
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-xl text-primary">Faculty</CardTitle>
              <div className="text-3xl font-bold text-foreground">₹3,500</div>
              <p className="text-sm text-muted-foreground">Per participant</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">Conference attendance</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">Abstract submission</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">Conference materials</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">Certificate</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">Lunch included</span>
              </div>
              <Button className="w-full mt-4" disabled>
                <Clock className="mr-2 h-4 w-4" />
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          {/* Industry Plan */}
          <Card className="border-primary/20 relative">
            <CardHeader className="text-center">
              <CardTitle className="text-xl text-primary">Industry</CardTitle>
              <div className="text-3xl font-bold text-foreground">₹5,000</div>
              <p className="text-sm text-muted-foreground">Per participant</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">Conference attendance</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">Abstract submission</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">Conference materials</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">Certificate</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">All meals included</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">Networking events</span>
              </div>
              <Button className="w-full mt-4" disabled>
                <Clock className="mr-2 h-4 w-4" />
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          {!showForm ? (
            <Card className="border-primary/20">
              <CardHeader className="text-center">
                <div className="mb-4">
                  <User className="h-16 w-16 text-primary mx-auto" />
                </div>
                <CardTitle className="text-2xl text-primary">Submit Your Abstract</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-muted-foreground">
                  Submit your abstract now for review. Registration and payment will open after acceptance notification.
                </p>
                
                <Button 
                  size="lg" 
                  className="w-full max-w-sm"
                  onClick={() => setShowForm(true)}
                >
                  <Send className="mr-2 h-4 w-4" />
                  Submit Abstract
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">Conference Registration Form</CardTitle>
                <p className="text-muted-foreground text-center">Please fill in all required information</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="full_name">Full Name *</Label>
                      <Input
                        id="full_name"
                        value={formData.full_name}
                        onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="affiliation">Institution/Affiliation</Label>
                      <Input
                        id="affiliation"
                        value={formData.affiliation}
                        onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="category">Participant Category *</Label>
                      <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="faculty">Faculty</SelectItem>
                          <SelectItem value="researcher">Researcher</SelectItem>
                          <SelectItem value="industry">Industry Professional</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="presentation_type">Presentation Type</Label>
                      <Select value={formData.presentation_type} onValueChange={(value) => setFormData({ ...formData, presentation_type: value })}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select presentation type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="oral">Oral Presentation</SelectItem>
                          <SelectItem value="poster">Poster Presentation</SelectItem>
                          <SelectItem value="workshop">Workshop</SelectItem>
                          <SelectItem value="panel">Panel Discussion</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="abstract_title">Abstract Title</Label>
                    <Input
                      id="abstract_title"
                      value={formData.abstract_title}
                      onChange={(e) => setFormData({ ...formData, abstract_title: e.target.value })}
                      className="mt-1"
                      placeholder="Enter the title of your abstract/paper"
                    />
                  </div>

                  <div>
                    <Label htmlFor="abstract_content">Abstract Content</Label>
                    <Textarea
                      id="abstract_content"
                      value={formData.abstract_content}
                      onChange={(e) => setFormData({ ...formData, abstract_content: e.target.value })}
                      rows={6}
                      className="mt-1"
                      placeholder="Enter your abstract content (maximum 300 words)"
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setShowForm(false)}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                    <Button 
                      type="submit" 
                      className="flex-1"
                      disabled={submitRegistration.isPending}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      {submitRegistration.isPending ? 'Submitting...' : 'Submit Registration'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;