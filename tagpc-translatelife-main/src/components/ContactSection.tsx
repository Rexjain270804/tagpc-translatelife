import { Mail, MapPin, Phone } from 'lucide-react';
import { useWebsiteContent } from '@/hooks/useWebsiteContent';

const ContactSection = () => {
  // Contact section component without form
  const { data: content } = useWebsiteContent();

  const getContent = (section: string, key: string) => {
    return content?.find(c => c.section === section && c.key === key)?.value || '';
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-gradient-to-br from-muted/30 to-background animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary">
            Contact <span className="text-primary">Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with the organizing committee for any queries about the conference
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information and Map Container */}
          <div className="glass-card rounded-3xl p-8 lg:p-12 border border-primary/20 animate-fade-in-up">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-8 text-center">Get in Touch</h3>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column: Contact Details */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center border border-primary/20 shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2">Email</h4>
                    <a
                      href={`mailto:${getContent('contact', 'email') || 'internationalconferenceasl@gmail.com'}`}
                      className="text-base text-primary hover:text-primary/80 transition-colors underline break-all"
                    >
                      {getContent('contact', 'email') || 'internationalconferenceasl@gmail.com'}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center border border-accent/20 shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2">Phone</h4>
                    <div className="space-y-1">
                      <a
                        href="tel:+919772557726"
                        className="block text-base text-accent hover:text-accent/80 transition-colors underline"
                      >
                        +91 97725 57726
                      </a>
                      <a
                        href="tel:+919352759928"
                        className="block text-base text-accent hover:text-accent/80 transition-colors underline"
                      >
                        +91 93527 59928
                      </a>
                      <a
                        href="tel:+919116997632"
                        className="block text-base text-accent hover:text-accent/80 transition-colors underline"
                      >
                        +91 91169 97632
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center border border-secondary/20 shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2">Address</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {getContent('contact', 'address') || 'Amity School of Languages, Amity University Rajasthan, Jaipur, India'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Google Map */}
              <div className="h-full min-h-[300px] w-full rounded-2xl overflow-hidden border border-secondary/20 shadow-lg">
                <iframe
                  src="https://maps.google.com/maps?q=Amity%20University%20Rajasthan%20Jaipur&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '300px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Amity University Rajasthan Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;