import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.eyebrow} reveal d1`}>Strata component library</div>
      <h1 className={`${styles.heading} reveal d2`}>
        Design System<br />
        <span className={styles.gradient}>Atlas</span>
      </h1>
      <p className={`${styles.tagline} reveal d3`}>
        A live reference for the <strong>Strata Design System</strong> — every component, token, and
        usage pattern in one place. Built for KT sessions and daily development.
      </p>
    </section>
  )
}
