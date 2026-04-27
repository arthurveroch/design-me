'use client'

import Image from 'next/image'
import styles from './navbar.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useMenu } from '@/app/context/MobileMenuContext'

export default function Navbar() {
  const [scroll, setScroll] = useState(false)

  const { setOpen } = useMenu()

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={!scroll ? `${styles.navbar}` : `${styles.navbar} ${styles.navbarScroll}`}>
      <Image src={'/logo.png'} width={90} height={88} alt="Logo de l'agence Design Me" />
      <ul className={!scroll ? `${styles.menu}` : `${styles.menu} ${styles.menuScroll}`}>
        <li>
          <Link href={'/#hero'}>Accueil</Link>
        </li>
        <li>
          <Link href={'/#realisations'}>Réalisations</Link>
        </li>
        <li>
          <Link href={'/#offers'}>Offres</Link>
        </li>
        <li>
          <Link href={'/career'}>Jobs</Link>
        </li>
      </ul>
      <button className={styles.cta}>
        <Link href={'/#contact'}>Parlons de votre projet</Link>
      </button>
      <Image
        onClick={() => setOpen(true)}
        className={styles.burger}
        src={'/navbar/burger.svg'}
        width={60}
        height={60}
        alt="Icône représentant un menu burger"
      />
    </nav>
  )
}
