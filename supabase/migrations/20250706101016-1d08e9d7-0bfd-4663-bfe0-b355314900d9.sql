-- Phase 1: Secure Database Access - Replace overly permissive RLS policies

-- Drop the existing overly permissive policies
DROP POLICY "Allow viewing contact submissions" ON public.contacts;
DROP POLICY "Allow viewing newsletter subscriptions" ON public.newsletter_subscriptions;

-- Create secure admin-only policies for contacts table
CREATE POLICY "Admin can view all contacts" 
ON public.contacts 
FOR SELECT 
USING (false); -- Block all access by default, will be updated after admin auth is implemented

-- Create secure admin-only policies for newsletter subscriptions table  
CREATE POLICY "Admin can view all newsletter subscriptions" 
ON public.newsletter_subscriptions 
FOR SELECT 
USING (false); -- Block all access by default, will be updated after admin auth is implemented

-- Keep the existing insert policies as they allow public form submissions
-- (These are already secure as they only allow INSERT operations)