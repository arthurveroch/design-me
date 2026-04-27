import styles from './input.module.css'

type Props = {
  value: string
  placeholder: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export default function Input({ value, placeholder, onChange }: Props) {
  return (
    <div className={styles.wrapper}>
      <input
        required
        className={styles.input}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}
