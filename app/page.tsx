import React from 'react';
import './Components/style.css'; 
import Header from "./Components/Header";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Projects from './Components/Projects';
import ContactMe from './Components/ContactMe';
import Footer from './Components/Footer';
import Location from './Components/Location';

export default function MainPage() {
  return (
    <>
      <Header />
      <section id="home" className="section">
        <Home />
      </section>
      <section id="about" className="section">
        <AboutMe />
      </section>
      <section id="skill" className="section">
        <Skills />
      </section>
      <section id="projects" className="section">
        <Projects />
      </section>
      <section id="contactme" className="section">
        <ContactMe />
      </section>
      <section id="location" className="section">
        <Location />
      </section>
      <Footer />
    </>
  );
}
