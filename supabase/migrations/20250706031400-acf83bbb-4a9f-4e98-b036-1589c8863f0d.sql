-- Update the admin policy to allow viewing contacts
-- For now, allowing anyone to view for testing - you can restrict this later with proper admin authentication
DROP POLICY "Admin can view all contacts" ON public.contacts;

CREATE POLICY "Allow viewing contact submissions" 
ON public.contacts 
FOR SELECT 
USING (true);