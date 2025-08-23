-- Create storage bucket for CFP files
INSERT INTO storage.buckets (id, name, public) VALUES ('cfp-files', 'cfp-files', true);

-- Create policies for CFP file uploads
CREATE POLICY "Admin users can upload CFP files" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'cfp-files' AND auth.uid() IN (SELECT id FROM admin_users));

CREATE POLICY "Admin users can update CFP files" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'cfp-files' AND auth.uid() IN (SELECT id FROM admin_users));

CREATE POLICY "Admin users can delete CFP files" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'cfp-files' AND auth.uid() IN (SELECT id FROM admin_users));

CREATE POLICY "Everyone can download CFP files" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'cfp-files');