import { createFileRoute } from '@tanstack/react-router';
import { AboutPage } from '@/components/school-pages';
import { schoolHead } from '@/lib/school';
export const Route = createFileRoute('/about')({head:()=>schoolHead('About Us','About Us information for families at Modern Public School, Pratapgarh.'),component:AboutPage});
