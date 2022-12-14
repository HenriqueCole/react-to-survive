import backgroundImg from "../../assets/Scenaries/scenary1.gif";
import backgroundImg2 from "../../assets/Scenaries/scenary2.png";
import backgroundImg3 from "../../assets/Scenaries/scenary3.png";
import "./styles.css";

import url from "../../music/game-music.mp3"
import Enemy from "../../components/enemy";
import Timer from "../../components/timer";
import { useEffect, useState } from "react";

import cursorImg from "../../assets/mainCharacter.png"

export default function Scenary1Page() {
  const [timer, setTimer] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [clientY, setClientY] = useState(0);
  const [clientX, setClientX] = useState(0);

  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);


  useEffect(() => {
    document.querySelector("img").ondragstart = () => (false);
  }, [])

  useEffect(() => {
    if(gameOver == true){
      setPlaying(false);
    }
  },[gameOver])

  useEffect(() => {
    const increaseTimer = setInterval(() => {
      setTimer(timer + 1);
    }, 1000)

    return () => clearInterval(increaseTimer);
  }, [timer])

  const moveCursor = (e) => {
    document.querySelector(".cursorImg").style.top = `${e.clientY - 45}px`;
    document.querySelector(".cursorImg").style.left = `${e.clientX - 55}px`;
    setClientX(e.clientX - 55);
    setClientY(e.clientY - 45);
  }

  useEffect(() => {
    document.addEventListener("mousemove", moveCursor);
  }, [])

  return (
    <div className="Scenary1PageContainer" onKeyDown={(e) => handleKeySide(e)}>
      <img className="cursorImg" src={cursorImg} />
      <div className="ContainerBackgroundImage">
        <img className="backgroundImage" src={(timer >= 30) ? (timer >= 60) ? backgroundImg3 : backgroundImg2 : backgroundImg} alt="" />
        <Timer />
        <div className="containerEnemies">
          <Enemy
            initalPos={window.innerWidth * 0.1}
            propEnemySpeed={5}
            arrowFrequency={1000}
            arrowSpeed={10}
            isStartingForward={true}
            timer={timer}
            gameOver={gameOver}
            setGameOver={setGameOver}
            // client={{ clientX, clientY }}
          />
          {timer >= 10 &&
            <Enemy
              initalPos={window.innerWidth * 0.3}
              propEnemySpeed={3}
              arrowFrequency={2000}
              arrowSpeed={5}
              isStartingForward={false}
              timer={timer}
              gameOver={gameOver}
              setGameOver={setGameOver}
              // client={{ clientX, clientY }}
            />
          }
          {timer >= 20 &&
            <Enemy
              initalPos={window.innerWidth * 0.6}
              propEnemySpeed={4}
              arrowFrequency={2000}
              arrowSpeed={4}
              isStartingForward={true}
              timer={timer}
              gameOver={gameOver}
              setGameOver={setGameOver}
            />
          }
          {timer >= 30 &&
            <Enemy
              initalPos={window.innerWidth * 0.7}
              propEnemySpeed={5}
              arrowFrequency={3000}
              arrowSpeed={7}
              isStartingForward={false}
              timer={timer}
              gameOver={gameOver}
              setGameOver={setGameOver}
            />
          }
          {timer >= 40 &&
            <Enemy
              initalPos={window.innerWidth * 0.9}
              propEnemySpeed={6}
              arrowFrequency={4000}
              arrowSpeed={6}
              isStartingForward={true}
              timer={timer}
              gameOver={gameOver}
              setGameOver={setGameOver}
            />
          }
        </div>
      </div>
    </div>
  );
}
