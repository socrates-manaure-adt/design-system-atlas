import { Link } from 'react-router-dom'
import styles from './Topbar.module.css'

export function Topbar() {
  return (
    <header className={styles.topbar}>
      <Link to="/" className={`${styles.brand} reveal d1`}>
        <span className={styles.dot} />
        Design System Atlas
      </Link>
      <nav className={`${styles.links} reveal d1`}>
        <a
          className={styles.link}
          href="https://avantodev.github.io/front-react-strata-storybook"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Storybook ↗
        </a>
        <a
          className={styles.link}
          href="https://github.com/AvantoDev/front-react-strata-storybook"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
      </nav>
    </header>
  )
}
