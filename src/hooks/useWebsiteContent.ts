import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface WebsiteContent {
  id: string;
  section: string;
  key: string;
  value: string;
  type: string;
}

export const useWebsiteContent = () => {
  return useQuery({
    queryKey: ['website-content'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('website_content')
        .select('*')
        .order('section', { ascending: true });
      
      if (error) throw error;
      return data as WebsiteContent[];
    },
  });
};

export const useUpdateWebsiteContent = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ section, key, value }: { section: string; key: string; value: string }) => {
      const { error } = await supabase
        .from('website_content')
        .upsert({ section, key, value }, { onConflict: 'section,key' });
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['website-content'] });
    },
  });
};

export const useCommitteeMembers = () => {
  return useQuery({
    queryKey: ['committee-members'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('committee_members')
        .select('*')
        .order('order_index', { ascending: true });
      
      if (error) throw error;
      return data;
    },
  });
};

export const useContactMessages = () => {
  return useQuery({
    queryKey: ['contact-messages'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });
};

export const useSubmitContactMessage = () => {
  return useMutation({
    mutationFn: async ({ name, email, message }: { name: string; email: string; message: string }) => {
      const { error } = await supabase
        .from('contact_messages')
        .insert({ name, email, message });
      
      if (error) throw error;
    },
  });
};
