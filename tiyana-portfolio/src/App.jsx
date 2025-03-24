import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

// import './styles/App.css';
import './styles/Header.css';
import './styles/About.css';
import './styles/Education.css';
import './styles/Skills.css';
import './styles/Projects.css';
import './styles/Achievements.css';
import './styles/Contact.css';
import './styles/Footer.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;