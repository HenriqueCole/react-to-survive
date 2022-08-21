import backgroundImg from "../../assets/Scenaries/scenary1.gif";

import { Link } from "react-router-dom";

import useSound from "use-sound";
import { useState, useEffect } from "react";

import song from "../../music/game-music.mp3";

import "./styles.css";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

export default function WelcomePage() {
  const [isPlaying, toggle] = useAudio(song);

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
              <Link to="/phase-one">Play!</Link>
              <Link to="/ranking">Ranking</Link>
              <Link to="#">Leave</Link>
              <button onClick={toggle}>
                {isPlaying ? "Music on" : "Music off"}
              </button>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
