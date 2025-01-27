
import AboutMe from './components/AboutMe'
import ContactForm from './components/ContactForm'
import Education from './components/Education'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'


import './style/index.css'

function App() {


  return (
    <div className='relative h-full overflow-y-auto  antialiased '>
      <div className="fixed inset-0 bg-fixed bg-cover bg-img"></div>
      <div className="relative z-10 flex flex-col items-center p-4  space-y-8 container mx-auto">
        <Navbar />
        <Hero />
        <AboutMe />
        <Skills />
        <Education />
        
        <Projects />
   
        <ContactForm />
        <Footer />
      </div>
    </div>
  )
}

export default App
