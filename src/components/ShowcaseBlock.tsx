import { type ReactNode } from 'react'
import { CodeBlock } from './CodeBlock'
import styles from './ShowcaseBlock.module.css'

interface ShowcaseBlockProps {
  code: string
  children: ReactNode
  label?: string
}

export function ShowcaseBlock({ code, children, label }: ShowcaseBlockProps) {
  return (
    <div className={styles.wrap}>
      {label && <p className={styles.label}>{label}</p>}
      <div className={styles.split}>
        <div className={styles.codePane}>
          <span className={styles.paneLabel}>Code</span>
          <CodeBlock code={code} />
        </div>
        <div className={styles.renderPane}>
          <span className={styles.paneLabel}>Result</span>
          <div className={styles.renderStage}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
