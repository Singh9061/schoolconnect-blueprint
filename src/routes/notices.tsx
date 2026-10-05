import { createFileRoute } from '@tanstack/react-router';
import { NoticesPage } from '@/components/school-pages';
import { schoolHead } from '@/lib/school';
export const Route = createFileRoute('/notices')({head:()=>schoolHead('News & Notices','News & Notices information for families at Modern Public School, Pratapgarh.'),component:NoticesPage});
