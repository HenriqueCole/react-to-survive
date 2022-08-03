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

import enemie1StopLeft from "../../assets/Enemie1/enemie1-stopped-left.gif";
import enemie1StopRight from "../../assets/Enemie1/enemie1-stopped-right.gif";
import enemie1RunningLeft from "../../assets/Enemie1/enemie1-left.gif";
import enemie1RunningRight from "../../assets/Enemie1/enemie1-right.gif";

import enemie2StopLeft from "../../assets/Enemie1/enemie1-stopped-left.gif";
import enemie2StopRight from "../../assets/Enemie1/enemie1-stopped-right.gif";
import enemie2RunningLeft from "../../assets/Enemie1/enemie1-left.gif";
import enemie2RunningRight from "../../assets/Enemie1/enemie1-right.gif";

import enemie3StopLeft from "../../assets/Enemie1/enemie1-stopped-left.gif";
import enemie3StopRight from "../../assets/Enemie1/enemie1-stopped-right.gif";
import enemie3RunningLeft from "../../assets/Enemie1/enemie1-left.gif";
import enemie3RunningRight from "../../assets/Enemie1/enemie1-right.gif";

import enemie4StopLeft from "../../assets/Enemie1/enemie1-stopped-left.gif";
import enemie4StopRight from "../../assets/Enemie1/enemie1-stopped-right.gif";
import enemie4RunningLeft from "../../assets/Enemie1/enemie1-left.gif";
import enemie4RunningRight from "../../assets/Enemie1/enemie1-right.gif";

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

  const [player, setPlayer] = useState(playerStopRight);
  const [enemie1, setEnemie1] = useState(enemie1StopRight);
  const [posEnemie1, setPosEnemie1] = useState(100);
  const [enemie2, setEnemie2] = useState(enemie2StopRight);
  const [posEnemie2, setPosEnemie2] = useState(300);
  const [enemie3, setEnemie3] = useState(enemie3StopRight);
  const [posEnemie3, setPosEnemie3] = useState(600);
  const [enemie4, setEnemie4] = useState(enemie4StopRight);
  const [posEnemie4, setPosEnemie4] = useState(1200);
  const [score, setScore] = useState(0);
  const [goingBack1, setGoingBack1] = useState(false);
  const [goingBack2, setGoingBack2] = useState(true);
  const [goingBack3, setGoingBack3] = useState(false);
  const [goingBack4, setGoingBack4] = useState(true);
  const [dead, setDead] = useState(false);

  useEffect(() => {
    // CONTROLE DE IDA DO INIMIGO 1
    // INIMIGO 1
    if (posEnemie1 >= 0 && posEnemie1 <= window.innerWidth && !goingBack1) {
      setEnemie1(enemie1RunningRight);
      console.log(posEnemie1);
      const interval = setInterval(() => {
        setPosEnemie1((prevState) => prevState + 10);
      }, 60);
      if (posEnemie1 >= window.innerWidth - 120) {
        setGoingBack1(true);
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }
    // CONTROLE DE VOLTA DO INIMIGO 1
    if (posEnemie1 >= 0 && posEnemie1 <= window.innerWidth && goingBack1) {
      setEnemie1(enemie1RunningLeft);
      console.log(posEnemie1);
      const interval = setInterval(() => {
        setPosEnemie1((prevState) => prevState - 10);
      }, 60);
      if (posEnemie1 <= 0) {
        setGoingBack1(false);
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }
  }, [posEnemie1, goingBack1]);

  useEffect(() => {
    // CONTROLE DE IDA INIMIGO 2
    // INIMIGO 2
    if (posEnemie2 >= 0 && posEnemie2 <= window.innerWidth && !goingBack2) {
      setEnemie2(enemie2RunningRight);
      console.log(posEnemie2);
      const interval = setInterval(() => {
        setPosEnemie2((prevState) => prevState + 10);
      }, 75);

      if (posEnemie2 >= window.innerWidth - 120) {
        setGoingBack2(true);
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }

    //CONTROLE DE VOLTA DO INIMIGO 2
    if (posEnemie2 >= 0 && posEnemie2 <= window.innerWidth && goingBack2) {
      setEnemie2(enemie2RunningLeft);
      console.log(posEnemie2);
      const interval = setInterval(() => {
        setPosEnemie2((prevState) => prevState - 10);
      }, 75);
      if (posEnemie2 <= 0) {
        setGoingBack2(false);
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }
  }, [posEnemie2, goingBack2]);

  useEffect(() => {
    // CONTROLE DE IDA INIMIGO 3
    // INIMIGO 3
    if (posEnemie3 >= 0 && posEnemie3 <= window.innerWidth && !goingBack3) {
      setEnemie3(enemie3RunningRight);
      console.log(posEnemie3);
      const interval = setInterval(() => {
        setPosEnemie3((prevState) => prevState + 10);
      }, 89);
      if (posEnemie3 >= window.innerWidth - 120) {
        setGoingBack3(true);
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }

    // CONTROLE DE VOLTA DO INIMIGO 3
    if (posEnemie3 >= 0 && posEnemie3 <= window.innerWidth && goingBack3) {
      setEnemie3(enemie3RunningLeft);
      console.log(posEnemie3);
      const interval = setInterval(() => {
        setPosEnemie3((prevState) => prevState - 10);
      }, 89);
      if (posEnemie3 <= 0) {
        setGoingBack3(false);
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }
  }, [posEnemie3, goingBack3]);

  useEffect(() => {
    // CONTROLE DE IDA INIMIGO 4
    // INIMIGO 4
    if (posEnemie4 >= 0 && posEnemie4 <= window.innerWidth && !goingBack4) {
      setEnemie4(enemie4RunningRight);
      console.log(posEnemie4);
      const interval = setInterval(() => {
        setPosEnemie4((prevState) => prevState + 10);
      }, 101);
      if (posEnemie4 >= window.innerWidth - 120) {
        setGoingBack4(true);
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }

    // CONTROLE DE VOLTA DO INIMIGO 4
    if (posEnemie4 >= 0 && posEnemie4 <= window.innerWidth && goingBack4) {
      setEnemie4(enemie4RunningLeft);
      console.log(posEnemie4);
      const interval = setInterval(() => {
        setPosEnemie4((prevState) => prevState - 10);
      }, 101);
      if (posEnemie4 <= 0) {
        setGoingBack4(false);
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }
  }, [posEnemie4, goingBack4]);

  return (
    <div className="Scenary1PageContainer" onKeyDown={(e) => handleKeySide(e)}>
      <div className="ContainerBackgroundImage">
        <img className="backgroundImage" src={backgroundImg} alt="" />
        <div className="containerEnemies">
          <img
            className="enemie1"
            src={enemie1}
            style={{
              left: posEnemie1,
            }}
          />
          <img
            className="enemie2"
            src={enemie2}
            style={{
              left: posEnemie2,
            }}
          />
          <img
            id="player1"
            src={playerStyle}
            style={{ left: playerPosition }}
          />

          <img
            className="enemie3"
            src={enemie3}
            style={{
              left: posEnemie3,
            }}
          />
          
          <img
            className="enemie4"
            src={enemie4}
            style={{
              left: posEnemie4,
            }}
          />
        </div>
        <div className="containerPlayer">
          <img className="playerGif" src={player} alt="" />
        </div>
      </div>
    </div>
  );
}
