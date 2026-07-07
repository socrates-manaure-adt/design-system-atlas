import { Link } from 'react-router-dom'
import { Button } from '@avantodev/strata-design-system'
import { StepBlock } from '../components/StepBlock'
import { Callout } from '../components/Callout'
import { ToastDemo } from '../components/ToastDemo'
import styles from './Usage.module.css'

const IMPORT_CODE = `import { Button, Field, Input } from '@avantodev/strata-design-system'`

const PROVIDER_CODE = `import { FeedbackToastProvider } from '@avantodev/strata-design-system'

function App() {
  return (
    <FeedbackToastProvider>
      {/* rest of your app */}
    </FeedbackToastProvider>
  )
}`

const TOAST_HOOK_CODE = `import { Button, useFeedbackToast } from '@avantodev/strata-design-system'

function SaveButton() {
  const { show } = useFeedbackToast()

  function handleClick() {
    show({ variant: 'success', message: 'Changes saved successfully.' })
  }

  return <Button onClick={handleClick}>Save</Button>
}`

export function Usage() {
  return (
    <div className={styles.page}>
      <Link to="/" className={styles.back}>← Back</Link>

      <h1 className={`${styles.heading} reveal d1`}>Usage</h1>
      <p className={`${styles.lead} reveal d2`}>
        Three patterns you'll use in every Strata feature: importing components,
        wiring the required provider, and firing toasts.
      </p>

      <div className={`${styles.steps} reveal d3`}>
        <StepBlock
          number={1}
          title="Import components"
          language="tsx"
          code={IMPORT_CODE}
          description={
            <p className={styles.desc}>
              All components are named exports from the package root. Import only what you need —
              tree-shaking removes the rest at build time.
            </p>
          }
        >
          <Button>Primary button</Button>
          <Button variant="outline">Outline button</Button>
          <Button variant="ghost">Ghost button</Button>
        </StepBlock>

        <StepBlock
          number={2}
          title="Wrap with FeedbackToastProvider"
          language="tsx"
          code={PROVIDER_CODE}
          description={
            <>
              <p className={styles.desc}>
                <code className={styles.code}>FeedbackToastProvider</code> sets up the toast context
                that all DS toast utilities depend on. It renders no visible UI itself — it only
                mounts the toast container and provides the context.
              </p>
              <Callout kind="warning">
                <strong>Omitting <code>FeedbackToastProvider</code> causes a runtime error.</strong>{' '}
                Any component that calls <code>useFeedbackToast()</code> will throw:{' '}
                <code>useFeedbackToast must be used within a FeedbackToastProvider</code>.
                Wrap at the app root (in <code>App.tsx</code> or <code>main.tsx</code>), not at the
                feature level.
              </Callout>
            </>
          }
        />

        <StepBlock
          number={3}
          title="Use the useFeedbackToast hook"
          language="tsx"
          code={TOAST_HOOK_CODE}
          description={
            <p className={styles.desc}>
              <code className={styles.code}>useFeedbackToast()</code> returns a <code className={styles.code}>show</code> function.
              Call it with a <code className={styles.code}>variant</code> (<code className={styles.code}>'success'</code>,{' '}
              <code className={styles.code}>'error'</code>, <code className={styles.code}>'warning'</code>) and a{' '}
              <code className={styles.code}>message</code>. The demo below fires a real toast — try it.
            </p>
          }
        >
          <ToastDemo />
        </StepBlock>
      </div>

      <div className={styles.prev}>
        <Link to="/install" className={styles.prevLink}>← Install</Link>
      </div>
    </div>
  )
}
