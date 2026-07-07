import { type ReactNode } from 'react'
import styles from './Callout.module.css'

interface CalloutProps {
  kind?: 'warning' | 'info'
  children: ReactNode
}

export function Callout({ kind = 'info', children }: CalloutProps) {
  const icon = kind === 'warning' ? '⚠' : 'ℹ'
  return (
    <div className={`${styles.callout} ${styles[kind]}`}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.body}>{children}</span>
    </div>
  )
}
