
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

export type UserRole = 'admin' | 'moderator' | 'user' | null;

export const useRole = () => {
  const [role, setRole] = useState<UserRole>(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchUserRole = async () => {
      if (!user) {
        setRole(null);
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .rpc('get_current_user_role');

        if (error) {
          console.error('Error fetching user role:', error);
          setRole(null);
        } else {
          setRole(data as UserRole);
        }
      } catch (error) {
        console.error('Error:', error);
        setRole(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUserRole();
  }, [user]);

  const hasRole = (requiredRole: UserRole): boolean => {
    if (!role || !requiredRole) return false;
    
    const roleHierarchy = { admin: 3, moderator: 2, user: 1 };
    return roleHierarchy[role] >= roleHierarchy[requiredRole];
  };

  const isAdmin = (): boolean => role === 'admin';
  const isModerator = (): boolean => role === 'moderator' || role === 'admin';

  return {
    role,
    loading,
    hasRole,
    isAdmin,
    isModerator
  };
};
