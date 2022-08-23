import backgroundImg from "../../assets/Scenaries/scenary1.gif";

import song from "../../music/game-music.mp3";

import "./styles.css";

import Rank from "../../components/rank";
import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  const navigate = useNavigate();
  return (
    <div className="WelcomePageContainer">
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
