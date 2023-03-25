import React from "react";
import Hero from "/Users/odi/Documents/Portfolio/portfolio/src/Hero/Hero";
import Header from "/Users/odi/Documents/Portfolio/portfolio/src/Header/Header";
import About from "/Users/odi/Documents/Portfolio/portfolio/src/About/About";
import Experience from "/Users/odi/Documents/Portfolio/portfolio/src/Experience/Experience";
import Card from "/Users/odi/Documents/Portfolio/portfolio/src/Card/Card";
import Projects from "/Users/odi/Documents/Portfolio/portfolio/src/Projects/Projects";
import Player from "/Users/odi/Documents/Portfolio/portfolio/src/Player/Player";
import "./App.css";
import { useRef } from "react";

function App() {
  const home = useRef(null);
  const about = useRef(null);
  const experience = useRef(null);
  const projects = useRef(null);
  const cover = useRef(null);

  return (
    <div className="App">
      <Hero refHome={home} cover={cover} />
      <Header
        home={home}
        about={about}
        experience={experience}
        projects={projects}
      />
      <About refAbout={about} />
      <Experience refExperience={experience} />
      <Projects refProjects={projects} />
      <Player refCover={cover} />
    </div>
  );
}

export default App;
