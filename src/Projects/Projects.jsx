import React from "react";
import "./Projects.css";
import { forwardRef } from "react";
import Card from "/Users/odi/Documents/Portfolio/portfolio/src/Card/Card";
import "./Projects.css";
import drawdle from "/Users/odi/Documents/Portfolio/portfolio/src/Photos/drawdle.png";
import nostalgic from "/Users/odi/Documents/Portfolio/portfolio/src/Photos/nostalgic.jpg";
import sentiment from "/Users/odi/Documents/Portfolio/portfolio/src/Photos/sentiment.png";
import website from "/Users/odi/Documents/Portfolio/portfolio/src/Photos/website.jpeg";
import Popup from "reactjs-popup";
import { ReactComponent as GitIcon } from "/Users/odi/Documents/Portfolio/portfolio/src/SVGs/git.svg";
import { ReactComponent as ChainIcon } from "/Users/odi/Documents/Portfolio/portfolio/src/SVGs/chain.svg";
import Carousel from "react-bootstrap/Carousel";
import cutscene from "/Users/odi/Documents/Portfolio/portfolio/src/SVGs/cutscene.jpeg";

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
                position={{ left: "25rem", top: "10px" }}
                img={cutscene}
                height={"300px"}
                title="Cutscene"
                body="2023 . React js"
              />
            </button>
          }
          modal
        >
          {(close) => (
            <div className="modal">
              <div className="modal-head">Cutscene</div>
              <div className="modal-content">
                {" "}
                <p className="modal-para">
                  A platform for gamers to create lists and reviews of their
                  favourite games for others to see. Built with React js and
                  user data + authentication built over Firebase.
                </p>
                <a href="https://github.com/odis43/Cutscene" target="_blank">
                  <GitIcon />
                </a>
                <div style={{ "padding-top": "5px" }}>
                  <h3>Skills</h3>
                  <p>React js | Node js | Firebase | Tailwind css</p>
                </div>
              </div>
            </div>
          )}
        </Popup>
        <Popup
          trigger={
            <button>
              <Card
                position={{ left: "5em", top: "10px" }}
                img={drawdle}
                height={"300px"}
                title="Drawdle"
                body="2022 . React js"
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
                  A full-stack web app using React, Bootstrap and the BLIP API
                  (Bootstrapping Language-Imaging Pre-Training) for image
                  captioning. Challenge Drawdle with your drawing skills to see
                  who comes on top! Unfortunately, the BLIP API is now outdated
                  meaning Drawdle's guesses are slower. Although, feel free to
                  make some fun doodles within the app.
                </p>
                <a href="https://github.com/odis43/Drawdle" target="_blank">
                  <GitIcon />
                </a>
                <a href="https://drawdle.vercel.app" target="_blank">
                  <ChainIcon className="chain" />
                </a>
                <div style={{ "padding-top": "5px" }}>
                  <h3>Skills</h3>
                  <p>React js | Node js | Rest API</p>
                </div>
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
                body="2023 . Python"
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
                  Used pre-parsed Twitter data to train an NLP model to classify
                  sentences as "positive" or "negative". Data was split into
                  training and testing sets. The model was then evaluated and
                  yielded an accuracy of 85%. The purpose of this project was to
                  understand the general workflow of training ML models as well
                  as the nuances to sentiment analysis.
                </p>
                <a href="" target="_blank">
                  <GitIcon />
                </a>
                <div style={{ "padding-top": "5px" }}>
                  <h3>Skills</h3>
                  <p>Python | NLP | Sentiment Analysis</p>
                </div>
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
                body="2023 . ReactJS"
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
                  Ever since I was a child, music has been an innate part of my
                  life. I thought it would be fitting to create a personal
                  portfolio that takes the form of an artist's Spotify bio -
                  mixing my love for development and music.
                </p>
                <a href="https://github.com/odis43/Portfolio" target="_blank">
                  <GitIcon />
                </a>
                <a href="https://github.com/odis43/Portfolio" target="_blank">
                  <ChainIcon className="chain" />
                </a>
                <div style={{ "padding-top": "5px" }}>
                  <h3>Skills</h3>
                  <p>React js | Node js | Rest API</p>
                </div>
              </div>
            </div>
          )}
        </Popup>
         
      </div>
    </div>
  );
});

export default Projects;
