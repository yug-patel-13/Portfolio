import React from 'react';
import "./App.css";
import Top from './components/Top';
import About from './components/About';
import Skills from './components/Skills';

import Project from './components/Project';
import Contact from './components/Contact';


const App = () => {
  return (
    <div>
      <Top/>
      <About/>
      <Skills/>
      <Project/>
  <Contact/>

    </div>
  )
}

export default App
