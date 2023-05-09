
import AnimCursor from './components/AnimCursor'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Projects from './Projects'
import { AnimatePresence } from 'framer-motion'
import CaseStudy from './CaseStudy'
import Africurve from './Africurve'
import Reico from './HxAfrica'


function App() {

  return (
    <div className="">
      <Router>

        <AnimCursor />
        <AnimatePresence exitBeforeEnter >
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/casestudy" element={<CaseStudy />} />
            <Route exact path="/africurve" element={<Africurve />} />
            <Route exact path="/hxafrica" element={<Reico />} />
          </Routes>
        </AnimatePresence>
      </Router>

    </div>
  )
}

export default App
