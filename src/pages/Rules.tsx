import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, FileX, AlertCircle } from 'lucide-react'
import {
  Button,
  Badge,
  Heading,
  Text,
  Skeleton,
  EmptyState,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateDescription,
  EmptyStateActions,
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  Input,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  useFeedbackToast,
} from '@avantodev/strata-design-system'
import { ShowcaseBlock } from '../components/ShowcaseBlock'
import { CodeBlock } from '../components/CodeBlock'
import { ComponentErrorBoundary } from '../components/ComponentErrorBoundary'
import styles from './Rules.module.css'

/* ─── Part 1: Rule cards ─────────────────────────────────────────── */

interface RuleCardProps {
  num: number
  statement: string
  rationale: string
  doCode: string
  dontCode: string
  children?: React.ReactNode
}

function RuleCard({ num, statement, rationale, doCode, dontCode, children }: RuleCardProps) {
  return (
    <div className={styles.ruleCard}>
      <div className={styles.ruleCardHeader}>
        <span className={styles.ruleNumber}>Rule {num}</span>
        <span className={styles.ruleStatement}>{statement}</span>
      </div>
      <div className={styles.ruleBody}>
        {children}
        <div>
          <div className={`${styles.codeLabel} ${styles.doLabel}`}>✅ Do</div>
          <CodeBlock code={doCode} language="tsx" />
        </div>
        <div>
          <div className={`${styles.codeLabel} ${styles.dontLabel}`}>❌ Don't</div>
          <div className={styles.dontCode}>
            <CodeBlock code={dontCode} language="tsx" />
          </div>
        </div>
        <p className={styles.ruleRationale}>{rationale}</p>
      </div>
    </div>
  )
}

/* ─── Part 2: Toast demo ─────────────────────────────────────────── */

function ToastDemo() {
  const { show } = useFeedbackToast()
  return (
    <div className={styles.toastRow}>
      <Button variant="outline" size="sm" onClick={() => show({ variant: 'success', message: 'Document saved successfully.' })}>
        success toast
      </Button>
      <Button variant="outline" size="sm" onClick={() => show({ variant: 'error', message: 'Failed to save. Please try again.' })}>
        error toast
      </Button>
      <Button variant="outline" size="sm" onClick={() => show({ variant: 'warning', message: 'Unsaved changes will be lost.' })}>
        warning toast
      </Button>
    </div>
  )
}

/* ─── Part 2: Dialog demo ────────────────────────────────────────── */

