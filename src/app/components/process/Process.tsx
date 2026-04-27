import Bullet from '@/app/reusable-ui/bullet/Bullet'
import styles from './process.module.css'
import { getPayload } from 'payload'
import config from '@payload-config'
import { unstable_cache } from 'next/cache'
import ProcessCard from './ProcessCard'

const getProcesses = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    return payload.find({ collection: 'process', sort: 'id' })
  },
  ['process'],
  {
    revalidate: 3600,
    tags: ['process'],
  },
)

export default async function Process() {
  const data = await getProcesses()
  const processes = data.docs

  return (
    <section className={styles.processContainer}>
      <Bullet text="Notre process" />
      <div className={styles.cardsContainer}>
        {processes.map((process) => {
          return <ProcessCard key={process.id} process={process} />
        })}
      </div>
    </section>
  )
}
