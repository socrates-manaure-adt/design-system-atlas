import { Link } from 'react-router-dom'
import { StepBlock } from '../components/StepBlock'
import { Callout } from '../components/Callout'
import styles from './Install.module.css'

const NPMRC_CODE = `# .npmrc (project root)
@avantodev:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=\${NODE_AUTH_TOKEN}`

const INSTALL_CODE = `npm install @avantodev/strata-design-system`

const STYLES_CODE = `// src/main.tsx  (or your app entry point)
import '@avantodev/strata-design-system/dist/styles/index.css'`

export function Install() {
  return (
    <div className={styles.page}>
      <Link to="/" className={styles.back}>← Back</Link>

      <h1 className={`${styles.heading} reveal d1`}>Installation</h1>
      <p className={`${styles.lead} reveal d2`}>
        Three steps to get <code className={styles.pkg}>@avantodev/strata-design-system</code> running
        in your project. Takes about two minutes.
      </p>

      <div className={`${styles.steps} reveal d3`}>
        <StepBlock
          number={1}
          title="Configure .npmrc"
          language="bash"
          code={NPMRC_CODE}
          description={
            <>
              <p className={styles.desc}>
                The package lives on GitHub Package Registry under the <code>@avantodev</code> scope.
                Create a <code>.npmrc</code> file in your project root to redirect that scope to the
                right registry and authenticate with a GitHub PAT.
              </p>
              <Callout kind="warning">
                <strong>Add <code>.npmrc</code> to <code>.gitignore</code> immediately.</strong>{' '}
                The auth token line expands to a real token at install time. If committed even once,
                the token is in git history and must be rotated. In a monorepo, the <code>.npmrc</code>{' '}
                belongs at the workspace root so all packages share the same auth config.
              </Callout>
              <Callout kind="info">
                <code>NODE_AUTH_TOKEN</code> must be a GitHub Personal Access Token with{' '}
                <strong>read:packages</strong> scope. Set it as an environment variable locally and
                as a CI secret in GitHub Actions.
              </Callout>
            </>
          }
        />

        <StepBlock
          number={2}
          title="Install the package"
          language="bash"
          code={INSTALL_CODE}
          description={
            <p className={styles.desc}>
              Run this with <code>NODE_AUTH_TOKEN</code> set in your shell. npm reads <code>.npmrc</code>,
              routes the <code>@avantodev</code> scope to GitHub Package Registry, and authenticates
              with your token.
            </p>
          }
        />

        <StepBlock
          number={3}
          title="Import styles"
          language="typescript"
          code={STYLES_CODE}
          description={
            <>
              <p className={styles.desc}>
                Import the DS stylesheet once in your app entry point, before any component imports.
                This loads the design tokens (CSS custom properties), Tailwind utilities, and base
                resets the components depend on.
              </p>
              <Callout kind="warning">
                <strong>Without this import, components render completely unstyled.</strong>{' '}
                The most common symptom is a Button that looks like a plain browser default or a Dialog
                that has no background. This is the single most frequent setup mistake.
              </Callout>
            </>
          }
        />
      </div>

      <div className={styles.next}>
        <Link to="/usage" className={styles.nextLink}>
          Next: Usage →
        </Link>
      </div>
    </div>
  )
}
