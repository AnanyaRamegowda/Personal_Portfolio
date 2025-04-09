import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { ExtraCurricular } from './components/ExtraCurricular';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Certifications } from './components/Certifications';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Experience />
        <Certifications />
        <Projects />
        <ExtraCurricular />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default App;