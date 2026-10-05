import { createFileRoute } from '@tanstack/react-router';
import { AcademicsPage } from '@/components/school-pages';
import { schoolHead } from '@/lib/school';
export const Route = createFileRoute('/academics')({head:()=>schoolHead('Academics','Academics information for families at Modern Public School, Pratapgarh.'),component:AcademicsPage});
