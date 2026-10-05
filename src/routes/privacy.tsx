import { createFileRoute } from '@tanstack/react-router';
import { PrivacyPage } from '@/components/school-pages';
import { schoolHead } from '@/lib/school';
export const Route = createFileRoute('/privacy')({head:()=>schoolHead('Privacy Notice','Privacy Notice information for families at Modern Public School, Pratapgarh.'),component:PrivacyPage});
