import React from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./Player.css";
import * as A from "./albums.json";
import { forwardRef } from "react";
import { ReactComponent as PlayRound } from "/Users/odi/Documents/Portfolio/portfolio/src/SVGs/playround.svg";
import Card from "/Users/odi/Documents/Portfolio/portfolio/src/Card/Card";

const Player = forwardRef((props, ref) => {
  const { refCover } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [index, setIndex] = useState(null);
  const [token, setToken] = useState(null);
  const [track, setTrack] = useState(null);
  const [cover, setCover] = useState(null);
  const [album, setAlbum] = useState(null);
  const [url, setURL] = useState(null);
  const client_id = "3bc6953e38ff4953b87b65daa2e26075";
  const client_secret = "fa2adee73b3947a4908411da82a5cc18";

  useEffect(() => {
    console.log("len" + A.albums.length);
    const I = Math.floor(Math.random() * (A.albums.length + 1));
    const U = A.albums[I].url;
    setIndex(I);
    setURL(U);
    const authOptions = {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          new Buffer(client_id + ":" + client_secret).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    };

    fetch("https://accounts.spotify.com/api/token", authOptions)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error("Failed to authenticate");
      })
      .then((data) => {
        setToken(data.access_token);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (!token) {
      return;
    }

    const getRandomAlbum = async (albumID) => {
      const response = await fetch(
        `https://api.spotify.com/v1/albums/${albumID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);

      const randomIndex = Math.floor(
        Math.random() * (data.tracks.items.length - 1 - 0) + 0
      );
      setTrack(data.tracks.items[randomIndex].name);
      setCover(data.images[0].url);
      setAlbum(data.name);
    };

    getRandomAlbum(A.albums[index].id);
  }, [token]);

  return (
    <div className="player-container">
      <div ref={refCover} className="player">
        <h2>The current rotation</h2>

        <div>
          {" "}
          <div>
            {track} - {album}
          </div>
          <a href={url} target="_blank">
            <Card
              position={{ left: "5rem", top: "11rem" }}
              img={cover}
              height={"300px"}
              title={album}
            />
          </a>
        </div>
      </div>
    </div>
  );
});

export default Player;