function DialogDemo() {
  const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Open dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Action</DialogTitle>
          <DialogDescription>This action cannot be undone.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="destructive" onClick={() => setOpen(false)}>Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

/* ─── code snippets ──────────────────────────────────────────────── */

// Rule 1
const R1_DO = `import { Button, Field, Input } from '@avantodev/strata-design-system'`
const R1_DONT = `import { Button } from '../../storybook/src/components/button'`

// Rule 2
const R2_DO = `<p className="text-foreground">Main text</p>
<p className="text-muted-foreground">Secondary text</p>
<p className="text-destructive">Error text</p>
<div className="bg-card border-border">...</div>
<button className="bg-brand-500 hover:bg-brand-600">Action</button>`
const R2_DONT = `<p className="text-zinc-900">Main text</p>
<p className="text-gray-500">Secondary text</p>
<p className="text-red-500">Error text</p>
<div className="bg-white border-gray-200">...</div>
<button className="bg-lime-400 text-black">Action</button>`

// Rule 3
const R3_DO = `import { ChevronRight, X, ArrowRight } from 'lucide-react'
<ChevronRight className="w-4 h-4" />`
const R3_DONT = `<span>›</span>
<span>→</span>
<button>✕</button>`

// Rule 4
const R4_DO = `import { cn } from '@avantodev/strata-design-system'
<div className={cn('base-class', isActive && 'active-class', className)} />`
const R4_DONT = `<div className={'base-class ' + className} />
<div className={\`base-class \${className}\`} />`

// Rule 5
const R5_DO = `import { Button, Link } from '@avantodev/strata-design-system'
<Button variant="outline">Cancel</Button>
<Link href="/dashboard">Dashboard</Link>`
const R5_DONT = `<button className="border rounded px-4 py-2">Cancel</button>
<a href="/dashboard" className="text-lime-400 underline">Dashboard</a>`

// Rule 6
const R6_DO = `import { Field, FieldLabel, FieldDescription, FieldError, Input }
  from '@avantodev/strata-design-system'

<Field>
  <FieldLabel>Email</FieldLabel>
  <Input type="email" placeholder="you@example.com" />
  <FieldDescription>We'll never share your email.</FieldDescription>
  <FieldError>Please enter a valid email.</FieldError>
</Field>`
const R6_DONT = `<div>
  <label className="text-sm font-medium text-zinc-700">Email</label>
  <input type="email" className="border rounded px-3 py-2" />
  <p className="text-xs text-red-500">Please enter a valid email.</p>
</div>`

// Pattern: Colors & Typography
const P_TYPO_DO = `import { Heading, Text } from '@avantodev/strata-design-system'

<Heading level={2}>Section Title</Heading>
<Text className="text-muted-foreground">Helper text</Text>`
const P_TYPO_DONT = `<h2 className="text-xl font-bold text-zinc-900">Section Title</h2>
<p className="text-sm text-gray-500">Helper text</p>`

// Pattern: Buttons & Links
const P_BTN_DO = `import { Button } from '@avantodev/strata-design-system'
import { Trash2 } from 'lucide-react'

<Button variant="default">Save</Button>
<Button variant="destructive" size="sm">
  <Trash2 className="w-4 h-4" /> Delete
</Button>
<Button variant="outline">Cancel</Button>
<Button variant="ghost" size="icon"><Plus className="w-4 h-4" /></Button>`
const P_BTN_DONT = `<button className="bg-lime-400 text-black px-4 py-2 rounded">Save</button>
<button onClick={handleDelete}>✕ Delete</button>`

const P_LINK_DO = `import { Link } from '@avantodev/strata-design-system'
<Link href="/dashboard">Go to Dashboard</Link>`
const P_LINK_DONT = `<a href="/dashboard" className="text-lime-400 underline">Go to Dashboard</a>`

// Pattern: Icons
const P_ICON_DO = `import { ChevronRight, X } from 'lucide-react'

<ChevronRight className="w-4 h-4" />
<Button variant="ghost" size="icon">
  <X className="w-4 h-4" />
</Button>`
const P_ICON_DONT = `<span>›</span>
<button>✕</button>`

// Pattern: Forms
const P_FORM_DO = `import { Field, FieldLabel, FieldDescription, FieldError, Input }
  from '@avantodev/strata-design-system'

<Field>
  <FieldLabel>Email</FieldLabel>
  <Input type="email" placeholder="you@example.com" />
  <FieldDescription>We'll never share your email.</FieldDescription>
  <FieldError>Please enter a valid email.</FieldError>
</Field>`
const P_FORM_DONT = `<div>
  <label className="text-sm font-medium">Email</label>
  <input type="email" className="border rounded px-3 py-2" />
  <p className="text-xs text-red-500">Invalid email.</p>
</div>`

// Pattern: Layout
const P_LAYOUT_DO = `import { PageLayout } from '@avantodev/strata-design-system'

<PageLayout
  heading="Dashboard"
  subheading="Overview of all activity"
  headerActions={<Button>New Item</Button>}
>
  {/* page content */}
</PageLayout>`
const P_LAYOUT_DONT = `<div className="p-8">
  <h1 className="text-2xl font-bold">Dashboard</h1>
  {/* content */}
</div>`

const P_BREADCRUMB = `import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem,
  BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator,
} from '@avantodev/strata-design-system'

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current Page</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`

// Pattern: Overlays
const P_DIALOG_DO = `import {
  Dialog, DialogTrigger, DialogContent,
  DialogHeader, DialogTitle, DialogDescription, DialogFooter,
} from '@avantodev/strata-design-system'

<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Confirm Action</DialogTitle>
      <DialogDescription>This action cannot be undone.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">Delete</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`
const P_DIALOG_DONT = `{showModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/50">
    <div className="bg-white p-6 rounded-lg">...</div>
  </div>
)}`

const P_TOAST_DO = `import { useFeedbackToast } from '@avantodev/strata-design-system'

const { show } = useFeedbackToast()

show({ variant: 'success', message: 'Document saved successfully.' })
show({ variant: 'error',   message: 'Failed to save. Please try again.' })
show({ variant: 'warning', message: 'Unsaved changes will be lost.' })`
const P_TOAST_DONT = `import { toast } from 'sonner'
toast('Saved')
alert('Failed')`

// Pattern: Status & Feedback
const P_BADGE_DO = `<Badge variant="solid"   color="green">Active</Badge>
<Badge variant="soft"    color="amber">Pending</Badge>
<Badge variant="solid"   color="red">Error</Badge>
<Badge variant="outline" color="zinc">Draft</Badge>`

const P_SKELETON_DO = `<Skeleton className="h-4 w-48" />   {/* text line */}
<Skeleton className="h-10 w-full" />{/* input    */}
<Skeleton className="h-32 w-full" />{/* card     */}`
const P_SKELETON_DONT = `{loading && <p>Loading...</p>}`

const P_EMPTY_DO = `import {
  EmptyState, EmptyStateIcon, EmptyStateTitle,
  EmptyStateDescription, EmptyStateActions,
} from '@avantodev/strata-design-system'
import { FileX } from 'lucide-react'

<EmptyState>
  <EmptyStateIcon>
    <FileX className="w-6 h-6 text-muted-foreground" />
  </EmptyStateIcon>
  <EmptyStateTitle>No documents found</EmptyStateTitle>
  <EmptyStateDescription>Upload a document to get started.</EmptyStateDescription>
  <EmptyStateActions>
    <Button>Upload Document</Button>
  </EmptyStateActions>
</EmptyState>`
const P_EMPTY_DONT = `{items.length === 0 && (
  <p className="text-center text-gray-400">No items</p>
)}`

/* ─── page ───────────────────────────────────────────────────────── */

export function Rules() {
  return (
    <div className={styles.page}>
      <Link to="/" className={styles.back}>← Back</Link>
      <h1 className={`${styles.heading} reveal d1`}>Design Rules</h1>
      <p className={`${styles.lead} reveal d2`}>
        Six non-negotiables. If you break these, the design system cannot help you.
      </p>

      {/* ── Part 1 ── */}
      <div className={`${styles.ruleList} reveal d3`}>

        <RuleCard
          num={1}
          statement="Import from the design system package."
          rationale="Importing directly from storybook source bypasses versioning and breaks when the storybook repo restructures — the published package is the only stable contract."
          doCode={R1_DO}
          dontCode={R1_DONT}
        />

        <RuleCard
          num={2}
          statement="Use semantic color tokens — never hardcode colors."
          rationale="Hardcoded colors break theming and cannot be updated globally — a single token change in the DS would require hunting down every hex value in every component."
          doCode={R2_DO}
          dontCode={R2_DONT}
        />

        <RuleCard
          num={3}
          statement="Use lucide-react for all icons — never text characters."
          rationale="Text glyphs render inconsistently across browsers and operating systems; lucide-react icons are SVG, scale precisely with Tailwind size classes, and stay consistent everywhere."
          doCode={R3_DO}
          dontCode={R3_DONT}
        />

        <RuleCard
          num={4}
          statement="Use cn() for all className merging."
          rationale="String concatenation silently produces invalid class lists when values are undefined or false; cn() from the DS handles conditional classes, deduplication, and conflict resolution correctly."
          doCode={R4_DO}
          dontCode={R4_DONT}
        />

        <RuleCard
          num={5}
          statement="Use DS components — never raw HTML equivalents."
          rationale="Raw HTML bypasses DS accessibility patterns, keyboard handling, and token wiring — rebuilding what the component already provides correctly."
          doCode={R5_DO}
          dontCode={R5_DONT}
        >
          <table className={styles.subTable}>
            <thead>
              <tr>
                <th>Need</th>
                <th>Use</th>
                <th>Never use</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Button',          <code key="b1">&lt;Button&gt;</code>,          <code key="b2">&lt;button&gt;</code>],
                ['Navigation link', <code key="l1">&lt;Link&gt; from DS</code>,   <code key="l2">&lt;a href&gt;</code>],
                ['Date input',      <code key="d1">&lt;DatePicker&gt;</code>,      <code key="d2">&lt;Input type="date" /&gt;</code>],
                ['Table',           <code key="t1">DS &lt;Table&gt; family</code>, <code key="t2">&lt;table&gt;</code>],
                ['Typography',      <code key="y1">&lt;Heading&gt;, &lt;Text&gt;</code>, <code key="y2">&lt;h1&gt;–&lt;h6&gt;, &lt;p&gt;</code>],
              ].map(([need, use, never]) => (
                <tr key={String(need)}>
                  <td>{need}</td>
                  <td>{use}</td>
                  <td>{never}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </RuleCard>

        <RuleCard
          num={6}
          statement="Wrap form inputs in <Field>."
          rationale="The Field wrapper coordinates label association, description text, and error state in a single accessible unit — without it, screen readers cannot link the label to the input."
          doCode={R6_DO}
          dontCode={R6_DONT}
        />
      </div>

      {/* ── Part 2 ── */}
      <h2 className={`${styles.partHeading} reveal d1`}>Pattern Reference</h2>
      <p className={`${styles.partDesc} reveal d2`}>Representative Do/Don't examples for each pattern category.</p>

      <div className={`${styles.patternList} reveal d3`}>

        {/* Colors & Typography */}
        <section className={styles.patternSection}>
          <h3 className={styles.patternTitle}>Colors &amp; Typography</h3>
          <p className={styles.patternDesc}>
            Use semantic token classes for all color — never Tailwind primitives or hex. Use{' '}
            <code style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}>Heading</code> and{' '}
            <code style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}>Text</code> for all type hierarchy.
          </p>
          <ComponentErrorBoundary name="Colors & Typography">
            <div className={styles.patternExamples}>
              <div>
                <div className={`${styles.codeLabel} ${styles.doLabel}`}>✅ Do</div>
                <ShowcaseBlock code={P_TYPO_DO}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <Heading level={2}>Section Title</Heading>
                    <Text className="text-muted-foreground">Helper text</Text>
                  </div>
                </ShowcaseBlock>
              </div>
              <div>
                <div className={`${styles.codeLabel} ${styles.dontLabel}`}>❌ Don't</div>
                <div className={styles.dontCode}>
                  <CodeBlock code={P_TYPO_DONT} language="tsx" />
                </div>
              </div>
            </div>
          </ComponentErrorBoundary>
        </section>

        {/* Buttons & Links */}
        <section className={styles.patternSection}>
          <h3 className={styles.patternTitle}>Buttons &amp; Links</h3>
          <p className={styles.patternDesc}>
            Use <code style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}>Button</code> for all interactions.
            Variants: default · destructive · outline · secondary · ghost · link · brand · accent.
            Use DS <code style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}>Link</code> for navigation — never raw <code style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}>&lt;a&gt;</code>.
          </p>
          <ComponentErrorBoundary name="Buttons & Links">
            <div className={styles.patternExamples}>
              <div>
                <div className={`${styles.codeLabel} ${styles.doLabel}`}>✅ Do — Button</div>
                <ShowcaseBlock code={P_BTN_DO}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                    <Button variant="default" size="sm">Save</Button>
                    <Button variant="destructive" size="sm">Delete</Button>
                    <Button variant="outline" size="sm">Cancel</Button>
                    <Button variant="ghost" size="icon" aria-label="next">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </ShowcaseBlock>
              </div>
              <div>
                <div className={`${styles.codeLabel} ${styles.dontLabel}`}>❌ Don't</div>
                <div className={styles.dontCode}>
                  <CodeBlock code={P_BTN_DONT} language="tsx" />
                </div>
              </div>
              <div>
                <div className={`${styles.codeLabel} ${styles.doLabel}`}>✅ Do — Link</div>
                <CodeBlock code={P_LINK_DO} language="tsx" />
              </div>
              <div>
                <div className={`${styles.codeLabel} ${styles.dontLabel}`}>❌ Don't</div>
                <div className={styles.dontCode}>
                  <CodeBlock code={P_LINK_DONT} language="tsx" />
                </div>
              </div>
            </div>
          </ComponentErrorBoundary>
        </section>

        {/* Icons */}
        <section className={styles.patternSection}>
          <h3 className={styles.patternTitle}>Icons</h3>
          <p className={styles.patternDesc}>
            Always import from <code style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}>lucide-react</code>.
            Size with Tailwind classes — never inline width/height style attributes.
          </p>
          <ComponentErrorBoundary name="Icons">
            <table className={styles.sizeTable}>
              <thead>
                <tr>
                  <th>Context</th>
                  <th>Class</th>
                  <th>strokeWidth</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Inline with text</td><td><code>w-4 h-4</code></td><td>—</td></tr>
                <tr><td>Standalone in button</td><td><code>w-5 h-5</code></td><td>—</td></tr>
                <tr><td>Lighter visual weight</td><td>—</td><td><code>strokeWidth={'{1.5}'}</code></td></tr>
              </tbody>
            </table>
            <div className={styles.patternExamples}>
              <div>
                <div className={`${styles.codeLabel} ${styles.doLabel}`}>✅ Do</div>
                <ShowcaseBlock code={P_ICON_DO}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    <Button variant="ghost" size="icon" aria-label="close">
                      <AlertCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </ShowcaseBlock>
              </div>
              <div>
                <div className={`${styles.codeLabel} ${styles.dontLabel}`}>❌ Don't</div>
                <div className={styles.dontCode}>
                  <CodeBlock code={P_ICON_DONT} language="tsx" />
                </div>
              </div>
            </div>
          </ComponentErrorBoundary>
        </section>

        {/* Forms */}
        <section className={styles.patternSection}>
          <h3 className={styles.patternTitle}>Forms</h3>
          <p className={styles.patternDesc}>
            Always wrap inputs in <code style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}>Field</code> with its sub-components.
            Use <code style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}>DatePicker</code> instead of{' '}
            <code style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}>Input type="date"</code>.
            Never write raw label/input/error HTML.
          </p>
          <ComponentErrorBoundary name="Forms">
            <div className={styles.patternExamples}>
              <div>
                <div className={`${styles.codeLabel} ${styles.doLabel}`}>✅ Do</div>
                <ShowcaseBlock code={P_FORM_DO}>
                  <Field style={{ width: '100%', maxWidth: '320px' }}>
                    <FieldLabel>Email</FieldLabel>
                    <Input type="email" placeholder="you@example.com" />
                    <FieldDescription>We'll never share your email.</FieldDescription>
                    <FieldError>Please enter a valid email.</FieldError>
                  </Field>
                </ShowcaseBlock>
              </div>
              <div>
                <div className={`${styles.codeLabel} ${styles.dontLabel}`}>❌ Don't</div>
                <div className={styles.dontCode}>
                  <CodeBlock code={P_FORM_DONT} language="tsx" />
                </div>
              </div>
            </div>
          </ComponentErrorBoundary>
        </section>

        {/* Layout */}
        <section className={styles.patternSection}>
          <h3 className={styles.patternTitle}>Layout</h3>
          <p className={styles.patternDesc}>
            Use <code style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}>PageLayout</code> for every page — it wires the heading, subheading, and header actions into the correct DS structure.
            Use the Breadcrumb compound component for navigation trails.
          </p>
          <ComponentErrorBoundary name="Layout">
            <div className={styles.patternExamples}>
              <div>
                <div className={`${styles.codeLabel} ${styles.doLabel}`}>✅ Do — PageLayout</div>
                <CodeBlock code={P_LAYOUT_DO} language="tsx" />
              </div>
              <div>
                <div className={`${styles.codeLabel} ${styles.dontLabel}`}>❌ Don't</div>
                <div className={styles.dontCode}>
                  <CodeBlock code={P_LAYOUT_DONT} language="tsx" />
                </div>
              </div>
              <div>
                <div className={`${styles.codeLabel} ${styles.doLabel}`}>✅ Do — Breadcrumb</div>
                <CodeBlock code={P_BREADCRUMB} language="tsx" />
              </div>
            </div>
          </ComponentErrorBoundary>
        </section>

        {/* Overlays */}
        <section className={styles.patternSection}>
          <h3 className={styles.patternTitle}>Overlays</h3>
          <p className={styles.patternDesc}>
            Use the Dialog compound component with a Button trigger — never a custom <code style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}>fixed inset-0</code> modal.
            Use <code style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}>useFeedbackToast</code> for notifications — never sonner directly or <code style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}>alert()</code>.
          </p>
          <ComponentErrorBoundary name="Overlays">
            <div className={styles.patternExamples}>
              <div>
                <div className={`${styles.codeLabel} ${styles.doLabel}`}>✅ Do — Dialog</div>
                <ShowcaseBlock code={P_DIALOG_DO}>
                  <DialogDemo />
                </ShowcaseBlock>
              </div>
              <div>
                <div className={`${styles.codeLabel} ${styles.dontLabel}`}>❌ Don't</div>
                <div className={styles.dontCode}>
                  <CodeBlock code={P_DIALOG_DONT} language="tsx" />
                </div>
              </div>
              <div>
                <div className={`${styles.codeLabel} ${styles.doLabel}`}>✅ Do — useFeedbackToast (live)</div>
                <ShowcaseBlock code={P_TOAST_DO}>
                  <ToastDemo />
                </ShowcaseBlock>
              </div>
              <div>
                <div className={`${styles.codeLabel} ${styles.dontLabel}`}>❌ Don't</div>
                <div className={styles.dontCode}>
                  <CodeBlock code={P_TOAST_DONT} language="tsx" />
                </div>
              </div>
            </div>
          </ComponentErrorBoundary>
        </section>

        {/* Status & Feedback */}
        <section className={styles.patternSection}>
          <h3 className={styles.patternTitle}>Status &amp; Feedback</h3>
          <p className={styles.patternDesc}>
            Use <code style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}>Badge</code> for inline labels,{' '}
            <code style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}>Skeleton</code> for loading placeholders,
            and <code style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}>EmptyState</code> for zero-data screens.
            Never roll custom coloured spans or "Loading…" text.
          </p>
          <ComponentErrorBoundary name="Status & Feedback">
            <div className={styles.patternExamples}>
              <div>
                <div className={`${styles.codeLabel} ${styles.doLabel}`}>✅ Do — Badge</div>
                <ShowcaseBlock code={P_BADGE_DO}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                    <Badge variant="solid" color="green">Active</Badge>
                    <Badge variant="soft" color="amber">Pending</Badge>
                    <Badge variant="solid" color="red">Error</Badge>
                    <Badge variant="outline" color="zinc">Draft</Badge>
                  </div>
                </ShowcaseBlock>
              </div>
              <div>
                <div className={`${styles.codeLabel} ${styles.doLabel}`}>✅ Do — Skeleton</div>
                <ShowcaseBlock code={P_SKELETON_DO}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', maxWidth: '300px' }}>
                    <Skeleton className="h-4 w-48" />
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-32 w-full" />
                  </div>
                </ShowcaseBlock>
              </div>
              <div>
                <div className={`${styles.codeLabel} ${styles.dontLabel}`}>❌ Don't — Skeleton</div>
                <div className={styles.dontCode}>
                  <CodeBlock code={P_SKELETON_DONT} language="tsx" />
                </div>
              </div>
              <div>
                <div className={`${styles.codeLabel} ${styles.doLabel}`}>✅ Do — EmptyState</div>
                <ShowcaseBlock code={P_EMPTY_DO}>
                  <EmptyState>
                    <EmptyStateIcon>
                      <FileX className="w-6 h-6 text-muted-foreground" />
                    </EmptyStateIcon>
                    <EmptyStateTitle>No documents found</EmptyStateTitle>
                    <EmptyStateDescription>Upload a document to get started.</EmptyStateDescription>
                    <EmptyStateActions>
                      <Button>Upload Document</Button>
                    </EmptyStateActions>
                  </EmptyState>
                </ShowcaseBlock>
              </div>
              <div>
                <div className={`${styles.codeLabel} ${styles.dontLabel}`}>❌ Don't — EmptyState</div>
                <div className={styles.dontCode}>
                  <CodeBlock code={P_EMPTY_DONT} language="tsx" />
                </div>
              </div>
            </div>
          </ComponentErrorBoundary>
        </section>

      </div>
    </div>
  )
}
