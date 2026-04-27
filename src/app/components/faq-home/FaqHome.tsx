import { getPayload } from 'payload'
import config from '@payload-config'
import { unstable_cache } from 'next/cache'
import styles from './faq-home.module.css'
import Bullet from '@/app/reusable-ui/bullet/Bullet'
import QuestionCard from './QuestionCard'

const getQuestions = unstable_cache(
  async () => {
    const payload = await getPayload({ config })

    return payload.find({ collection: 'faq-home', sort: 'id' })
  },
  ['faqHome'],
  {
    revalidate: 3600,
    tags: ['faqHome'],
  },
)

export default async function FaqHome() {
  const data = await getQuestions()
  const questions = data.docs

  return (
    <section className={styles.faqHomeContainer}>
      <Bullet text="FAQ" />
      <h2>
        Vos questions <br /> fréquentes.
      </h2>
      <div className={styles.questionsContainer}>
        {questions.map((question) => {
          return <QuestionCard key={question.id} question={question} />
        })}
      </div>
    </section>
  )
}
