import React from 'react'
import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import './App.css'

function App() {
  
  return (
    <div>
      <Header />
      <HeroBanner />
      <Skills />
      <Education />
      <Projects />
      <Certificates />
      <Contact/>
    </div>
  )
}

export default App