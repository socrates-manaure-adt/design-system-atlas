import { Link } from 'react-router-dom'
import { FileX } from 'lucide-react'
import {
  Button,
  Badge,
  Skeleton,
  EmptyState,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateDescription,
  EmptyStateActions,
} from '@avantodev/strata-design-system'
import { ShowcaseBlock } from '../components/ShowcaseBlock'
import { ComponentErrorBoundary } from '../components/ComponentErrorBoundary'
import styles from './Components.module.css'

/* ─── code snippets ──────────────────────────────────────────────── */

const BTN_VARIANTS = [
  'default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'brand', 'accent',
] as const

const BTN_SIZES_CODE = `<Button size="sm">Small</Button>
<Button>Default</Button>
<Button size="lg">Large</Button>`

const BTN_ICON_CODE = `import { FileX } from 'lucide-react'

<Button variant="ghost" size="icon">
  <FileX className="w-4 h-4" />
</Button>`

const BADGE_EXAMPLES = [
  { variant: 'solid' as const, color: 'green' as const, label: 'Active', desc: 'solid · green' },
  { variant: 'soft' as const, color: 'amber' as const, label: 'Pending', desc: 'soft · amber' },
  { variant: 'solid' as const, color: 'red' as const, label: 'Error', desc: 'solid · red' },
  { variant: 'outline' as const, color: 'zinc' as const, label: 'Draft', desc: 'outline · zinc' },
]

const SKELETON_EXAMPLES = [
  { label: 'Text line', className: 'h-4 w-48', code: '<Skeleton className="h-4 w-48" />' },
  { label: 'Input', className: 'h-10 w-full', code: '<Skeleton className="h-10 w-full" />' },
  { label: 'Card', className: 'h-32 w-full', code: '<Skeleton className="h-32 w-full" />' },
]

const EMPTY_STATE_CODE = `<EmptyState>
  <EmptyStateIcon>
    <FileX className="w-6 h-6" />
  </EmptyStateIcon>
  <EmptyStateTitle>No documents found</EmptyStateTitle>
  <EmptyStateDescription>
    Upload a document to get started.
  </EmptyStateDescription>
  <EmptyStateActions>
    <Button>Upload Document</Button>
  </EmptyStateActions>
</EmptyState>`

/* ─── section heading ────────────────────────────────────────────── */

function SectionHeading({ title, description }: { title: string; description: string }) {
  return (
    <div className={styles.sectionHead}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <p className={styles.sectionDesc}>{description}</p>
    </div>
  )
}

/* ─── page ───────────────────────────────────────────────────────── */

export function Components() {
  return (
    <div className={styles.page}>
      <Link to="/" className={styles.back}>← Back</Link>
      <h1 className={`${styles.heading} reveal d1`}>Components</h1>
      <p className={`${styles.lead} reveal d2`}>
        Core DS component families — rendered live alongside their code.
      </p>

      {/* ── Button ── */}
      <section className={`${styles.section} reveal d3`}>
        <SectionHeading
          title="Button"
          description="8 variants, 3 sizes, and icon mode."
        />

        <ComponentErrorBoundary name="Button">
          <div className={styles.variantGrid}>
            {BTN_VARIANTS.map(v => (
              <ShowcaseBlock
                key={v}
                code={v === 'default'
                  ? `<Button>${v}</Button>`
                  : `<Button variant="${v}">${v}</Button>`}
              >
                <Button variant={v}>{v}</Button>
              </ShowcaseBlock>
            ))}
          </div>

          <div className={styles.subsectionLabel}>Sizes</div>
          <ShowcaseBlock code={BTN_SIZES_CODE}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <Button size="sm">Small</Button>
              <Button>Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </ShowcaseBlock>

          <div className={styles.subsectionLabel}>Icon button</div>
          <ShowcaseBlock code={BTN_ICON_CODE}>
            <Button variant="ghost" size="icon" aria-label="Delete file">
              <FileX className="w-4 h-4" />
            </Button>
          </ShowcaseBlock>
        </ComponentErrorBoundary>
      </section>

      {/* ── Badge ── */}
      <section className={`${styles.section} reveal d4`}>
        <SectionHeading
          title="Badge"
          description="Inline status labels. Combine variant (solid / soft / outline) with a color."
        />

        <ComponentErrorBoundary name="Badge">
          <div className={styles.variantGrid}>
            {BADGE_EXAMPLES.map(b => (
              <ShowcaseBlock
                key={`${b.variant}-${b.color}`}
                code={`<Badge variant="${b.variant}" color="${b.color}">\n  ${b.label}\n</Badge>`}
              >
                <Badge variant={b.variant} color={b.color}>{b.label}</Badge>
              </ShowcaseBlock>
            ))}
          </div>
        </ComponentErrorBoundary>
      </section>

      {/* ── Skeleton ── */}
      <section className={`${styles.section} reveal d5`}>
        <SectionHeading
          title="Skeleton"
          description="Loading placeholder shapes. Shimmer animation pauses when prefers-reduced-motion is set."
        />

        <ComponentErrorBoundary name="Skeleton">
          <div className={styles.skeletonGrid}>
            {SKELETON_EXAMPLES.map(s => (
              <div key={s.label}>
                <div className={styles.subsectionLabel}>{s.label}</div>
                <ShowcaseBlock code={s.code}>
                  <div style={{ width: '100%' }}>
                    <Skeleton className={s.className} />
                  </div>
                </ShowcaseBlock>
              </div>
            ))}
          </div>
        </ComponentErrorBoundary>
      </section>

      {/* ── EmptyState ── */}
      <section className={`${styles.section} reveal d6`}>
        <SectionHeading
          title="EmptyState"
          description="Compound component for zero-data screens. Compose with icon, title, description, and actions."
        />

        <ComponentErrorBoundary name="EmptyState">
          <ShowcaseBlock code={EMPTY_STATE_CODE}>
            <EmptyState>
              <EmptyStateIcon>
                <FileX className="w-6 h-6" />
              </EmptyStateIcon>
              <EmptyStateTitle>No documents found</EmptyStateTitle>
              <EmptyStateDescription>
                Upload a document to get started.
              </EmptyStateDescription>
              <EmptyStateActions>
                <Button>Upload Document</Button>
              </EmptyStateActions>
            </EmptyState>
          </ShowcaseBlock>
        </ComponentErrorBoundary>
      </section>
    </div>
  )
}
