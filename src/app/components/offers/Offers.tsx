import Bullet from '@/app/reusable-ui/bullet/Bullet'
import styles from './offers.module.css'
import { offers } from '@/app/lib/offers'
import OfferCard from './OfferCard'

export default function Offers() {
  return (
    <section id="offers" className={styles.offersContainer}>
      <Bullet text="Nos offres" />
      <h2 className={styles.subTitle}>Des offres simples, pour faire évoluer votre marque.</h2>
      <div className={styles.offersCardsContainer}>
        {offers.map((offer, index) => {
          return <OfferCard key={index} offer={offer} />
        })}
      </div>
    </section>
  )
}
