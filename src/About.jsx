import React from "react";
import "./About.css";
import Card from "./Card";
import "./Card.css"
import dog from "./dog.jpg";
import { forwardRef } from "react";

const About = forwardRef((props,ref) => {
    const {refAbout} = props;
    return (
        <div ref={refAbout} className="about-container">
            <div className="about">
                <h2>About</h2>
                <p> I’m a computer science student at the University of Waterloo. </p>
                <p >I am very interested in front end development, AI, machine
                    learning and everything in between.  When I’m not working on
                    my assignments you can find me playing the guitar, 
                    producing music, creating playlists in Spotify or playing squash!</p>
                    <p>Feel free to click the follow button to listen to my music!</p>
            </div>
            <Card 
                position = {{left: '65%', top: '52%'}}
                img = {dog}
                height = {'250px'}
            />
        </div>
    );
});

export default About;