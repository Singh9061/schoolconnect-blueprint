import { createFileRoute } from '@tanstack/react-router';
import { FacilitiesPage } from '@/components/school-pages';
import { schoolHead } from '@/lib/school';
export const Route = createFileRoute('/facilities')({head:()=>schoolHead('Facilities','Facilities information for families at Modern Public School, Pratapgarh.'),component:FacilitiesPage});
