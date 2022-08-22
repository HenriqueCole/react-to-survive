import backgroundImg from "../../assets/Scenaries/scenary1.gif";
import "./styles.css";
import song from "../../music/game-music.mp3";
import deadSong from "../../music/dead.mp3";
import throwArrow from "../../music/throw-arrow.mp3";

import Enemy from "../../components/enemy";
import Player from "../../components/player";
import Timer from "../../components/timer";
import { useEffect } from "react";

export default function Scenary1Page() {

  useEffect(() => {
    document.querySelector("img").ondragstart = () => (false);
  },[])

  return (
    <div className="Scenary1PageContainer" onKeyDown={(e) => handleKeySide(e)}>
      <div className="ContainerBackgroundImage">
        <img className="backgroundImage" src={backgroundImg} alt="" />
        <Timer />
        <div className="containerEnemies">
          <Enemy
            initalPos={window.innerWidth * 0.1}
            propEnemySpeed={5}
            arrowFrequency={3000}
            arrowSpeed={10}
            isStartingForward={true}
          />
          {/* <Enemy initalPos={window.innerWidth*0.3} propEnemySpeed={4} arrowFrequency={900} arrowSpeed={6} isStartingForward={false}/>
          <Enemy initalPos={window.innerWidth*0.4} propEnemySpeed={6} arrowFrequency={950} arrowSpeed={6} isStartingForward={true}/>
        <Enemy initalPos={window.innerWidth*0.7} propEnemySpeed={7} arrowFrequency={1100} arrowSpeed={5} isStartingForward={false}/> */}
          <Player />
        </div>
      </div>
    </div>
  );
}
