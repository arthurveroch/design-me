import styles from './hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.heroContainer}>
      <div className={styles.overlay}>
        <div className={styles.title}>
          <h1>Agence</h1>
          <h2 className={styles.textGradient}>Design Me</h2>
        </div>
      </div>
    </section>
  )
}
