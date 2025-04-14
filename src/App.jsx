import About from "./components/About"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import { Analytics } from '@vercel/analytics/react';

function App() {

  return (
    <>
      <div className="bg-neutral-900 h-max w-full ">
          <Navbar/>
          <Hero/>
          <About/>
          <Projects/>
          <Contact/>
      </div>
      <Analytics/>
    </>
  )
}

export default App
