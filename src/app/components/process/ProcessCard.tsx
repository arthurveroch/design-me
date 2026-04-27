import Image from 'next/image'
import styles from './process-card.module.css'
import type { Process } from '@/payload-types'

type Props = {
  process: Process
}

export default function ProcessCard({ process }: Props) {
  return (
    <div
      className={styles.processCard}
      style={{
        background: `url(${typeof process.background === 'object' && process.background?.url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className={styles.descriptionContainer}>
        <div className={styles.titleProcess}>
          <Image
            src={typeof process.icon === 'object' ? (process.icon.url ?? '') : ''}
            width={40}
            height={40}
            alt={typeof process.icon === 'object' ? (process.icon.alt ?? '') : ''}
          />
          <h2>{process.title}</h2>
        </div>
        <p className={styles.description}>{process.description}</p>
      </div>
    </div>
  )
}
