import { createFileRoute } from '@tanstack/react-router';
import { FeesPage } from '@/components/school-pages';
import { schoolHead } from '@/lib/school';
export const Route = createFileRoute('/fees')({head:()=>schoolHead('School Fees','School Fees information for families at Modern Public School, Pratapgarh.'),component:FeesPage});
