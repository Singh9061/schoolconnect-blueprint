import { createFileRoute } from '@tanstack/react-router';
import { StudentLifePage } from '@/components/school-pages';
import { schoolHead } from '@/lib/school';
export const Route = createFileRoute('/student-life')({head:()=>schoolHead('Student Life','Student Life information for families at Modern Public School, Pratapgarh.'),component:StudentLifePage});
