import './styles.css'

import arrow from "../../assets/Weapons/arrow.png"
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";

export default function NewArrow({ shooter, arrowSpeed, overGame, client}) {

    const [arrowTop, setArrowTop] = useState(180);
    const [isActive, setIsActive] = useState(true);

    const navigate = useNavigate();

    const explodeArrow = () => {
        // const explosion = document.createElement("p");
        // explosion.innerText = "Explodiu!!";
        // explosion.style.left = shooter;
        // explosion.style.position = "absolute";
        // explosion.style.zIndex = "2";
        // explosion.style.color = "#ffff";

        // document.body.appendChild(explosion);
        setIsActive(false);
    }



    function notifyLooser() {
        if (isActive) {
          toast.error("You loose");
          setIsActive(false);
        }
        setTimeout(() => {
          navigate("/ranking");
        }, 2000);
      }


    useEffect(() => {
        const arrowThrowSpeed = setInterval(() => {
            setArrowTop(prevState => prevState + 1);
        }, arrowSpeed);

        if (arrowTop >= window.innerHeight - 56 && isActive) {
            const rank = JSON.parse(localStorage.getItem("usersRanking"));
            rank.push({ name: localStorage.getItem("username"), time: window.timer })
            localStorage.setItem("usersRanking", JSON.stringify(rank));
            overGame(true);
            // alert("Você perdeu!");
            notifyLooser();
        }

        return () => clearInterval(arrowThrowSpeed);

    }, [arrowTop, isActive])


    return (
        <>
            <Toaster/>
            {isActive && <img className="arrow" src={arrow} style={{ left: Math.ceil(shooter), top: arrowTop }} onClick={() => explodeArrow()} />}
        </>
    )
}