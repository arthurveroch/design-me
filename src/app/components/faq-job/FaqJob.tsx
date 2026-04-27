import Bullet from '@/app/reusable-ui/bullet/Bullet'
import styles from './faq-job.module.css'
import { getPayload } from 'payload'
import config from '@payload-config'
import { unstable_cache } from 'next/cache'
import QuestionCard from '../faq-home/QuestionCard'

const getQuestions = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    return payload.find({ collection: 'faq-job', sort: 'id' })
  },
  ['faq-job'],
  {
    revalidate: 3600,
    tags: ['faq-job'],
  },
)

export default async function FaqJob() {
  const data = await getQuestions()
  const questions = data.docs

  return (
    <section className={styles.faqJobsContainer}>
      <Bullet text="FAQ" />
      <h2>
        Vos questions sur notre <br />
        processus de recrutement
      </h2>
      <div className={styles.questionsContainer}>
        {questions.map((question) => {
          return <QuestionCard key={question.id} question={question} />
        })}
      </div>
    </section>
  )
}
