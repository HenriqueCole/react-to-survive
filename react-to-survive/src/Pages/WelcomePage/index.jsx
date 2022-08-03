import backgroundImg from "../../assets/Scenaries/scenary1.gif";

import { Link } from "react-router-dom";

import useSound from "use-sound";
import { useState } from "react";

import song from "../../music/game-music.mp3";

import "./styles.css";

export default function WelcomePage() {
  const [play] = useSound(song);
  const [isPlaying, setIsPlaying] = useState(false);

  function handleSound() {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      play();
    }
  }

  return (
    <div className="WelcomePageContainer">
      <body>
        <div className="ContainerBackgroundImage">
          <img className="backgroundImage" src={backgroundImg} alt="" />
          <div className="containerTextScreen">
            <div className="containerWelcomeText">
              <h1 className="h1WelcomeTo">Welcome to</h1>
              <h1 className="h1GameName">React To Survive</h1>
            </div>
            <div className="containerActionsText">
              <Link to="#">Play!</Link>
              <Link to="#">Ranking</Link>
              <Link to="#">Leave</Link>
              <button
                onClick={() => {
                  handleSound();
                }}
              >
                {isPlaying ? "Music on" : "Music off"}
              </button>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
