-- Create website_content table for dynamic content management
CREATE TABLE public.website_content (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  section TEXT NOT NULL,
  key TEXT NOT NULL,
  value TEXT,
  type TEXT DEFAULT 'text',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(section, key)
);

-- Create committee_members table
CREATE TABLE public.committee_members (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  email TEXT,
  bio TEXT,
  image_url TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create contact_messages table
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.website_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.committee_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- RLS policies for website_content
CREATE POLICY "Anyone can view website content" 
ON public.website_content 
FOR SELECT 
USING (true);

CREATE POLICY "Admin users can manage website content" 
ON public.website_content 
FOR ALL 
USING (EXISTS (SELECT 1 FROM admin_users WHERE admin_users.id = auth.uid()));

-- RLS policies for committee_members
CREATE POLICY "Anyone can view committee members" 
ON public.committee_members 
FOR SELECT 
USING (true);

CREATE POLICY "Admin users can manage committee members" 
ON public.committee_members 
FOR ALL 
USING (EXISTS (SELECT 1 FROM admin_users WHERE admin_users.id = auth.uid()));

-- RLS policies for contact_messages
CREATE POLICY "Users can insert contact messages" 
ON public.contact_messages 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admin users can view contact messages" 
ON public.contact_messages 
FOR SELECT 
USING (EXISTS (SELECT 1 FROM admin_users WHERE admin_users.id = auth.uid()));

-- Add triggers for automatic timestamp updates
CREATE TRIGGER update_website_content_updated_at
BEFORE UPDATE ON public.website_content
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_committee_members_updated_at
BEFORE UPDATE ON public.committee_members
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default website content
INSERT INTO public.website_content (section, key, value) VALUES
('hero', 'title', 'International Conference on Translating Across Genres'),
('hero', 'subtitle', '03 – 04 November 2025 | Amity University Rajasthan, Jaipur, India'),
('hero', 'cfp_link', '/cfp.pdf'),
('about', 'title', 'About TAG-PC 2025'),
('about', 'content', 'The International Conference on Translating Across Genres brings together scholars, researchers, and practitioners to explore the challenges and opportunities in translation across different literary and textual genres.'),
('cfp', 'title', 'Call for Papers'),
('cfp', 'intro', 'We invite submissions for papers, workshops, and presentations on all aspects of translation across genres.'),
('dates', 'abstract_deadline', 'September 15, 2025'),
('dates', 'notification_date', 'October 1, 2025'),
('dates', 'full_paper_deadline', 'October 15, 2025'),
('dates', 'conference_dates', 'November 3-4, 2025'),
('contact', 'email', 'internationalconferenceasl@gmail.com'),
('contact', 'address', 'Amity University Rajasthan, Jaipur, India');

-- Insert sample committee members
INSERT INTO public.committee_members (name, role, email, bio, order_index) VALUES
('Dr. Jane Smith', 'Conference Chair', 'jane.smith@university.edu', 'Leading expert in translation studies with 20+ years of experience.', 1),
('Prof. John Doe', 'Program Committee Chair', 'john.doe@university.edu', 'Renowned scholar in comparative literature and translation theory.', 2),
('Dr. Sarah Johnson', 'Local Organizing Committee', 'sarah.johnson@amity.edu', 'Associate Professor of Languages at Amity University Rajasthan.', 3);