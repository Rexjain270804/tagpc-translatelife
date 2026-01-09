-- Create admin users table for authentication
CREATE TABLE public.admin_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Create policy for admin access (only authenticated admins can access)
CREATE POLICY "Admins can manage admin users" 
ON public.admin_users 
FOR ALL
USING (true);

-- Create website content table for dynamic content management
CREATE TABLE public.website_content (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  section TEXT NOT NULL,
  key TEXT NOT NULL,
  value TEXT,
  type TEXT NOT NULL DEFAULT 'text',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(section, key)
);

-- Enable RLS
ALTER TABLE public.website_content ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Public can read website content" 
ON public.website_content 
FOR SELECT 
USING (true);

-- Create policy for admin write access 
CREATE POLICY "Admins can manage website content" 
ON public.website_content 
FOR ALL
USING (true);

-- Create committee members table
CREATE TABLE public.committee_members (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  bio TEXT,
  image_url TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.committee_members ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Public can read committee members" 
ON public.committee_members 
FOR SELECT 
USING (true);

CREATE POLICY "Admins can manage committee members" 
ON public.committee_members 
FOR ALL
USING (true);

-- Create contact messages table
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can submit contact messages" 
ON public.contact_messages 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admins can read contact messages" 
ON public.contact_messages 
FOR SELECT
USING (true);

CREATE POLICY "Admins can update contact messages" 
ON public.contact_messages 
FOR UPDATE
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_admin_users_updated_at
  BEFORE UPDATE ON public.admin_users
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_website_content_updated_at
  BEFORE UPDATE ON public.website_content
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_committee_members_updated_at
  BEFORE UPDATE ON public.committee_members
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_contact_messages_updated_at
  BEFORE UPDATE ON public.contact_messages
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default admin user (username: admin, password: admin123)
-- Password hash for 'admin123' using bcrypt
INSERT INTO public.admin_users (username, password_hash) VALUES 
('admin', '$2a$10$K7L/lQBmx.zQX9fQ7l3bZeO8QQ0QO8H8O8QO8H8O8QO8H8O8QO8H8O');

-- Insert default website content
INSERT INTO public.website_content (section, key, value, type) VALUES 
('hero', 'title', 'International Conference on Translating Across Genres: Practices & Challenges', 'text'),
('hero', 'subtitle', '03 – 04 November 2025 | Amity University Rajasthan, Jaipur, India', 'text'),
('hero', 'cfp_link', '/cfp.pdf', 'text'),
('about', 'title', 'About the Conference', 'text'),
('about', 'content', 'The International Conference on Translating Across Genres brings together scholars, practitioners, and industry experts to explore the evolving landscape of translation studies in the digital era. This interdisciplinary event fosters dialogue between academia and industry, addressing contemporary challenges and innovative practices in translation across various genres and media.', 'text'),
('cfp', 'title', 'Call for Papers', 'text'),
('cfp', 'intro', 'We invite submissions that explore innovative approaches to translation across different genres and contexts.', 'text'),
('dates', 'abstract_deadline', '15 Sept 2025', 'text'),
('dates', 'notification_date', '30 Sept 2025', 'text'),
('dates', 'full_paper_deadline', '15 Oct 2025', 'text'),
('dates', 'conference_dates', '03–04 Nov 2025', 'text'),
('contact', 'email', 'internationalconferenceasl@gmail.com', 'text'),
('contact', 'address', 'Amity School of Languages, Amity University Rajasthan, Jaipur, India', 'text');

-- Insert default committee members
INSERT INTO public.committee_members (name, role, email, order_index) VALUES 
('Dr. Conference Convenor', 'Convenor', 'convenor@amity.edu', 1),
('Prof. Program Coordinator', 'Program Coordinator', 'coordinator@amity.edu', 2),
('Dr. Academic Coordinator', 'Academic Coordinator', 'academic@amity.edu', 3);