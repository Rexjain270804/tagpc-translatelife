import { Globe, BookOpen, Users } from 'lucide-react';
import { useWebsiteContent } from '@/hooks/useWebsiteContent';

const AboutSection = () => {
  const { data: content } = useWebsiteContent();

  const getContent = (section: string, key: string) => {
    return content?.find(c => c.section === section && c.key === key)?.value || '';
  };

  return (
    <section id="about" className="py-16 lg:py-24 bg-gradient-to-br from-background to-muted/30 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6">

        {/* About ASL */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary text-center">
            About Amity School of <span className="text-primary">Languages</span>
          </h2>
          <p className="text-base md:text-lg text-foreground leading-relaxed max-w-4xl mx-auto text-justify">
            ASL provides a platform for multi disciplinary and multilingual proficiency since its inception in 2007. ASL plays a major role in the internationalization of the HEI by providing teaching-learning in international languages: French, German, Spanish, and Mandarin. It aims to promote and implement active international collaborations through Student Exchange Programs. The school has established two Memorandum of Understandings (MOUs) with prestigious institutions in France: Sciences Po Bordeaux, Bordeaux (France) and Rennes School of Business (France). A highly equipped language laboratory provides students with an immersive environment for learning foreign languages. This exposure not only fosters language acquisition through an innovative self-directed learning approach but also enhances verbal skills. ASL ensures the development of globally competent graduates as per the CEFR levels A1-C1/C2. Additionally, all students at the university receive a Certificate of Proficiency in a foreign language upon completing their studies. The progressive UG and PG syllabi of core programmes offered by the department, BA (Hons) English with Research, BA (Hons) French with Research, MA English and MA French, familiarize students with contemporary trends and technical aspects of the field. The core programs foster the ability to think critically, interpret texts, and appreciate the power of language in shaping thought and representing the world. The department also offers Doctoral programmes in French, English, German and Spanish. With a thrust on international collaboration the Department aims to provide global exposure to students, scholars and researchers.
          </p>
        </div>

        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary text-center">
            About the <span className="text-primary">Conference</span>
          </h2>

          <div className="space-y-6">
            <p className="text-base md:text-lg text-foreground leading-relaxed max-w-4xl mx-auto text-justify">
              With globalization and digital media, the demand for specialized translation has grown exponentially. This conference addresses the need for tailored approaches to ensure accuracy, cultural relevance, and functional effectiveness across genres. We invite scholars, researchers, practitioners, and students to explore the latest developments, challenges, and innovations in the field of translation and interpreting in the era of digitalisation. This interdisciplinary conference aims to foster diversity of translation across all genres and specializations, from literary and technical translation to multimedia localization and AI-driven solutions.
            </p>
          </div>

          <div className="space-y-4 mt-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4 text-left">Objectives</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <span className="text-base md:text-lg text-foreground">Dissect the unique challenges inherent in different textual genres.</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <span className="text-base md:text-lg text-foreground">Showcase innovative practices and methodologies.</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <span className="text-base md:text-lg text-foreground">Foster a dialogue between theoretical approaches and ground-level practicalities.</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <span className="text-base md:text-lg text-foreground">Explore the impact of technology on genre-specific translation.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;