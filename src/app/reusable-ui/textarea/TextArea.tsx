import styles from './textarea.module.css'

type Props = {
  value: string
  placeholder: string
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>
}

export default function TextArea({ value, placeholder, onChange }: Props) {
  return (
    <div className={styles.wrapper}>
      <textarea
        required
        className={styles.textArea}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
    </div>
  )
}
