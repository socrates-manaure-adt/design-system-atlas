import { Link } from 'react-router-dom'
import styles from './Stub.module.css'

interface StubProps {
  title: string
}

export function Stub({ title }: StubProps) {
  return (
    <div className={styles.wrap}>
      <Link to="/" className={styles.back}>← Back</Link>
      <h1 className={styles.heading}>{title}</h1>
      <p className={styles.note}>This section is coming soon — content will be added in a future bead.</p>
    </div>
  )
}
