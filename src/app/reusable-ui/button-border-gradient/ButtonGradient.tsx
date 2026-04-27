import Link from 'next/link'
import styles from './button-border-gradient.module.css'

type Props = {
  content: string
  link: string
  target: string
}

export default function ButtonGradient({ content, link, target }: Props) {
  return (
    <button className={styles.buttonGradient}>
      <Link target={target && target} href={link && link}>
        {content && content}
      </Link>
    </button>
  )
}
