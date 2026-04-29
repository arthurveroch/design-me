import FaqJob from '@/app/components/faq-job/FaqJob'
import HeroCareer from '@/app/components/hero-career/HeroCareer'
import Jobs from '@/app/components/jobs/Jobs'

export const revalidate = 3600 * 24 * 7

export default function CareerPage() {
  return (
    <main>
      <HeroCareer />
      <Jobs />
      <FaqJob />
    </main>
  )
}
