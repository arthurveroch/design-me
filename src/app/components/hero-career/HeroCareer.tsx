import styles from './hero-career.module.css'

export const revalidate = 3600

export default function HeroCareer() {
  return (
    <section className={styles.heroCareerContainer}>
      <div className={styles.overlay}>
        <div className={styles.title}>
          <h1>
            <span>Design Me</span> <br /> Recrute des talents
          </h1>
        </div>
      </div>
    </section>
  )
}
