import Link from 'next/link'
import styles from './button.module.css'
import Image from 'next/image'

type Props = {
  content: string
  target: string
  icon: string
  link: string
}

export default function Button({ content, target, icon, link }: Props) {
  return (
    <button className={styles.button}>
      <Link target={target && target} href={link && link}>
        {content && content}
      </Link>
      {icon && <Image src={icon} width={24} height={24} alt="Icone" />}
    </button>
  )
}
