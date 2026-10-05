import { createFileRoute } from '@tanstack/react-router';
import { CalendarPage } from '@/components/school-pages';
import { schoolHead } from '@/lib/school';
export const Route = createFileRoute('/calendar')({head:()=>schoolHead('Academic Calendar','Academic Calendar information for families at Modern Public School, Pratapgarh.'),component:CalendarPage});
