import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './Home'
import Projects from './projects'
import AnimCursor from './components/AnimCursor'

const Africurve = React.lazy(() => import('./projects/Africurve'))
const Reico = React.lazy(() => import('./projects/HxAfrica'))
const SimpooCaseStudy = React.lazy(() => import('./projects/Simpoo'))
const DoraCellCaseStudy = React.lazy(() => import('./projects/DoraCell'))
const DoraFleetCaseStudy = React.lazy(() => import('./projects/DoraFleet'))
const SimpooMarketCaseStudy = React.lazy(() => import('./projects/SimpooMarket'))

function App() {
  return (
    <Router>
      <AnimCursor />
      <Suspense fallback={null}>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/"                            element={<Home />} />
            <Route path="/work"                        element={<Projects />} />
            <Route path="/projects"                    element={<Projects />} />
            <Route path="/projects/simpoo"             element={<SimpooCaseStudy />} />
            <Route path="/projects/simpoo-marketplace" element={<SimpooMarketCaseStudy />} />
            <Route path="/projects/dora"               element={<DoraCellCaseStudy />} />
            <Route path="/projects/dora-cell"          element={<DoraCellCaseStudy />} />
            <Route path="/projects/dora-fleet"         element={<DoraFleetCaseStudy />} />
            <Route path="/projects/africurve"          element={<Africurve />} />
            <Route path="/projects/hxafrica"           element={<Reico />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </Router>
  )
}

export default App
