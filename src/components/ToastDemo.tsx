import { useState } from 'react'
import { Button, useFeedbackToast } from '@avantodev/strata-design-system'

const VARIANTS = [
  { label: 'Success', variant: 'success', message: 'Changes saved successfully.' },
  { label: 'Error', variant: 'error', message: 'Something went wrong. Please try again.' },
  { label: 'Warning', variant: 'warning', message: 'This action cannot be undone.' },
] as const

export function ToastDemo() {
  const { show } = useFeedbackToast()
  const [active, setActive] = useState<'success' | 'error' | 'warning'>('success')

  function fire() {
    const cfg = VARIANTS.find(v => v.variant === active)!
    show({ variant: cfg.variant, message: cfg.message })
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
      <select
        value={active}
        onChange={e => setActive(e.target.value as typeof active)}
        aria-label="Toast variant"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '14px',
          color: 'var(--text)',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.14)',
          borderRadius: '8px',
          padding: '8px 32px 8px 12px',
          appearance: 'none',
          WebkitAppearance: 'none',
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%238492af' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 10px center',
          cursor: 'pointer',
        }}
      >
        {VARIANTS.map(v => (
          <option key={v.variant} value={v.variant}>{v.label}</option>
        ))}
      </select>
      <Button onClick={fire} variant="outline">Fire toast</Button>
    </div>
  )
}
