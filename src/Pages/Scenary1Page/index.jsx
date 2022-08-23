import backgroundImg from "../../assets/Scenaries/scenary1.gif";
import backgroundImg2 from "../../assets/Scenaries/scenary2.png";
import backgroundImg3 from "../../assets/Scenaries/scenary3.png";
import "./styles.css";

import Enemy from "../../components/enemy";
import Timer from "../../components/timer";
import { useEffect, useState } from "react";

export default function Scenary1Page() {

  useEffect(() => {
    document.querySelector("img").ondragstart = () => (false);
  }, [])

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const increaseTimer = setInterval(() => {
      setTimer(timer + 1);
    }, 1000)

    return () => clearInterval(increaseTimer);
  }, [timer])

  return (
    <div className="Scenary1PageContainer" onKeyDown={(e) => handleKeySide(e)}>
      <div className="ContainerBackgroundImage">
        <img className="backgroundImage" src={(timer >= 30) ? (timer >= 60) ? backgroundImg3 : backgroundImg2 : backgroundImg} alt="" />
        <Timer />
        <div className="containerEnemies">
          <Enemy
            initalPos={window.innerWidth * 0.1}
            propEnemySpeed={5}
            arrowFrequency={3000}
            arrowSpeed={10}
            isStartingForward={true}
          />
          {timer >= 10 &&
            <Enemy
              initalPos={window.innerWidth * 0.3}
              propEnemySpeed={6}
              arrowFrequency={2000}
              arrowSpeed={8}
              isStartingForward={false}
            />
          }
          {timer >= 20 &&
            <Enemy
              initalPos={window.innerWidth * 0.6}
              propEnemySpeed={4}
              arrowFrequency={6000}
              arrowSpeed={4}
              isStartingForward={true}
            />
          }
          {timer >= 30 &&
            <Enemy
              initalPos={window.innerWidth * 0.7}
              propEnemySpeed={5}
              arrowFrequency={3000}
              arrowSpeed={10}
              isStartingForward={false}
            />
          }
          {timer >= 40 &&
            <Enemy
              initalPos={window.innerWidth * 0.9}
              propEnemySpeed={6}
              arrowFrequency={4000}
              arrowSpeed={6}
              isStartingForward={true}
            />
          }
        </div>
      </div>
    </div>
  );
}
