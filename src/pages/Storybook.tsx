import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Badge,
  Heading,
  Text,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@avantodev/strata-design-system'
import { ShowcaseBlock } from '../components/ShowcaseBlock'
import { ComponentErrorBoundary } from '../components/ComponentErrorBoundary'
import styles from './Storybook.module.css'

const SB_ROOT = 'https://avantodev.github.io/front-react-strata-storybook'

/* ─── code snippets ──────────────────────────────────────────────── */

const FOUNDATIONS_CODE = `<Heading level={2}>Section heading</Heading>
<Heading level={3}>Subsection heading</Heading>
<Heading level={4}>Card heading</Heading>
<Text>Body copy — consistent spacing across all Strata surfaces.</Text>`

const APP_UI_CODE = `<Button>default</Button>
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

const DATA_VIZ_CODE = `import { BarChart, LineChart } from '@avantodev/strata-design-system'

<BarChart
  data={[
    { label: 'Jan', value: 420 },
    { label: 'Feb', value: 380 },
    { label: 'Mar', value: 510 },
  ]}
  xKey="label"
  yKey="value"
/>`

const OVERLAYS_CODE = `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Helpful context here</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`

const BADGE_EXAMPLES = [
  { variant: 'solid' as const, color: 'green' as const, label: 'Active' },
  { variant: 'soft' as const, color: 'amber' as const, label: 'Pending' },
  { variant: 'solid' as const, color: 'red' as const, label: 'Rejected' },
  { variant: 'outline' as const, color: 'zinc' as const, label: 'Draft' },
] as const

const STRATA_CODE = `<Badge variant="solid" color="green">Active</Badge>
<Badge variant="soft" color="amber">Pending</Badge>
<Badge variant="solid" color="red">Rejected</Badge>
<Badge variant="outline" color="zinc">Draft</Badge>`

/* ─── CategoryBlock ──────────────────────────────────────────────── */

interface CategoryBlockProps {
  title: string
  description: string
  showcases: Array<{ code: string; children: ReactNode }>
}

function CategoryBlock({ title, description, showcases }: CategoryBlockProps) {
  return (
    <section className={styles.category}>
      <div className={styles.categoryHeader}>
        <h2 className={styles.categoryTitle}>{title}</h2>
        <a
          className={styles.sbLink}
          href={SB_ROOT}
          target="_blank"
          rel="noopener noreferrer"
        >
          View in Storybook →
        </a>
      </div>
      <p className={styles.categoryDesc}>{description}</p>
      <ComponentErrorBoundary name={title}>
        {showcases.map((s, i) => (
          <div key={i} style={i > 0 ? { marginTop: '16px' } : undefined}>
            <ShowcaseBlock code={s.code}>
              {s.children}
            </ShowcaseBlock>
          </div>
        ))}
      </ComponentErrorBoundary>
    </section>
  )
}

/* ─── page ───────────────────────────────────────────────────────── */

export function Storybook() {
  return (
    <div className={styles.page}>
      <Link to="/" className={styles.back}>← Back</Link>

      {/* Intro */}
      <h1 className={`${styles.heading} reveal d1`}>Storybook</h1>
      <div className={`${styles.intro} reveal d2`}>
        <p className={styles.introPara}>
          The live Storybook is the interactive component playground for{' '}
          <code className={styles.pkg}>@avantodev/strata-design-system</code> — every component,
          every variant, and every prop control in one place. It is the canonical reference for
          day-to-day development and the fastest way to prototype with DS components without
          setting up a full project.
        </p>
        <a
          className={styles.openLink}
          href={SB_ROOT}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Storybook →
        </a>
      </div>

      {/* Section map */}
      <div className={`${styles.categoryMap} reveal d3`}>
        <div className={styles.mapLabel}>Sections</div>

        <CategoryBlock
          title="Foundations"
          description="The base layer that every other section builds on — color tokens, typography scale, spacing primitives, and the icon set. Start here to understand the visual language before diving into components."
          showcases={[{
            code: FOUNDATIONS_CODE,
            children: (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <Heading level={2}>Section heading</Heading>
                <Heading level={3}>Subsection heading</Heading>
                <Heading level={4}>Card heading</Heading>
                <Text>Body copy — consistent spacing across all Strata surfaces.</Text>
              </div>
            ),
          }]}
        />

        <CategoryBlock
          title="Application UI"
          description="General-purpose building blocks for product screens — buttons, form inputs, badges, tables, and navigation components. These are the components you reach for first when building any Strata feature."
          showcases={[{
            code: APP_UI_CODE,
            children: (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
                {BTN_VARIANTS.map(v => (
                  <Button key={v} variant={v}>{v}</Button>
                ))}
              </div>
            ),
          }]}
        />

        <CategoryBlock
          title="Data Visualization"
          description="Charts, graphs, and data-heavy display components for presenting metrics and analytics. These components accept structured data arrays and handle layout, axes, and tooltips internally."
          showcases={[{
            code: DATA_VIZ_CODE,
            children: (
              <p style={{ fontSize: '14px', color: 'var(--muted)', fontStyle: 'italic' }}>
                Chart components require a data source — see live examples in Storybook.
              </p>
            ),
          }]}
        />

        <CategoryBlock
          title="Overlays"
          description="Components that float above page content to deliver contextual information or capture user decisions — tooltips for inline hints, dialogs for blocking actions, and drawers for side panels. Each overlay manages its own focus trap, keyboard dismissal, and accessibility attributes so you never need to wire those up manually. Use the DS compound component pattern rather than building a custom modal with a fixed overlay div."
          showcases={[{
            code: OVERLAYS_CODE,
            children: (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover me</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Helpful context here</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ),
          }]}
        />

        <CategoryBlock
          title="Strata Components"
          description="Domain-specific components built for the Strata platform — status badges, priority indicators, dealer-specific layouts, and other UI that encodes Strata business concepts directly into the component API. These go beyond general-purpose UI: they carry the semantic meaning of Strata domain objects such as deal status, user role, and workflow state. Use them instead of composing the same patterns from primitives in every feature."
          showcases={[{
            code: STRATA_CODE,
            children: (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                {BADGE_EXAMPLES.map(b => (
                  <Badge key={b.label} variant={b.variant} color={b.color}>{b.label}</Badge>
                ))}
              </div>
            ),
          }]}
        />
      </div>
    </div>
  )
}
