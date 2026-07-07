import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import styles from './CodeBlock.module.css'

interface CodeBlockProps {
  code: string
  language?: string
}

const codeStyle = {
  ...atomOneDark,
  hljs: {
    ...atomOneDark.hljs,
    background: 'rgba(255,255,255,0.04)',
    borderRadius: '10px',
    padding: '20px 24px',
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
    fontSize: '14px',
    lineHeight: '1.65',
    border: '1px solid rgba(255,255,255,0.10)',
    overflowX: 'auto' as const,
  },
}

export function CodeBlock({ code, language = 'jsx' }: CodeBlockProps) {
  return (
    <div className={styles.wrap}>
      <SyntaxHighlighter
        language={language}
        style={codeStyle}
        wrapLines
        useInlineStyles
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
