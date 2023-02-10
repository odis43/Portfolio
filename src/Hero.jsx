import React from "react";
import "./Hero.css";
import { ReactComponent as PlayIcon } from "./play.svg";
import { ReactComponent as ArtistIcon } from "./artist.svg";
import { ReactComponent as FollowIcon } from "./follow.svg";
import { forwardRef } from "react";

const Hero = forwardRef((props, ref) => {
  const { refHome } = props;
  const {cover} = props;

  const handleCover = () => {
    cover.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={refHome} className="hero">
      <div className="gradient">
        <div className="hero-container">
          <div>
            <ArtistIcon className="artist" />
            <h1 className="animation-hero">Hi, I'm Odi</h1>
          </div>
          <div>
            <svg
              onClick={handleCover}
              className="play"
              width="111"
              height="36"
              viewBox="0 0 111 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="111" height="36" rx="18" fill="#0DB145" />
              <path
                d="M39.4306 17.596V14.754H40.9566C41.9226 14.754 42.5106 15.3 42.5106 16.182C42.5106 17.036 41.9226 17.596 40.9566 17.596H39.4306ZM41.1946 19.262C43.1546 19.262 44.4566 17.974 44.4566 16.168C44.4566 14.376 43.1546 13.074 41.1946 13.074H37.4846V23H39.4166V19.262H41.1946ZM53.5398 23V21.152H49.1158V13.074H47.1838V23H53.5398ZM63.1112 23H65.2112L61.4312 13.074H59.1912L55.3832 23H57.4272L58.2532 20.732H62.2852L63.1112 23ZM60.2692 15.216L61.6412 18.968H58.8972L60.2692 15.216ZM69.0736 18.828V23H71.0056V18.828L74.5056 13.074H72.3356L70.1096 17.008L67.8836 13.074H65.6156L69.0736 18.828Z"
                fill="white"
              />
            </svg>

            <a href="https://open.spotify.com/artist/2Uge6cHJuL1YKoZAMvTiGA?si=0Pqy-QDCSo-cyT4zU4jk_w" target="_blank">
              <svg
                className="follow"
                width="111"
                height="36"
                viewBox="0 0 111 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.5683 23V19.136H29.4183V17.358H25.5543V14.908H29.8943V13.074H23.6223V23H25.5683ZM34.0793 18.03C34.0793 15.79 35.6472 14.726 37.1733 14.726C38.7133 14.726 40.2812 15.79 40.2812 18.03C40.2812 20.27 38.7133 21.334 37.1733 21.334C35.6472 21.334 34.0793 20.27 34.0793 18.03ZM32.0773 18.044C32.0773 21.236 34.4853 23.21 37.1733 23.21C39.8753 23.21 42.2833 21.236 42.2833 18.044C42.2833 14.838 39.8753 12.864 37.1733 12.864C34.4853 12.864 32.0773 14.838 32.0773 18.044ZM51.5642 23V21.152H47.1402V13.074H45.2082V23H51.5642ZM60.6482 23V21.152H56.2242V13.074H54.2922V23H60.6482ZM64.4621 18.03C64.4621 15.79 66.0301 14.726 67.5561 14.726C69.0961 14.726 70.6641 15.79 70.6641 18.03C70.6641 20.27 69.0961 21.334 67.5561 21.334C66.0301 21.334 64.4621 20.27 64.4621 18.03ZM62.4601 18.044C62.4601 21.236 64.8681 23.21 67.5561 23.21C70.2581 23.21 72.6661 21.236 72.6661 18.044C72.6661 14.838 70.2581 12.864 67.5561 12.864C64.8681 12.864 62.4601 14.838 62.4601 18.044ZM84.5729 19.934L82.3609 13.074H80.3589L78.1609 19.906L76.3409 13.074H74.2969L77.0549 23H79.0709L81.3389 15.93L83.6069 23H85.5949L88.3389 13.074H86.3649L84.5729 19.934Z"
                  fill="#FCFCFC"
                />
                <rect
                  className="follow-rect"
                  x="0.5"
                  y="0.5"
                  width="110"
                  height="35"
                  rx="17.5"
                  stroke="#FCFCFC"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Hero;
