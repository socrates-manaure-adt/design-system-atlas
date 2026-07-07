import { Hero } from '../components/Hero'
import { SectionCard } from '../components/SectionCard'
import styles from './Index.module.css'

const SECTIONS = [
  {
    title: 'What is the DS?',
    description: 'Overview of the Strata Design System — what it is, why it exists, and how it fits into the product architecture.',
    to: '/what-is-ds',
    accentVar: '--strat',
  },
  {
    title: 'Installation',
    description: 'How to install @avantodev/strata-design-system in your project, including the GitHub Package Registry auth setup.',
    to: '/install',
    accentVar: '--bead',
  },
  {
    title: 'Usage',
    description: 'Patterns for importing components, applying the theme provider, and composing layouts with DS primitives.',
    to: '/usage',
    accentVar: '--exec',
  },
  {
    title: 'Components',
    description: 'Interactive catalog of every exported component — props, variants, and live examples from the design system.',
    to: '/components',
    accentVar: '--epic',
  },
  {
    title: 'Storybook',
    description: 'Embedded reference to the live Storybook deployment — stories for every component with controls and docs.',
    to: '/storybook',
    accentVar: '--strat',
  },
  {
    title: 'Tokens',
    description: 'Design tokens: color palettes, spacing scale, typography ramp, and semantic surface variables.',
    to: '/tokens',
    accentVar: '--exec',
  },
  {
    title: 'Design Rules',
    description: 'Binding design decisions — when to use which component, accessibility requirements, and composition guidelines.',
    to: '/rules',
    accentVar: '--bead',
  },
]

const DELAYS = ['d1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7']

export function Index() {
  return (
    <div>
      <Hero />
      <div className={`${styles.sectionHead} reveal d4`}>
        <h2 className={styles.sectionTitle}>Sections</h2>
        <span className={styles.sectionCount}>{SECTIONS.length} topics</span>
      </div>
      <main className={styles.grid}>
        {SECTIONS.map((s, i) => (
          <SectionCard
            key={s.to}
            index={i + 1}
            title={s.title}
            description={s.description}
            to={s.to}
            accentVar={s.accentVar}
            delay={DELAYS[i]}
          />
        ))}
      </main>
    </div>
  )
}
