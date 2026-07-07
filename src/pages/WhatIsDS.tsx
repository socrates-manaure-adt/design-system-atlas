import { Link } from 'react-router-dom'
import { Button } from '@avantodev/strata-design-system'
import { ShowcaseBlock } from '../components/ShowcaseBlock'
import { PlaygroundBlock } from '../components/PlaygroundBlock'
import styles from './WhatIsDS.module.css'

const SHOWCASE_CODE = `<Button variant="outline">Cancel</Button>`

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
          A <strong>Showcase</strong> displays a component in one fixed configuration. The rendered
          result and its exact source code appear side-by-side. Props are not interactive — the
          example is a canonical reference for a single valid usage.
        </p>
        <div className="reveal d3">
          <ShowcaseBlock code={SHOWCASE_CODE}>
            <Button variant="outline">Cancel</Button>
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
