import { useState } from 'react';
import { Clock, CreditCard, Send, User, Mail, Building, FileText, Download } from 'lucide-react';
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
    <section id="registration" className="py-16 md:py-20 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="container mx-auto px-4">
        {/* Conference Overview & Topics */}
        {/* Suggested Topics */}
        <div className="mb-8 md:mb-12 bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-primary/20">
          <h4 className="font-semibold text-primary mb-2 text-lg md:text-xl">Suggested Topics</h4>
          <ul className="list-disc list-inside text-muted-foreground text-sm md:text-base space-y-1 md:space-y-2">
            <li>Literary Translation: style, humor, cultural metaphors, retranslation, canon formation</li>
            <li>Specialized Translation: legal, medical, technical, terminology, ethics</li>
            <li>Audiovisual & Multimedia Translation: subtitling, dubbing, localization, accessibility, AI</li>
            <li>Technology & Future Trends: AI, neural MT, CAT tools, automation</li>
            <li>Pedagogy & Profession: training, industry vs. academia, freelance challenges</li>
            <li>Cultural & Contextual Challenges: untranslatability, idioms, oral traditions, humor, politics</li>
          </ul>
        </div>

        {/* Submission Guidelines */}
        <div className="mb-8 md:mb-12 bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-primary/20">
          <h4 className="font-semibold text-primary mb-2 text-lg md:text-xl">Submission Guidelines</h4>
          <ul className="list-disc list-inside text-muted-foreground text-sm md:text-base space-y-1 md:space-y-2">
            <li>Abstract: 250-300 words (English or other accepted languages)</li>
            <li>Full Paper (optional): 3500-4000 words, APA 7th Edition</li>
            <li>Deadline for Abstracts: <span className="font-semibold">10/01/2026</span></li>
            <li>Notification of Acceptance: <span className="font-semibold">11/01/2026</span></li>
            <li>Full Paper Submission: <span className="font-semibold">18/01/2026</span></li>
            <li>Submission Email: <a href="mailto:internationalconferenceasl@gmail.com" className="text-primary underline">internationalconferenceasl@gmail.com</a></li>
          </ul>
          <div className="mt-6 flex justify-center">
            <Button
              variant="default"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => window.open('/CFP TAG-PC_final.pdf', '_blank')}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Call for Papers
            </Button>
          </div>
        </div>

        {/* Registration Pricing Plans */}
        <div className="mb-8 md:mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-primary">Registration Plans</h3>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Amitians Plan */}
            <div className="bg-white rounded-2xl shadow-lg border border-primary/20 p-6 md:p-8 text-center relative">
              <h4 className="text-lg md:text-xl font-bold text-primary mb-4">Amitians</h4>
              <div className="mb-6">
                <div className="text-lg font-semibold text-foreground mb-2">Professionals & Academicians</div>
                <div className="text-2xl md:text-3xl font-bold text-primary">₹1,000</div>
              </div>
              <div className="mb-6">
                <div className="text-lg font-semibold text-foreground mb-2">Research Scholars & Students</div>
                <div className="text-2xl md:text-3xl font-bold text-primary">₹800</div>
              </div>
              <div className="space-y-2">
                <Button
                  className="w-full"
                  size="lg"
                  onClick={() => window.open('https://www.amity.edu/jaipur/paymentgateway/TAGPC2025', '_blank')}
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Register as Professional
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  size="lg"
                  onClick={() => window.open('https://www.amity.edu/jaipur/paymentgateway/TAGPC2025', '_blank')}
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Register as Student
                </Button>
              </div>
            </div>

            {/* Non-Amitians Plan */}
            <div className="bg-white rounded-2xl shadow-lg border border-primary/20 p-6 md:p-8 text-center relative">
              <h4 className="text-lg md:text-xl font-bold text-primary mb-4">Non-Amitians</h4>
              <div className="mb-6">
                <div className="text-lg font-semibold text-foreground mb-2">Professionals & Academicians</div>
                <div className="text-xl md:text-2xl font-bold text-primary">₹1,000 + 18% GST</div>
              </div>
              <div className="mb-6">
                <div className="text-lg font-semibold text-foreground mb-2">Research Scholars & Students</div>
                <div className="text-xl md:text-2xl font-bold text-primary">₹800 + 18% GST</div>
              </div>
              <div className="space-y-2">
                <Button
                  className="w-full"
                  size="lg"
                  onClick={() => window.open('https://www.amity.edu/jaipur/paymentgateway/TAGPC2025', '_blank')}
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Register as Professional
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  size="lg"
                  onClick={() => window.open('https://www.amity.edu/jaipur/paymentgateway/TAGPC2025', '_blank')}
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Register as Student
                </Button>
              </div>
            </div>

            {/* International Plan */}
            <div className="bg-white rounded-2xl shadow-lg border border-primary/20 p-6 md:p-8 text-center relative">
              <h4 className="text-lg md:text-xl font-bold text-primary mb-4">International</h4>
              <div className="mb-12">
                <div className="text-lg font-semibold text-foreground mb-2">All Participants</div>
                <div className="text-3xl md:text-4xl font-bold text-primary">$35</div>
              </div>
              <Button
                className="w-full"
                size="lg"
                onClick={() => window.open('https://www.amity.edu/jaipur/paymentgateway/TAGPC2025', '_blank')}
              >
                <CreditCard className="mr-2 h-4 w-4" />
                Register Now
              </Button>
            </div>
          </div>
        </div>

        {/* Publication Opportunity */}
        <div className="mb-8 md:mb-12 bg-white rounded-2xl shadow-lg p-6 border border-primary/20 text-center">
          <h4 className="font-semibold text-primary mb-2 text-lg md:text-xl">Publication Opportunity</h4>
          <p className="text-muted-foreground text-base md:text-lg">Selected papers will be considered for publication in SCOPUS indexed journal (subject to peer review).</p>
        </div>

        {/* Contact Details */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-primary/20">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-6 md:mb-8 text-center">Contact Details & Information</h3>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-center">
              <div>
                <span className="font-bold text-base md:text-lg text-primary flex items-center justify-center gap-2 mb-3">
                  <Mail className="h-4 w-4 md:h-5 md:w-5" />Convenor
                </span>
                <div className="text-sm md:text-base font-semibold mb-1">Prof Dipa Chakrabarti</div>
                <div className="text-xs md:text-sm text-muted-foreground mb-2">HOI, Amity School of Languages<br />Amity University Rajasthan</div>
                <a href="mailto:dchakrabarti@jpr.amity.edu" className="text-primary underline block text-xs md:text-sm">dchakrabarti@jpr.amity.edu</a>
                <div className="text-xs md:text-sm mt-1">9772557726</div>
              </div>
              <div>
                <span className="font-bold text-base md:text-lg text-primary flex items-center justify-center gap-2 mb-3">
                  <User className="h-4 w-4 md:h-5 md:w-5" />Coordinator
                </span>
                <div className="text-sm md:text-base font-semibold mb-1">Prof Parul Mishra</div>
                <a href="mailto:pmishra@jpr.amity.edu" className="text-primary underline block text-xs md:text-sm mt-2">pmishra@jpr.amity.edu</a>
                <div className="text-xs md:text-sm mt-1">9116997632</div>
              </div>
              <div>
                <span className="font-bold text-base md:text-lg text-primary flex items-center justify-center gap-2 mb-3">
                  <User className="h-4 w-4 md:h-5 md:w-5" />Coordinator
                </span>
                <div className="text-sm md:text-base font-semibold mb-1">Dr Manoj Kumar</div>
                <div className="text-xs md:text-sm text-muted-foreground mb-2">Assistant Professor<br />Amity School of Languages</div>
                <a href="mailto:mkumar1@jpr.amity.edu" className="text-primary underline block text-xs md:text-sm mt-2">mkumar1@jpr.amity.edu</a>
                <div className="text-xs md:text-sm mt-1">9352759928</div>
              </div>
            </div>
            <div className="mt-6 md:mt-8 text-center">
              <span className="font-semibold text-sm md:text-base">Email:</span>
              <a href="mailto:internationalconferenceasl@gmail.com" className="text-primary underline ml-1 text-sm md:text-base">internationalconferenceasl@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegistrationSection;