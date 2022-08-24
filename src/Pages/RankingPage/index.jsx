import backgroundImg from "../../assets/Scenaries/scenary1.gif";

import song from "../../music/game-music.mp3";

import "./styles.css";

import Rank from "../../components/rank";
import { useNavigate } from "react-router-dom";

import cursorImg from "../../assets/mainCharacter.png"
import { useEffect } from "react";
export default function WelcomePage() {

  const moveCursor = (e) => {
    document.querySelector(".cursorImg").style.top = `${e.clientY-45}px`;
    document.querySelector(".cursorImg").style.left = `${e.clientX-55}px`;
  }

  useEffect(() => {
    document.addEventListener("mousemove", moveCursor);
  },[])

  const navigate = useNavigate();

  return (
    <div className="WelcomePageContainer">
    <img className="cursorImg" src={cursorImg} />
      <body>
        <div className="ContainerBackgroundImage">
          <img className="backgroundImage" src={backgroundImg} alt="" />
          <div className="containerTextScreenRank">
            <button className="backButton" onClick={() => navigate("/welcome")}>
              Voltar
            </button>
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
