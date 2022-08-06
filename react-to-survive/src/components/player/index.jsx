import React, { useEffect, useMemo, useState } from 'react'

import './styles.css'

import playerStopLeft from "../../assets/Players/Player1-stopped-left.gif";
import playerStopRight from "../../assets/Players/Player1-stopped-right.gif";
import playerDead from "../../assets/Players/Player1-dead.gif";
import playerRunningLeft from "../../assets/Players/Player1-left.gif";
import playerRunningRight from "../../assets/Players/Player1-right.gif";

window.playerPosition = 40;

export default function Player() {
    //PLAYER
    const [playerStyle, setPlayerStyle] = useState(playerStopRight);
    const [playerPosition, setPlayerPosition] = useState(40);
    const [isStarted, setIsStarted] = useState(false);
    // const playerPositionMemo = useMemo(() => playerPosition, [playerPosition]);



    useEffect(() => {
        console.log("UseEffect", playerPosition)
        if (!isStarted) {
            document.addEventListener("keydown", handleKeyDown, true);
            document.addEventListener("keyup", handleKeyUp, true);
            setIsStarted(true);
        }

        window.playerPosition = playerPosition;
    }, [playerPosition]);





    const handleKeyDown = (e) => {
        console.log("Keydown", window.playerPosition);
        if (window.playerPosition >= 40 && window.playerPosition < window.innerWidth - 50) {
            if (e.key === "ArrowLeft") {
                setPlayerStyle(playerRunningLeft);
                setPlayerPosition(window.playerPosition - 8);
            }
            if (e.key === "ArrowRight") {
                setPlayerStyle(playerRunningRight);
                setPlayerPosition(window.playerPosition + 8);
            }
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

    return (
        <img
            id="player1"
            src={playerStyle}
            style={{ left: playerPosition }}
        />
    )
}
