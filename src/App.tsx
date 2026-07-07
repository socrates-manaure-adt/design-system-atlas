import { HashRouter, Routes, Route } from 'react-router-dom'
import { FeedbackToastProvider } from '@avantodev/strata-design-system'
import { Topbar } from './components/Topbar'
import { Index } from './pages/Index'
import { Stub } from './pages/Stub'
import styles from './App.module.css'

function AppShell() {
  return (
    <div className={styles.wrap}>
      <Topbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/what-is-ds" element={<Stub title="What is the DS?" />} />
        <Route path="/install" element={<Stub title="Installation" />} />
        <Route path="/usage" element={<Stub title="Usage" />} />
        <Route path="/components" element={<Stub title="Components" />} />
        <Route path="/storybook" element={<Stub title="Storybook" />} />
        <Route path="/tokens" element={<Stub title="Tokens" />} />
        <Route path="/rules" element={<Stub title="Design Rules" />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <FeedbackToastProvider>
      <HashRouter>
        <AppShell />
      </HashRouter>
    </FeedbackToastProvider>
  )
}
