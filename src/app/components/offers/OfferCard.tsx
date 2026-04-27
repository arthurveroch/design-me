import { Offer } from '@/app/lib/offers'
import styles from './offer-card.module.css'
import Button from '@/app/reusable-ui/button/Button'
import Image from 'next/image'

type Props = {
  offer: Offer
}

export default function OfferCard({ offer }: Props) {
  return (
    <div className={styles.offerCard}>
      <div className={styles.title}>
        <h2>{offer.name}</h2>
        <h3>{offer.subtitle}</h3>
      </div>
      <Button icon="" target="" link="/#contact" content={offer.button_text} />
      <ul className={styles.arguments}>
        <li>
          <Image
            src={'/buttons-icons/check.svg'}
            width={24}
            height={24}
            alt="Icone représentant un check"
          />
          {offer.arguments.first_argument}
        </li>
        <li>
          <Image
            src={'/buttons-icons/check.svg'}
            width={24}
            height={24}
            alt="Icone représentant un check"
          />
          {offer.arguments.second_argument}
        </li>
        <li>
          <Image
            src={'/buttons-icons/check.svg'}
            width={24}
            height={24}
            alt="Icone représentant un check"
          />
          {offer.arguments.third_argument}
        </li>
        <li>
          <Image
            src={'/buttons-icons/check.svg'}
            width={24}
            height={24}
            alt="Icone représentant un check"
          />
          {offer.arguments.fourth_argument}
        </li>
        <li>
          <Image
            src={'/buttons-icons/check.svg'}
            width={24}
            height={24}
            alt="Icone représentant un check"
          />
          {offer.arguments.fifth_argument}
        </li>
        <li>
          <Image
            src={'/buttons-icons/check.svg'}
            width={24}
            height={24}
            alt="Icone représentant un check"
          />
          {offer.arguments.sixth_argument}
        </li>
      </ul>
    </div>
  )
}
