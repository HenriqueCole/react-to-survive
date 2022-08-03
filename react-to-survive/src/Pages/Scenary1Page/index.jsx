import backgroundImg from "../../assets/Scenaries/scenary1.gif";

import { Link } from "react-router-dom";

import useSound from "use-sound";
import { useState, useEffect } from "react";

import { motion } from "framer-motion";

import song from "../../music/game-music.mp3";

import playerStopLeft from "../../assets/Players/Player1-stopped-left.gif";
import playerStopRight from "../../assets/Players/Player1-stopped-right.gif";

import playerDead from "../../assets/Players/Player1-dead.gif";

import playerRunningLeft from "../../assets/Players/Player1-left.gif";
import playerRunningRight from "../../assets/Players/Player1-right.gif";

import "./styles.css";

export default function Scenary1Page() {

  const [playerStyle, setPlayerStyle] = useState(playerStopRight);
  const [playerPosition, setPlayerPosition] = useState(10);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, true);
    document.addEventListener("keyup", handleKeyUp, true);
  }, []);

  
  const handleKeyDown = e => {
    
    if (e.key === "ArrowLeft") {
      setPlayerStyle(playerRunningLeft);
      setPlayerPosition(prevState => (
        prevState - 8
      ));
    }
    if (e.key === "ArrowRight") {
      setPlayerStyle(playerRunningRight);
      setPlayerPosition(prevState => (
        prevState + 8
      ));
    }
  };


  const handleKeyUp = e => {
    if (e.key === "ArrowLeft") {
      setPlayerStyle(playerStopLeft);
    }
    if (e.key === "ArrowRight") {
      setPlayerStyle(playerStopRight);
    }
  }

  return (
    <div className="Scenary1PageContainer" >
      <div className="ContainerBackgroundImage">
        <img className="backgroundImage" src={backgroundImg} alt="" />
        <div className="containerPlayer">
          <img
            id="player1"
            src={playerStyle}
            style={{ left: playerPosition }}
          />
        </div>
      </div>
    </div>
  );

}
