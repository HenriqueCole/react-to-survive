import './styles.css'

import arrow from "../../assets/Weapons/arrow.png"
import { useEffect, useState } from 'react';

export default function NewArrow({ shooter, arrowSpeed }) {

    const [arrowTop, setArrowTop] = useState(180);
    const [isActive, setIsActive] = useState(true);

    

    useEffect(() => {

        const arrowThrowSpeed = setInterval(() => {
            setArrowTop(prevState => prevState + 1);
        }, arrowSpeed);

        if (arrowTop >= window.innerHeight - 56 && isActive) {
            alert("Você perdeu!");
        }

        return () => clearInterval(arrowThrowSpeed);

    }, [arrowTop, isActive])



    console.log("Player: " + window.playerPosition)
    console.log("Flecha Left: " + Math.ceil(shooter))


    return (
        isActive && <img className="arrow" src={arrow} style={{ left: Math.ceil(shooter), top: arrowTop }} onClick={() => setIsActive(false)} />
    )
}