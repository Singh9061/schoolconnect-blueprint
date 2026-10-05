import { createFileRoute } from '@tanstack/react-router';
import { ContactPage } from '@/components/school-pages';
import { schoolHead } from '@/lib/school';
export const Route = createFileRoute('/contact')({head:()=>schoolHead('Contact Us','Contact Us information for families at Modern Public School, Pratapgarh.'),component:ContactPage});
