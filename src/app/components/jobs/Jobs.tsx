import Bullet from '@/app/reusable-ui/bullet/Bullet'
import styles from './jobs.module.css'
import { getPayload } from 'payload'
import { unstable_cache } from 'next/cache'
import config from '@payload-config'
import JobCard from './JobCard'

const getJobs = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    return payload.find({ collection: 'job', sort: 'id' })
  },
  ['jobs'],
  {
    revalidate: 3600,
    tags: ['jobs'],
  },
)

export default async function Jobs() {
  const data = await getJobs()
  const jobs = data.docs

  return (
    <section className={styles.jobsContainer}>
      <Bullet text="Nos offres d'emploi" />
      <div className={styles.jobsCardsContainer}>
        {jobs.map((job) => {
          return <JobCard key={job.id} job={job} />
        })}
      </div>
    </section>
  )
}
