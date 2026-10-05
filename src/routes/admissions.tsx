import { createFileRoute } from '@tanstack/react-router';
import { AdmissionsPage } from '@/components/school-pages';
import { schoolHead } from '@/lib/school';
export const Route = createFileRoute('/admissions')({head:()=>schoolHead('Admissions','Admissions information for families at Modern Public School, Pratapgarh.'),component:AdmissionsPage});
