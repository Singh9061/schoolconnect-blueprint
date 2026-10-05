import { createFileRoute } from '@tanstack/react-router';
import { HomePage } from '@/components/school-pages';
import { schoolHead } from '@/lib/school';
export const Route = createFileRoute('/')({
  head: () => schoolHead('Welcome', 'Nurturing Excellence, Inspiring Futures at Modern Public School, Pratapgarh. Explore learning, admissions and resources for families.'),
  component: HomePage,
});
