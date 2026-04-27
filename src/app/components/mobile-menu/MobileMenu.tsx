'use client'

import Link from 'next/link'
import styles from './mobile-menu.module.css'
import Image from 'next/image'
import { useMenu } from '@/app/context/MobileMenuContext'
import { useEffect } from 'react'

export default function MobileMenu() {
  const { open, setOpen } = useMenu()

  useEffect(() => {
    if (open) {
      document.body.style.height = '0'
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.height = 'auto'
      document.body.style.overflow = 'visible'
    }
  }, [open])

  return (
    <div
      style={open ? { display: 'flex' } : { display: 'none' }}
      className={styles.mobileMenuContainer}
    >
      <div className={styles.overlay}>
        <Image
          onClick={() => setOpen(false)}
          className={styles.cross}
          src={'/buttons-icons/cross.svg'}
          width={40}
          height={40}
          alt="Icone représentant une croix pour fermer le menu mobile"
        />
        <ul>
          <li>
            <Link onClick={() => setOpen(false)} href={'/#hero'}>
              Accueil
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(false)} href={'/#realisations'}>
              Réalisations
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(false)} href={'/#offers'}>
              Offres
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(false)} href={'/career'}>
              Jobs
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
