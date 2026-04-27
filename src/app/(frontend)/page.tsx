import Contact from '../components/contact/Contact'
import Expertises from '../components/expertises/Expertises'
import FaqHome from '../components/faq-home/FaqHome'
import Hero from '../components/hero/Hero'
import Offers from '../components/offers/Offers'
import Process from '../components/process/Process'
import Realisations from '../components/realisations/Realisations'

export const revalidate = 3600

export default async function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Process />
        <Realisations />
        <Expertises />
        <Offers />
        <Contact />
        <FaqHome />
      </main>
    </>
  )
}
