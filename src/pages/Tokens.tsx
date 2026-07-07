import { Link } from 'react-router-dom'
import { Button } from '@avantodev/strata-design-system'
import { ShowcaseBlock } from '../components/ShowcaseBlock'
import styles from './Tokens.module.css'

/* ─── token data ─────────────────────────────────────────────────── */

interface TokenRow {
  token: string
  usage: string
  swatchClass: string
  swatchKind: 'text' | 'bg' | 'border'
  bgBackground?: boolean
}

const TEXT_TOKENS: TokenRow[] = [
  { token: 'text-foreground',        usage: 'Primary body text',                                        swatchClass: 'text-foreground',        swatchKind: 'text' },
  { token: 'text-muted-foreground',  usage: 'Secondary / helper text',                                  swatchClass: 'text-muted-foreground',  swatchKind: 'text' },
  { token: 'text-destructive',       usage: 'Error messages and destructive action labels',              swatchClass: 'text-destructive',       swatchKind: 'text' },
  { token: 'text-primary',           usage: 'Emphasized text — resolves to foreground in dark mode',    swatchClass: 'text-primary',           swatchKind: 'text' },
]

const BG_TOKENS: TokenRow[] = [
  { token: 'bg-background', usage: 'Page / app background',        swatchClass: 'bg-background', swatchKind: 'bg', bgBackground: true },
  { token: 'bg-card',       usage: 'Card and panel surfaces',       swatchClass: 'bg-card',       swatchKind: 'bg' },
  { token: 'bg-muted',      usage: 'Muted / subdued surfaces',      swatchClass: 'bg-muted',      swatchKind: 'bg' },
  { token: 'bg-primary',    usage: 'Primary action background',     swatchClass: 'bg-primary',    swatchKind: 'bg' },
]

const BORDER_TOKENS: TokenRow[] = [
  { token: 'border-border', usage: 'Default element borders',   swatchClass: 'border-border', swatchKind: 'border' },
  { token: 'border-input',  usage: 'Form input borders',        swatchClass: 'border-input',  swatchKind: 'border' },
]

const BRAND_TOKENS: TokenRow[] = [
  { token: 'bg-brand-500',       usage: 'Brand action background (buttons, highlights)',   swatchClass: 'bg-brand-500',   swatchKind: 'bg' },
  { token: 'text-brand-500',     usage: 'Brand-colored text and icons',                   swatchClass: 'text-brand-500', swatchKind: 'text' },
  { token: 'hover:bg-brand-600', usage: 'Brand hover state — darker shade on interaction', swatchClass: 'bg-brand-600',   swatchKind: 'bg' },
]

/* ─── showcase code ──────────────────────────────────────────────── */

const CARD_CODE = `<div className="bg-card border border-border rounded-xl p-6">
  <h3 className="text-foreground font-semibold mb-1">
    Card heading
  </h3>
  <p className="text-muted-foreground text-sm">
    Supporting text uses text-muted-foreground.
  </p>
</div>`

const BRAND_BTN_CODE = `import { Button } from '@avantodev/strata-design-system'

{/* variant="brand" maps to bg-brand-500 / hover:bg-brand-600 */}
<Button variant="brand">Brand Action</Button>`

/* ─── swatch cell ────────────────────────────────────────────────── */

function Swatch({ row }: { row: TokenRow }) {
  if (row.swatchKind === 'text') {
    return (
      <span className={`${styles.swatch} ${styles.swatchText} ${row.swatchClass}`}>
        Aa
      </span>
    )
  }
  if (row.swatchKind === 'border') {
    return (
      <span className={`${styles.swatch} ${styles.swatchBorderBox} border ${row.swatchClass}`} />
    )
  }
  // bg
  return (
    <span
      className={`${styles.swatch} ${row.swatchClass} ${row.bgBackground ? styles.swatchBackgroundBorder : ''}`}
    />
  )
}

/* ─── token table ────────────────────────────────────────────────── */

function TokenTable({ rows }: { rows: TokenRow[] }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Token</th>
          <th>Usage</th>
          <th>Swatch</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(row => (
          <tr key={row.token}>
            <td><code className={styles.tokenName}>{row.token}</code></td>
            <td><span className={styles.tokenUsage}>{row.usage}</span></td>
            <td><Swatch row={row} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

/* ─── page ───────────────────────────────────────────────────────── */

export function Tokens() {
  return (
    <div className={styles.page}>
      <Link to="/" className={styles.back}>← Back</Link>
      <h1 className={`${styles.heading} reveal d1`}>Design Tokens</h1>

      {/* Definition */}
      <div className={`${styles.definition} reveal d2`}>
        <p className={styles.definitionText}>
          A <strong>design token</strong> is a named CSS variable that maps a semantic intent —
          such as <code>text-foreground</code> or <code>bg-card</code> — to the actual color value
          for the current theme. Tokens are <strong>theme-aware</strong>: they resolve to the
          correct value in both light and dark mode automatically, without any conditional logic in
          your component. Always reference the token name in your code; never hardcode the resolved
          hex value — doing so breaks the theme and violates Design Rule #2.
        </p>
      </div>

      {/* Token tables */}
      <div className={`${styles.groups} reveal d3`}>
        <div className={styles.group}>
          <h2 className={styles.groupTitle}>Text</h2>
          <TokenTable rows={TEXT_TOKENS} />
        </div>

        <div className={styles.group}>
          <h2 className={styles.groupTitle}>Background</h2>
          <TokenTable rows={BG_TOKENS} />
        </div>

        <div className={styles.group}>
          <h2 className={styles.groupTitle}>Border</h2>
          <TokenTable rows={BORDER_TOKENS} />
        </div>

        <div className={styles.group}>
          <h2 className={styles.groupTitle}>Brand</h2>
          <TokenTable rows={BRAND_TOKENS} />
        </div>
      </div>

      {/* Live Showcases */}
      <section className={`${styles.showcaseSection} reveal d4`}>
        <h2 className={styles.showcaseTitle}>Live examples</h2>
        <p className={styles.showcaseDesc}>
          Tokens applied to real markup — inspect the DOM to confirm no inline hex values.
        </p>
        <div className={styles.showcaseGrid}>
          <ShowcaseBlock code={CARD_CODE}>
            <div className="bg-card border border-border rounded-xl p-6" style={{ maxWidth: '360px' }}>
              <h3 className="text-foreground font-semibold mb-1">Card heading</h3>
              <p className="text-muted-foreground text-sm">
                Supporting text uses text-muted-foreground.
              </p>
            </div>
          </ShowcaseBlock>

          <ShowcaseBlock code={BRAND_BTN_CODE}>
            <Button variant="brand">Brand Action</Button>
          </ShowcaseBlock>
        </div>
      </section>
    </div>
  )
}
