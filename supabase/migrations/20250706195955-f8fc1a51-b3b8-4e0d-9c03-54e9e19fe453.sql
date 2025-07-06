-- Fix the search_path security issue for the update_updated_at_column function
-- First drop the triggers that depend on it
DROP TRIGGER IF EXISTS update_newsletter_subscriptions_updated_at ON public.newsletter_subscriptions;

-- Drop and recreate the function with proper security settings
DROP FUNCTION IF EXISTS public.update_updated_at_column() CASCADE;

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER 
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Recreate the triggers
CREATE TRIGGER update_newsletter_subscriptions_updated_at
BEFORE UPDATE ON public.newsletter_subscriptions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();