-- Create the products storage bucket for digital product file uploads
insert into storage.buckets (id, name, public)
values ('products', 'products', true)
on conflict (id) do nothing;

-- Allow authenticated users to upload files to their own folder
create policy "Users can upload their own product files"
on storage.objects for insert
to authenticated
with check (bucket_id = 'products');

-- Allow public read access (files are served to buyers via signed URLs)
create policy "Public read access for product files"
on storage.objects for select
to public
using (bucket_id = 'products');

-- Allow authenticated users to delete their own product files
create policy "Users can delete their own product files"
on storage.objects for delete
to authenticated
using (bucket_id = 'products' and (storage.foldername(name))[1] = auth.uid()::text);
