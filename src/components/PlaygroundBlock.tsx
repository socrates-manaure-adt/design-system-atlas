import { useState, type ChangeEvent } from 'react'
import { Button, type ButtonProps } from '@avantodev/strata-design-system'
import { CodeBlock } from './CodeBlock'
import styles from './PlaygroundBlock.module.css'

type Variant = NonNullable<ButtonProps['variant']>
type Size = NonNullable<ButtonProps['size']>

const VARIANTS: Variant[] = ['default', 'destructive', 'outline', 'secondary', 'ghost']
const SIZES: Size[] = ['default', 'sm', 'lg']

function buildSnippet(variant: Variant, size: Size): string {
  const variantProp = variant === 'default' ? '' : ` variant="${variant}"`
  const sizeProp = size === 'default' ? '' : ` size="${size}"`
  return `<Button${variantProp}${sizeProp}>Click me</Button>`
}

export function PlaygroundBlock() {
  const [variant, setVariant] = useState<Variant>('default')
  const [size, setSize] = useState<Size>('default')

  const code = buildSnippet(variant, size)

  function handleVariant(e: ChangeEvent<HTMLSelectElement>) {
    setVariant(e.target.value as Variant)
  }

  function handleSize(e: ChangeEvent<HTMLSelectElement>) {
    setSize(e.target.value as Size)
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.controls}>
        <label className={styles.controlGroup}>
          <span className={styles.controlLabel}>variant</span>
          <select
            className={styles.select}
            value={variant}
            onChange={handleVariant}
            aria-label="Button variant"
          >
            {VARIANTS.map(v => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        </label>
        <label className={styles.controlGroup}>
          <span className={styles.controlLabel}>size</span>
          <select
            className={styles.select}
            value={size}
            onChange={handleSize}
            aria-label="Button size"
          >
            {SIZES.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </label>
      </div>
      <div className={styles.split}>
        <div className={styles.codePane}>
          <span className={styles.paneLabel}>Code</span>
          <CodeBlock code={code} />
        </div>
        <div className={styles.renderPane}>
          <span className={styles.paneLabel}>Result</span>
          <div className={styles.renderStage}>
            <Button variant={variant} size={size}>Click me</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
