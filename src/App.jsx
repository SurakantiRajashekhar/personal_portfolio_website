import AboutMe from './components/about/AboutMe'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import skills from './assets/skills.json'
import navbarItems from './assets/navbarItems.json'

function App() {
  return (
    <>
    <Navbar  />
    <Hero/>
    <AboutMe/>
    <Skills skills={skills}/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
