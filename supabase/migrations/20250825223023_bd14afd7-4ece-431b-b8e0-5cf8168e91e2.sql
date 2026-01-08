-- Add committee member Dr. Fabien Chartier
INSERT INTO committee_members (name, role, email, bio, order_index) 
VALUES (
  'Dr. Fabien Chartier',
  'Professor of English',
  '',
  'Professor University of Rennes, France',
  1
) ON CONFLICT DO NOTHING;