import './styles.css'

import arrow from "../../assets/Weapons/arrow.png"
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewArrow({ shooter, arrowSpeed }) {

    const [arrowTop, setArrowTop] = useState(180);
    const [isActive, setIsActive] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {

        const arrowThrowSpeed = setInterval(() => {
            setArrowTop(prevState => prevState + 1);
        }, arrowSpeed);

        if (arrowTop >= window.innerHeight - 56 && isActive) {

            const rank = JSON.parse(localStorage.getItem("usersRanking"));
            rank.push({name: localStorage.getItem("username"), time: window.timer})
            localStorage.setItem("usersRanking", JSON.stringify(rank));
            alert("Você perdeu!");
            navigate("/ranking");
        }

        return () => clearInterval(arrowThrowSpeed);

    }, [arrowTop, isActive])


    return (
        isActive && <img className="arrow" src={arrow} style={{ left: Math.ceil(shooter), top: arrowTop }} onClick={() => setIsActive(false)} />
    )
}