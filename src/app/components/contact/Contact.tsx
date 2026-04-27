'use client'

import Bullet from '@/app/reusable-ui/bullet/Bullet'
import styles from './contact.module.css'
import ButtonGradient from '@/app/reusable-ui/button-border-gradient/ButtonGradient'
import Input from '@/app/reusable-ui/input/Input'
import { useEffect, useState } from 'react'
import TextArea from '@/app/reusable-ui/textarea/TextArea'
import { sendMessage } from '@/app/actions/actions'
import Image from 'next/image'

export default function Contact() {
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [popUp, setPopUp] = useState(false)

  useEffect(() => {
    if (popUp) {
      document.body.style.height = '0'
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.height = 'auto'
      document.body.style.overflow = 'visible'
    }
  }, [popUp])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    await sendMessage(name, mail, phone, message)

    setName('')
    setMail('')
    setPhone('')
    setMessage('')
    setLoading(false)
    setPopUp(true)
  }

  return (
    <section id="contact" className={styles.contactContainer}>
      {popUp && (
        <div className={styles.popup}>
          <div className={styles.message}>
            <Image
              src={'/buttons-icons/check.svg'}
              width={150}
              height={150}
              alt="Icone représentent un check"
            />
            <h2>
              Votre message a bien été envoyé. Nous reviendrons vers vous dans les plus brefs
              délais.
            </h2>
            <button onClick={() => setPopUp(false)}>Ok</button>
          </div>
        </div>
      )}
      <Bullet text="Contact" />
      <div className={styles.contactInfosContainer}>
        <div className={styles.contactInfos}>
          <h2>
            Prêt pour la touche <span>Design Me</span> ?
          </h2>
          <div className={styles.buttonsContainer}>
            <ButtonGradient
              target="_blank"
              content="Instagram"
              link="https://www.instagram.com/agence_designme/"
            />
            <ButtonGradient
              target="_blank"
              content="LinkedIn"
              link="https://linkedin.com/company/agence-design-me/"
            />
            <ButtonGradient target="" content="07 87 82 79 76" link="tel:+33787827976" />
          </div>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input value={name} placeholder="Nom" onChange={(e) => setName(e.target.value)} />
          <Input value={mail} placeholder="E-mail" onChange={(e) => setMail(e.target.value)} />
          <Input
            value={phone}
            placeholder="Numéro de téléphone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextArea
            value={message}
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button>
            Demander mon devis{' '}
            {loading && (
              <Image
                src={'/buttons-icons/loading.svg'}
                width={24}
                height={24}
                alt="Icone représentant le chargement"
              />
            )}
          </button>
        </form>
      </div>
    </section>
  )
}
