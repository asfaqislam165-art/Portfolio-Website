import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Project from './Components/Project'
import Cv from './Components/Cv'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div>
    
      <Navbar />
      
      <main className="pt-14">
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </main>
    </div>
  )
}

export default App