import React from "react";
import "./Projects.css";
import { forwardRef } from "react";
import Card from "./Card.jsx";
import "./Projects.css";
import drawdle from "./drawdle.png";
import nostalgic from "./nostalgic.jpg";
import sentiment from "./sentiment.png";
import website from "./website.jpeg";
import Popup from "reactjs-popup";
import { ReactComponent as GitIcon } from "./git.svg";
import { ReactComponent as ChainIcon } from "./chain.svg";
import Carousel from "react-bootstrap/Carousel";

const Projects = forwardRef((props, ref) => {
  const { refProjects } = props;
  return (
    <div ref={refProjects} className="projects-container">
      <div className="projects">
        <h2>Projects</h2>
      </div>
      <div className="project-cards">
        <Popup
          trigger={
            <button>
              <Card
                position={{ left: "5em", top: "10px" }}
                img={drawdle}
                height={"300px"}
                title="Drawdle"
                body="2022 . ReactJS /   Image Recognition"
              />
            </button>
          }
          modal
        >
          {(close) => (
            <div className="modal">
              <div className="modal-head"> Drawdle</div>
              <div className="modal-content">
                {" "}
                <p className="modal-para">
                  Created a full-stack web app with React and React-Bootstrap
                  and utilized the BLIP API (Bootstrapping Language-Imaging
                  Pre-Training) for image captioning. This was a duo effort
                  between my friend and I and we were very new to full-stack dev
                  especially using React. By the end of the project, we
                  developed a good understanding of class components.
                </p>
                <a href="https://github.com/odis43/Drawdle" target="_blank">
                  <GitIcon />
                </a>
                <a href="drawdle.vercel.app" target="_blank">
                  <ChainIcon className="chain" />
                </a>
                <div></div>
              </div>
            </div>
          )}
        </Popup>
        <Popup
          trigger={
            <button>
              <Card
                position={{ left: "25rem", top: "10px" }}
                img={nostalgic}
                height={"300px"}
                title="Similarfy"
                body="2022 . ReactJS / Spotify API"
              />
            </button>
          }
          modal
        >
          {(close) => (
            <div className="modal">
              <div className="modal-head">Similarfy</div>
              <div className="modal-content">
                {" "}
                <p className="modal-para">
                  No idea what the fuck this is LMAO
                </p>
                <a href="https://github.com/odis43/Nostalgify" target="_blank">
                  <GitIcon />
                </a>
                <div></div>
              </div>
            </div>
          )}
        </Popup>
        <Popup
          trigger={
            <button>
              <Card
                position={{ left: "45rem", top: "10px" }}
                img={sentiment}
                height={"300px"}
                title="Sentiment-Bot"
                body="2023 . Python / NLP"
              />
            </button>
          }
          modal
        >
          {(close) => (
            <div className="modal">
              <div className="modal-head"> Sentiment-Bot</div>
              <div className="modal-content">
                {" "}
                <p className="modal-para">
                  Used pre-parsed Twitter data to train an NLP model to classify sentences as "positive" or 
                  "negative".  Data was split into training and testing sets.  The model was then evaluated and yielded an accuracy
                  of 85%.
                </p>
                <a href="https://github.com/odis43/Drawdle" target="_blank">
                  <GitIcon />
                </a>
                <a href="drawdle.vercel.app" target="_blank">
                  <ChainIcon className="chain" />
                </a>
                <div></div>
              </div>
            </div>
          )}
        </Popup>
        <Popup
          trigger={
            <button>
              <Card
                position={{ left: "65em", top: "10px" }}
                img={website}
                height={"300px"}
                title="Personal Portfolio"
                body="2023 . ReactJS / Front-End"
              />
            </button>
          }
          modal
        >
          {(close) => (
            <div className="modal">
              <div className="modal-head"> Personal Portfolio</div>
              <div className="modal-content">
                {" "}
                <p className="modal-para">
                  Since I love music I thought it would be fitting to create a portfolio that resembled an artist's 
                  Spotify page.  The portfolio was built using React Js components.
                </p>
                <a href="" target="_blank">
                  <GitIcon />
                </a>
                <div></div>
              </div>
            </div>
          )}
        </Popup>
         
      </div>
    </div>
  );
});

export default Projects;
