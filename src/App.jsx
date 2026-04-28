import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Hackathons from './components/Hackathons'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Hackathons />
      <Contact />
    </div>
  )
}

export default App