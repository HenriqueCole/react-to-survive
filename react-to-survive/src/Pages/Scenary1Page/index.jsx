import backgroundImg from "../../assets/Scenaries/scenary1.gif";

import { Link } from "react-router-dom";

import useSound from "use-sound";
import { useState } from "react";

import { motion } from "framer-motion";

import song from "../../music/game-music.mp3";

import playerStopLeft from "../../assets/Players/Player1-stopped-left.gif";
import playerStopRight from "../../assets/Players/Player1-stopped-right.gif";

import playerDead from "../../assets/Players/Player1-dead.gif";

import playerRunningLeft from "../../assets/Players/Player1-left.gif";
import playerRunningRight from "../../assets/Players/Player1-right.gif";

import "./styles.css";
export default function Scenary1Page() {
  const [player, setPlayer] = useState(playerStopRight);

  return (
    <div className="Scenary1PageContainer"
    onKeyDown={(e) => handleKeySide(e)}
    
    >
      <div className="ContainerBackgroundImage">
        <img className="backgroundImage" src={backgroundImg} alt="" />
        <div className="containerPlayer">
          <img
            className="playerGif"
            src={player}
            alt=""
          />
        </div>
      </div>
    </div>
  );

  function handleKeySide(e) {
    console.log("teste");
    
    if (e.key === "ArrowLeft") {
      setPlayer(playerRunningLeft);


    }
    if (e.key === "ArrowRight") {
      setPlayer(playerRunningRight);
    }
  }
}
