import { MapPin, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Conference Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">TAG-PC</h3>
            <p className="text-primary-foreground/80 mb-4">
              International Conference on Translating Across Genres: Practices & Challenges
            </p>
            <p className="text-primary-foreground/80">
              29 – 30 January 2026
            </p>
          </div>

          {/* Organization */}
          <div>
            <h3 className="text-xl font-bold mb-4">Organized by</h3>
            <p className="text-primary-foreground/80 mb-2">
              Amity School of Languages
            </p>
            <p className="text-primary-foreground/80">
              Amity University Rajasthan, Jaipur
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-primary-foreground/80 text-sm">
                  internationalconferenceasl@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-primary-foreground/80 text-sm">
                  Amity University Rajasthan, Jaipur, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} International Conference on Translation Studies (TAG-PC). All rights reserved by JSP Coders.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;