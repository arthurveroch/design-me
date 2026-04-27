import styles from './bullet.module.css'

type Props = {
  text: string
}

export default function Bullet({ text }: Props) {
  return (
    <div className={styles.bullet}>
      <span className={styles.point} />
      <p>{text && text}</p>
    </div>
  )
}
