'use client'

import Image from 'next/image'
import styles from './expertise-card.module.css'
import type { Expertise } from '@/payload-types'
import { useState } from 'react'

type Props = {
  expertise: Expertise
}

export default function ExpertiseCard({ expertise }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.expertiseCardContainer}>
      <div className={styles.expertiseTitleContainer}>
        <div className={styles.expertiseTitle}>
          <Image
            src={typeof expertise.icon === 'object' ? (expertise.icon.url ?? '') : ''}
            width={40}
            height={40}
            alt={typeof expertise.icon === 'object' ? (expertise.icon.alt ?? '') : ''}
          />
          <h2>{expertise.title}</h2>
        </div>
        {!open ? (
          <Image
            className={styles.icon}
            src={'/buttons-icons/plus.svg'}
            width={40}
            height={40}
            alt='Icône représentant un "plus" pour dropdown la card'
            onClick={() => setOpen(!open)}
          />
        ) : (
          <Image
            className={styles.icon}
            src={'/buttons-icons/minimize.svg'}
            width={40}
            height={40}
            alt='Icône représentant un "moins" pour dropdown la card'
            onClick={() => setOpen(!open)}
          />
        )}
      </div>
      {open && (
        <div className={styles.description}>
          <p>{expertise.description}</p>
        </div>
      )}
    </div>
  )
}
