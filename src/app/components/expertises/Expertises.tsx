import Bullet from '@/app/reusable-ui/bullet/Bullet'
import styles from './expertises.module.css'
import { unstable_cache } from 'next/cache'
import { getPayload } from 'payload'
import config from '@payload-config'
import ExpertiseCard from './ExpertiseCard'

const getExpertises = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    return payload.find({ collection: 'expertise', sort: 'id' })
  },
  ['expertise'],

  {
    revalidate: 3600,
    tags: ['expertise'],
  },
)

export default async function Expertises() {
  const data = await getExpertises()
  const expertises = data.docs

  return (
    <section className={styles.expertisesContainer}>
      <Bullet text="Nos services" />
      <h2 className={styles.subTitle}>
        Nous avons du savoir faire,
        <br />
        en voici quelques exemples.
      </h2>
      <div className={styles.expertisesCardsContainer}>
        {expertises.map((expertise) => {
          return <ExpertiseCard key={expertise.id} expertise={expertise} />
        })}
      </div>
    </section>
  )
}
