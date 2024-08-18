import React from "react";
import "./App.css";
import NavBar from "./component/NavBar";
import Hero from "./component/Hero";
import AboutMe from "./component/AboutMe";
import TechNologies from "./component/TechNologies";
import Services from "./component/Services";
import Projects from "./component/Projects";
import Contact from "./component/Contact.";

function App() {
  return (
    <>

    <div className="text-neutral-300">
      <Hero />
    </div>
    
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 mx-auto px-8 bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <NavBar />
            <AboutMe />
            <TechNologies />
            <Services />
            <Projects />
            <Contact />
      </div>
    </>
  );
}

export default App;
