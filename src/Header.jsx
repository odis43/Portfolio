import React from "react";
import "./Header.css";
import { ReactComponent as LinkedIcon } from "./linkedin.svg";
import { ReactComponent as GitIcon } from "./git.svg";
import { ReactComponent as SpotIcon } from "./spotify.svg";
import { ReactComponent as HomeIcon } from "./home.svg";
import { ReactComponent as SearchIcon } from "./search.svg";
import { ReactComponent as LibIcon } from "./library.svg";
import { ReactComponent as RadioIcon } from "./radio.svg";
import { ReactComponent as ResumeIcon } from "./resume.svg";
import { useEffect } from "react";
import { useRef } from "react";
import resume from "./Oditha A resume.pdf";

const Header = ( {home, about, experience, projects} ) => {

  const handleHome = () => {
    home.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleAbout = () => {
      about.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleExperience = () => {
    experience.current.scrollIntoView({ behavior: "smooth" });
};

  const handleProjects = () => {
  projects.current.scrollIntoView({ behavior: "smooth" });
};

  return (
    <div className="header">
      <div className="header-container">
        <table className="no-border-table center-table">
          <tbody>
            <tr>
              <td>
                <HomeIcon className="icon" />
              </td>
              <td onClick={handleHome}>Home</td>
            </tr>
            <tr>
              <td>
                <SearchIcon className="icon" />
              </td>
              <td onClick={handleAbout}>About</td>
            </tr>
            <tr>
              <td>
                <LibIcon className="icon" />
              </td>
              <td onClick={handleExperience}>Experience</td>
            </tr>
            <tr>
              <td>
                <RadioIcon className="icon" />
              </td>
              <td onClick={handleProjects}>Projects</td>
            </tr>
          </tbody>
        </table>

        <div className="library">
          <p>Your Library</p>
        </div>

        {/* <ul className="pages">
          <li className="header-list">
       
            <HomeIcon className="icon"/>
            Home
          </li>
          <li className="header-list">

            <SearchIcon className="icon" />
            About
          </li>
          <li className="header-list">

            <LibIcon className="icon"/>
            Experience
          </li>
          <li className="header-list">
     
            <RadioIcon className="icon" />
            Projects
          </li>
        </ul> */}

        {/* <p className="library">Your Library</p>
          <ul className="pages">
            <li>
                <a className="sm-list" href="https://www.linkedin.com/in/oditha/" target="_blank">Linkedin</a>
            </li>
            <li >
                <a className="sm-list" href="https://github.com/odis43" target="_blank">Github</a>
            </li>
            <li >
                <a className="sm-list" href="https://open.spotify.com/artist/2Uge6cHJuL1YKoZAMvTiGA?si=8d652b13c0164c53" target="_blank">Spotify</a>
            </li>
          </ul> */}

        <table className="no-border-table center-table">
          <tbody>
            <tr>
              <td>
                <LinkedIcon className="icon" />
              </td>
              <td>
                <a
                  className="sm-list"
                  href="https://www.linkedin.com/in/oditha/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <GitIcon className="icon" />
              </td>
              <td>
                {" "}
                <a
                  className="sm-list"
                  href="https://github.com/odis43"
                  target="_blank"
                >
                  Github
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <SpotIcon className="icon" />
              </td>
              <td>
                <a
                  className="sm-list"
                  href="https://open.spotify.com/artist/2Uge6cHJuL1YKoZAMvTiGA?si=8d652b13c0164c53"
                  target="_blank">
                  Spotify
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <ResumeIcon className="icon" />
              </td>
              <td>
                <a
                  className="sm-list"
                  href={resume}
                  target="_blank">
                  Resume
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Header;
