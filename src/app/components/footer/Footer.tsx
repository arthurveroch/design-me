import Link from 'next/link'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2>Design Me</h2>
      <div className={styles.legal}>
        <p>Tous droits réservés. © Design-Me</p>
        <p>
          <Link href={'/mentions-legales'}>Mentions légales</Link>
        </p>
      </div>
    </footer>
  )
}
