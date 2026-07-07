import { type ReactNode } from 'react'
import { CodeBlock } from './CodeBlock'
import styles from './StepBlock.module.css'

interface StepBlockProps {
  number: number
  title: string
  description?: ReactNode
  code: string
  language?: string
  children?: ReactNode
}

export function StepBlock({ number, title, description, code, language, children }: StepBlockProps) {
  const num = String(number).padStart(2, '0')
  return (
    <div className={styles.step}>
      <div className={styles.meta}>
        <span className={styles.number}>{num}</span>
        <h3 className={styles.title}>{title}</h3>
      </div>
      {description && <div className={styles.description}>{description}</div>}
      <div className={styles.code}>
        <CodeBlock code={code} language={language} />
      </div>
      {children && (
        <div className={styles.renderSlot}>
          {children}
        </div>
      )}
    </div>
  )
}
