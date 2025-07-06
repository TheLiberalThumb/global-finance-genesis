-- Phase 2: Update RLS policies to allow authenticated admin users to view data

-- Update the admin policy for contacts to allow authenticated users
DROP POLICY "Admin can view all contacts" ON public.contacts;
CREATE POLICY "Authenticated users can view all contacts" 
ON public.contacts 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

-- Update the admin policy for newsletter subscriptions to allow authenticated users  
DROP POLICY "Admin can view all newsletter subscriptions" ON public.newsletter_subscriptions;
CREATE POLICY "Authenticated users can view all newsletter subscriptions" 
ON public.newsletter_subscriptions 
FOR SELECT 
USING (auth.uid() IS NOT NULL);