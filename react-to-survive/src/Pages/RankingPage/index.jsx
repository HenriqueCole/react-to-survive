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

import Rank from "../../components/rank";

export default function WelcomePage() {
  const [isPlaying, toggle] = useAudio(song);

  return (
    <div className="WelcomePageContainer">
      <body>
        <div className="ContainerBackgroundImage">
          <img className="backgroundImage" src={backgroundImg} alt="" />
          <div className="containerTextScreen">
            <div className="containerWelcomeText">
              <h1 className="h1GameName">Ranking</h1>
            </div>
          </div>
          <div className="containerRank">
            <Rank />
          </div>
        </div>
      </body>
    </div>
  );
}
