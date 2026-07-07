import { Component, type ReactNode } from 'react'
import styles from './ComponentErrorBoundary.module.css'

interface Props { name: string; children: ReactNode }
interface State { error: Error | null }

export class ComponentErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  render() {
    if (this.state.error) {
      return (
        <div className={styles.error}>
          <span className={styles.label}>⚠ {this.props.name} failed to render</span>
          <code className={styles.msg}>{this.state.error.message}</code>
        </div>
      )
    }
    return this.props.children
  }
}
