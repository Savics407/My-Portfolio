import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './Home'
import Projects from './projects'
import Africurve from './projects/Africurve'
import Reico from './projects/HxAfrica'
import AnimCursor from './components/AnimCursor'

function App() {
  return (
    <Router>
      <AnimCursor />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/"                    element={<Home />} />
          <Route path="/projects"            element={<Projects />} />
          <Route path="/projects/africurve"  element={<Africurve />} />
          <Route path="/projects/hxafrica"   element={<Reico />} />
        </Routes>
      </AnimatePresence>
    </Router>
  )
}

export default App
