import { Link } from 'react-router-dom'
import { Button } from '@avantodev/strata-design-system'
import { ShowcaseBlock } from '../components/ShowcaseBlock'
import { PlaygroundBlock } from '../components/PlaygroundBlock'
import styles from './WhatIsDS.module.css'

const SHOWCASE_CODE = `import { Button } from '@avantodev/strata-design-system'

<Button>default</Button>
<Button variant="destructive">destructive</Button>
<Button variant="outline">outline</Button>
<Button variant="secondary">secondary</Button>
<Button variant="ghost">ghost</Button>
<Button variant="link">link</Button>
<Button variant="brand">brand</Button>
<Button variant="accent">accent</Button>`

const BTN_VARIANTS = [
  'default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'brand', 'accent',
] as const

export function WhatIsDS() {
  return (
    <div className={styles.page}>
      <Link to="/" className={styles.back}>← Back</Link>

      {/* Definition */}
      <section className={styles.section}>
        <h1 className={`${styles.heading} reveal d1`}>What is the Design System?</h1>
        <p className={`${styles.body} reveal d2`}>
          <code className={styles.pkg}>@avantodev/strata-design-system</code> is a shared React
          component library that enforces visual and behavioral consistency across all Strata
          products. It is distributed as an npm package from GitHub Package Registry and consumed
          by every frontend that targets the Strata platform — from the dealer portal to
          manufacturer views.
        </p>
        <p className={`${styles.body} reveal d3`}>
          The library ships pre-built components (buttons, inputs, dialogs, data tables), design
          tokens (color, spacing, typography), and utility hooks — so product teams write product
          logic, not design primitives.
        </p>
      </section>

      {/* Showcase pattern */}
      <section className={styles.section}>
        <h2 className={`${styles.subheading} reveal d1`}>
          <span className={styles.patternTag}>Pattern</span>
          Showcase
        </h2>
        <p className={`${styles.body} reveal d2`}>
          A <strong>Showcase</strong> displays every variant and configuration of a component
          side-by-side, so that you can see the full range of what a component offers at a glance.
          It mirrors how Storybook presents components — one surface, all possibilities.
        </p>
        <div className="reveal d3">
          <ShowcaseBlock code={SHOWCASE_CODE}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
              {BTN_VARIANTS.map(v => (
                <Button key={v} variant={v}>{v}</Button>
              ))}
            </div>
          </ShowcaseBlock>
        </div>
      </section>

      {/* Playground pattern */}
      <section className={styles.section}>
        <h2 className={`${styles.subheading} reveal d1`}>
          <span className={styles.patternTag}>Pattern</span>
          Playground
        </h2>
        <p className={`${styles.body} reveal d2`}>
          A <strong>Playground</strong> lets you change component props in real time. Select a
          variant or size from the dropdowns below — both the rendered component and the code
          snippet update instantly, so you can find the right configuration and copy it directly.
        </p>
        <div className="reveal d3">
          <PlaygroundBlock />
        </div>
      </section>
    </div>
  )
}
