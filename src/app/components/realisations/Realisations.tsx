import Bullet from '@/app/reusable-ui/bullet/Bullet'
import styles from './realisations.module.css'
import { unstable_cache } from 'next/cache'
import { getPayload } from 'payload'
import config from '@payload-config'
import Slider from './Slider'

const getProjects = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    return payload.find({ collection: 'project', sort: 'id' })
  },
  ['projects'],
  {
    revalidate: 3600,
    tags: ['projects'],
  },
)

export default async function Realisations() {
  const data = await getProjects()
  const projects = data.docs

  return (
    <section id="realisations" className={styles.realisationsContainer}>
      <Bullet text="Nos réalisations" />
      <p className={styles.subTitle}>
        Chez <span className={styles.gradient}>Design Me,</span>
        <br />
        nous créons des sites web pensés pour capter, <br />
        convaincre et transformer vos visiteurs en clients.
      </p>
      <Slider projects={projects} />
    </section>
  )
}
