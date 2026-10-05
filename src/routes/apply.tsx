import { createFileRoute } from '@tanstack/react-router';
import { ApplyPage } from '@/components/school-pages';
import { schoolHead } from '@/lib/school';
export const Route = createFileRoute('/apply')({head:()=>schoolHead('Online Registration','Online Registration information for families at Modern Public School, Pratapgarh.'),component:ApplyPage});
