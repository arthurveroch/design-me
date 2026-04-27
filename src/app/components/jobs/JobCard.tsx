import type { Job } from '@/payload-types'
import styles from './job-card.module.css'
import Button from '@/app/reusable-ui/button/Button'

type Props = {
  job: Job
}

export default function JobCard({ job }: Props) {
  return (
    <div
      style={{
        background: `url(${typeof job.background === 'object' && job.background.url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className={styles.jobCardContainer}
    >
      <div className={styles.description}>
        <h2>{job.title}</h2>
        <p>{job.description}</p>
        <Button
          link="mailto:contact@agence-designme.com"
          target=""
          content="Postuler"
          icon="/buttons-icons/target-blank.svg"
        />
      </div>
      {job.remote === 'yes' && (
        <div className={styles.remote}>
          <span className={styles.bullet} />
          Remote
        </div>
      )}
    </div>
  )
}
