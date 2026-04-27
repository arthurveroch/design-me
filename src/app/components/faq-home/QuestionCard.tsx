'use client'

import type { FaqHome } from '@/payload-types'
import styles from './question-card.module.css'
import Image from 'next/image'
import { useState } from 'react'

type Props = {
  question: FaqHome
}

export default function QuestionCard({ question }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.questionCardContainer}>
      <div className={styles.question}>
        <p>{question.question}</p>
        {!open ? (
          <Image
            onClick={() => setOpen(true)}
            src={'/buttons-icons/plus.svg'}
            width={40}
            height={40}
            alt="Icone représentant un plus"
          />
        ) : (
          <Image
            onClick={() => setOpen(false)}
            src={'/buttons-icons/minimize.svg'}
            width={40}
            height={40}
            alt="Icone représentant un moins"
          />
        )}
      </div>
      {open && (
        <div className={styles.reponse}>
          <p>{question.response}</p>
        </div>
      )}
    </div>
  )
}
