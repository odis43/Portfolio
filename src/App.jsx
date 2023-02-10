import React from "react";
import Hero from "./Hero";
import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Card from "./Card";
import Projects from "./Projects";
import Player from "./Player";
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
