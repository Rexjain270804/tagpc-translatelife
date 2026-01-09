import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export const useCFPFile = () => {
  return useQuery({
    queryKey: ['cfp-file'],
    queryFn: async () => {
      const { data, error } = await supabase.storage
        .from('cfp-files')
        .list('', { limit: 1 });
      
      if (error) throw error;
      return data?.[0] || null;
    },
  });
};

export const useUploadCFPFile = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (file: File) => {
      // Delete existing CFP file if any
      const { data: existingFiles } = await supabase.storage
        .from('cfp-files')
        .list('');
      
      if (existingFiles && existingFiles.length > 0) {
        await supabase.storage
          .from('cfp-files')
          .remove(existingFiles.map(f => f.name));
      }
      
      // Upload new file
      const fileName = `cfp-${Date.now()}.pdf`;
      const { error } = await supabase.storage
        .from('cfp-files')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: true
        });
      
      if (error) throw error;
      return fileName;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cfp-file'] });
    },
  });
};

export const getCFPFileUrl = (fileName: string) => {
  const { data } = supabase.storage
    .from('cfp-files')
    .getPublicUrl(fileName);
  
  return data.publicUrl;
};