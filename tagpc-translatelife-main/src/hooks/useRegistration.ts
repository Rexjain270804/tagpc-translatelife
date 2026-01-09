import { useMutation, useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface RegistrationData {
  full_name: string;
  email: string;
  phone?: string;
  affiliation?: string;
  category: string;
  abstract_title?: string;
  abstract_content?: string;
  presentation_type?: string;
}

export const useSubmitRegistration = () => {
  return useMutation({
    mutationFn: async (data: RegistrationData) => {
      const { error } = await supabase
        .from('registrations')
        .insert(data);
      
      if (error) throw error;
    },
  });
};

export const useRegistrations = () => {
  return useQuery({
    queryKey: ['registrations'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('registrations')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });
};