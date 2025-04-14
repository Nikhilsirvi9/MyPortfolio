import About from "./components/About"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"

function App() {

  return (
    <>
      <div className="bg-neutral-900 h-max w-full">
          <Navbar/>
          <Hero/>
          <About/>
          <Projects/>
          <Contact/>
      </div>
    </>
  )
}

export default App
