import { Link } from 'react-router-dom'
import styles from './SectionCard.module.css'

interface SectionCardProps {
  index: number
  title: string
  description: string
  to: string
  accentVar: string
  delay: string
}

export function SectionCard({ index, title, description, to, accentVar, delay }: SectionCardProps) {
  const num = String(index).padStart(2, '0')
  return (
    <Link
      to={to}
      className={`${styles.card} reveal ${delay}`}
      style={{ '--accent': `var(${accentVar})` } as React.CSSProperties}
    >
      <div className={styles.number}>{num}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.foot}>
        <span className={styles.arrow}>→</span>
      </div>
    </Link>
  )
}
