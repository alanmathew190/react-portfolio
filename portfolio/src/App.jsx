import React from 'react'
import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import './App.css'
import { ThemeProvider } from './components/ThemeContext'

function App() {
  
  return (
    <ThemeProvider>
      <div className="transition-colors duration-500">
        <Header />
        <HeroBanner />
        <Skills />
        <Education />
        <Projects />
        <Certificates />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App