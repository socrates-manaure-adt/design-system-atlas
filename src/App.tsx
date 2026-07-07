import { HashRouter, Routes, Route } from 'react-router-dom'
import { FeedbackToastProvider } from '@avantodev/strata-design-system'
import { Topbar } from './components/Topbar'
import { Index } from './pages/Index'
import { WhatIsDS } from './pages/WhatIsDS'
import { Install } from './pages/Install'
import { Usage } from './pages/Usage'
import { Storybook as StorybookPage } from './pages/Storybook'
import { Tokens } from './pages/Tokens'
import { Rules } from './pages/Rules'
import styles from './App.module.css'

function AppShell() {
  return (
    <div className={styles.wrap}>
      <Topbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/what-is-ds" element={<WhatIsDS />} />
        <Route path="/install" element={<Install />} />
        <Route path="/usage" element={<Usage />} />
        <Route path="/storybook" element={<StorybookPage />} />
        <Route path="/tokens" element={<Tokens />} />
        <Route path="/rules" element={<Rules />} />
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
