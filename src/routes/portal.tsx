import { createFileRoute } from '@tanstack/react-router';
import { PortalPage } from '@/components/school-pages';
import { schoolHead } from '@/lib/school';
export const Route = createFileRoute('/portal')({head:()=>schoolHead('Parent & Staff Portal','Parent & Staff Portal information for families at Modern Public School, Pratapgarh.'),component:PortalPage});
