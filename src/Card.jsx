import React from "react";
import { ReactComponent as PlayRound } from "./playround.svg";
import { useState } from "react";

const Card = ({ position, img, height, title, body }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={{ top: position.top, left: position.left }}
      className="cardsWrap"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ height: height }} className="card">
        <div className="cardImage">
          <img src={img} alt="card.png" />
          <PlayRound
            style={{
                transform: `translateY(${isHovered ? 0 : "10%"})`,
                opacity: isHovered ? 1 : 0,
                transition: "all 0.3s",
            }}
          />
        </div>
        <div className="cardText">
          <h3 style={{ "font-weight": "bold", "margin-bottom": "3px" }}>
            {title}
          </h3>
          <p style={{ "margin-top": "15px", color: "#A7A7A7" }}>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
