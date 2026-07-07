import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Badge,
  Heading,
  Text,
  Field,
  FieldLabel,
  FieldDescription,
  Input,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
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

const FORMS_CODE = `<Field>
  <FieldLabel>Email address</FieldLabel>
  <Input type="email" placeholder="you@example.com" />
  <FieldDescription>We'll never share your email.</FieldDescription>
</Field>`

const LAYOUT_CODE = `<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="details">Details</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    Overview content here.
  </TabsContent>
  <TabsContent value="details">
    Details content here.
  </TabsContent>
</Tabs>`

const OVERLAYS_CODE = `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Save your changes</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`

const STATUS_CODE = `<Badge variant="solid" color="green">Active</Badge>`

const BUTTONS_CODE = `<Button variant="outline">Learn more</Button>`

const TYPOGRAPHY_CODE = `<Heading level={2}>Design System Atlas</Heading>
<Text>
  Components built for consistency across Strata products.
</Text>`

/* ─── CategoryBlock ──────────────────────────────────────────────── */

interface CategoryBlockProps {
  title: string
  description: string
  components: string[]
  showcase: { code: string; children: ReactNode }
}

function CategoryBlock({ title, description, components, showcase }: CategoryBlockProps) {
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
      <ul className={styles.componentList}>
        {components.map(c => <li key={c}>{c}</li>)}
      </ul>
      <ComponentErrorBoundary name={title}>
        <ShowcaseBlock code={showcase.code}>
          {showcase.children}
        </ShowcaseBlock>
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

      {/* Category map */}
      <div className={`${styles.categoryMap} reveal d3`}>
        <div className={styles.mapLabel}>Category map</div>

        <CategoryBlock
          title="Forms"
          description="Input controls for collecting user data — text fields, selects, date pickers, and the Field wrapper that coordinates label, input, and error together."
          components={['Field', 'FieldLabel', 'FieldDescription', 'FieldError', 'Input', 'Textarea', 'Select', 'DatePicker', 'Checkbox', 'Switch']}
          showcase={{
            code: FORMS_CODE,
            children: (
              <Field style={{ width: '100%', maxWidth: '320px' }}>
                <FieldLabel>Email address</FieldLabel>
                <Input type="email" placeholder="you@example.com" />
                <FieldDescription>We'll never share your email.</FieldDescription>
              </Field>
            ),
          }}
        />

        <CategoryBlock
          title="Layout"
          description="Page structure primitives — navigation shells, breadcrumbs, and Tabs for organising content into switchable panels."
          components={['PageLayout', 'PageHeader', 'Breadcrumb', 'Tabs', 'TabsList', 'TabsTrigger', 'TabsContent', 'Separator', 'ScrollArea']}
          showcase={{
            code: LAYOUT_CODE,
            children: (
              <Tabs defaultValue="overview" style={{ width: '100%', maxWidth: '340px' }}>
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" style={{ paddingTop: '12px', fontSize: '14px', color: 'var(--muted)' }}>
                  Overview content here.
                </TabsContent>
                <TabsContent value="details" style={{ paddingTop: '12px', fontSize: '14px', color: 'var(--muted)' }}>
                  Details content here.
                </TabsContent>
              </Tabs>
            ),
          }}
        />

        <CategoryBlock
          title="Overlays"
          description="Components that float above page content — tooltips for inline hints, dialogs for blocking interactions, and drawers for side panels."
          components={['Tooltip', 'TooltipProvider', 'Dialog', 'DialogContent', 'DialogHeader', 'Drawer', 'Popover', 'Sheet', 'HoverCard']}
          showcase={{
            code: OVERLAYS_CODE,
            children: (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover me</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Save your changes</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ),
          }}
        />

        <CategoryBlock
          title="Status & Feedback"
          description="Communicate system state — badges for inline labels, skeletons for loading states, and EmptyState for zero-data screens."
          components={['Badge', 'StatusBadge', 'PriorityBadge', 'Skeleton', 'EmptyState', 'Alert', 'InfoBanner', 'Progress', 'ProgressTracker']}
          showcase={{
            code: STATUS_CODE,
            children: <Badge variant="solid" color="green">Active</Badge>,
          }}
        />

        <CategoryBlock
          title="Buttons & Links"
          description="Interactive call-to-action primitives — Button with 8 variants and 3 sizes, and Link for in-flow text navigation."
          components={['Button', 'Link', 'Toggle', 'ToggleGroup']}
          showcase={{
            code: BUTTONS_CODE,
            children: <Button variant="outline">Learn more</Button>,
          }}
        />

        <CategoryBlock
          title="Typography"
          description="Semantic text hierarchy — Heading (levels 1–6), Subheading, Text, and Strong for consistent type treatment across the product."
          components={['Heading', 'Subheading', 'Text', 'Strong']}
          showcase={{
            code: TYPOGRAPHY_CODE,
            children: (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Heading level={2}>Design System Atlas</Heading>
                <Text>Components built for consistency across Strata products.</Text>
              </div>
            ),
          }}
        />
      </div>
    </div>
  )
}
