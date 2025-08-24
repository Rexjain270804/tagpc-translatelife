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
        {/* Conference Info Block */}
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary drop-shadow-lg tracking-tight">
            International Conference on Translation Studies
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-lg text-muted-foreground font-medium">
            <span className="bg-primary/10 px-4 py-2 rounded-xl">Theme: <span className="font-bold text-primary">Translating across Genres: Practices & Challenges (TAG-PC)</span></span>
            <span className="bg-primary/10 px-4 py-2 rounded-xl">Dates: <span className="font-bold text-primary">03 – 04 November 2025</span></span>
            <span className="bg-primary/10 px-4 py-2 rounded-xl">Location: <span className="font-bold text-primary">Amity University Rajasthan, Jaipur, India</span></span>
          </div>
          <div className="mt-4 text-base text-muted-foreground">Organized by: <span className="font-semibold text-primary">Amity School of Languages, Amity University Rajasthan</span></div>
        </div> */}

        {/* Conference Overview & Topics */}
        <div className="mb-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-4">Conference Overview</h3>
            <p className="text-muted-foreground mb-6 text-lg">With globalization and digital media, the demand for specialized translation has grown exponentially. This conference addresses the need for tailored approaches to ensure accuracy, cultural relevance, and functional effectiveness across genres. It celebrates the diversity of translation across all genres and specializations, from literary and technical translation to multimedia localization and AI-driven solutions. Scholars, translators, linguists, and industry professionals will discuss the complexities of translating different genres—such as literary, technical, legal, medical, audiovisual, and digital texts.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-primary/20">
            <h4 className="font-semibold text-primary mb-2 text-xl">Suggested Topics</h4>
            <ul className="list-disc list-inside text-muted-foreground text-base space-y-2">
              <li>Literary Translation: style, humor, cultural metaphors, retranslation, canon formation</li>
              <li>Specialized Translation: legal, medical, technical, terminology, ethics</li>
              <li>Audiovisual & Multimedia Translation: subtitling, dubbing, localization, accessibility, AI</li>
              <li>Technology & Future Trends: AI, neural MT, CAT tools, automation</li>
              <li>Pedagogy & Profession: training, industry vs. academia, freelance challenges</li>
              <li>Cultural & Contextual Challenges: untranslatability, idioms, oral traditions, humor, politics</li>
            </ul>
          </div>
        </div>

        {/* Submission Guidelines */}
        <div className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-primary/20">
          <h4 className="font-semibold text-primary mb-2 text-xl">Submission Guidelines</h4>
          <ul className="list-disc list-inside text-muted-foreground text-base space-y-2">
            <li>Abstract: 250-300 words (English or other accepted languages)</li>
            <li>Full Paper (optional): 3500-4000 words, APA 7th Edition</li>
            <li>Presentation Formats: Oral (15-20 mins + Q&A), Poster</li>
            <li>Deadline for Abstracts: <span className="font-semibold">15/09/2025</span></li>
            <li>Notification of Acceptance: <span className="font-semibold">30/09/2025</span> (payment link shared with acceptance mail)</li>
            <li>Full Paper Submission: <span className="font-semibold">15/10/2025</span></li>
            <li>Submission Email: <a href="mailto:internationalconferenceasl@gmail.com" className="text-primary underline">internationalconferenceasl@gmail.com</a></li>
          </ul>
        </div>

        {/* Registration Fees Table */}
        <div className="overflow-x-auto mb-12">
          <table className="min-w-full bg-white rounded-2xl shadow-lg border border-primary/20">
            <thead>
              <tr className="bg-primary/10">
                <th className="py-4 px-8 text-left font-bold text-primary text-lg">Amitians</th>
                <th className="py-4 px-8 text-left font-bold text-primary text-lg">Non-Amitians</th>
                <th className="py-4 px-8 text-left font-bold text-primary text-lg">International</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-primary/5 transition-all">
                <td className="py-4 px-8 border-t text-base font-semibold text-black">Professionals and Academicians – Rs. 1000/-</td>
                <td className="py-4 px-8 border-t text-base font-semibold text-black">Professionals and Academicians – 1000/- + 18% GST</td>
                <td className="py-4 px-8 border-t text-center font-bold text-black text-lg">35 $</td>
              </tr>
              <tr className="hover:bg-accent/5 transition-all">
                <td className="py-4 px-8 border-t text-base font-semibold text-black">Research Scholars and students: Rs. 800/-</td>
                <td className="py-4 px-8 border-t text-base font-semibold text-black">Research Scholars and students: Rs. 800/- + 18% GST</td>
                <td className="py-4 px-8 border-t"></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Publication Opportunity */}
        <div className="mb-12 bg-white rounded-2xl shadow-lg p-6 border border-primary/20 text-center">
          <h4 className="font-semibold text-primary mb-2 text-xl">Publication Opportunity</h4>
          <p className="text-muted-foreground text-lg">Selected papers will be considered for publication in a scholarly journal (subject to peer review).</p>
        </div>

        {/* Contact Details */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Contact Details & Information</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <span className="font-bold text-lg text-primary flex items-center justify-center gap-2"><Mail className="inline-block mr-1"/>Convenor</span>
                <div className="mt-2 font-semibold">Prof Dipa Chakrabarti</div>
                <div className="text-muted-foreground">Head, Amity School of Languages<br/>Amity University Rajasthan</div>
                <a href="mailto:dchakrabarti@jpr.amity.edu" className="text-primary underline block mt-2">dchakrabarti@jpr.amity.edu</a>
                <div className="mt-1">9772557726</div>
              </div>
              <div>
                <span className="font-bold text-lg text-primary flex items-center justify-center gap-2"><User className="inline-block mr-1"/>Coordinator</span>
                <div className="mt-2 font-semibold">Prof Parul Mishra</div>
                <a href="mailto:pmishra@jpr.amity.edu" className="text-primary underline block mt-2">pmishra@jpr.amity.edu</a>
                <div className="mt-1">9116997632</div>
              </div>
              <div>
                <span className="font-bold text-lg text-primary flex items-center justify-center gap-2"><User className="inline-block mr-1"/>Coordinator</span>
                <div className="mt-2 font-semibold">Dr Manoj Kumar</div>
                <a href="mailto:mkumar1@jpr.amity.edu" className="text-primary underline block mt-2">mkumar1@jpr.amity.edu</a>
                <div className="mt-1">9352759928</div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <span className="font-semibold">Email:</span> <a href="mailto:internationalconferenceasl@gmail.com" className="text-primary underline">internationalconferenceasl@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
      {/* Removed unnecessary empty div */}
    </section>
  );
}

export default RegistrationSection;