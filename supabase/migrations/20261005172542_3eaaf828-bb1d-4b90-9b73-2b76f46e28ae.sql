CREATE TABLE public.contact_submissions (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), parent_name text NOT NULL, phone text NOT NULL DEFAULT '', email text NOT NULL DEFAULT '', grade text NOT NULL DEFAULT '', message text NOT NULL, created_at timestamptz NOT NULL DEFAULT now());
GRANT ALL ON public.contact_submissions TO service_role;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
CREATE TABLE public.admission_applications (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), parent_name text NOT NULL, phone text NOT NULL, email text NOT NULL DEFAULT '', student_name text NOT NULL, date_of_birth date NOT NULL, section text NOT NULL, address text NOT NULL, document_paths jsonb NOT NULL DEFAULT '[]', status text NOT NULL DEFAULT 'submitted', created_at timestamptz NOT NULL DEFAULT now());
GRANT ALL ON public.admission_applications TO service_role;
ALTER TABLE public.admission_applications ENABLE ROW LEVEL SECURITY;