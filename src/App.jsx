
import AnimCursor from './components/AnimCursor'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Africurve from './projects/Africurve'
import Reico from './projects/HxAfrica'
import Projects from './projects'


function App() {

  return (
    <div className="">
      <Router>

        <AnimCursor />
        <AnimatePresence exitBeforeEnter >
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/projects/africurve" element={<Africurve />} />
            <Route exact path="/projects/hxafrica" element={<Reico />} />
          </Routes>
        </AnimatePresence>
      </Router>

    </div>
  )
}

export default App
