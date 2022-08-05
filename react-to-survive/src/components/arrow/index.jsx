import './styles.css'

import arrow from "../../assets/Weapons/arrow.png"
import { useEffect, useState } from 'react';

export default function NewArrow({shooter}) {

    const [arrowTop, setArrowTop] = useState(180);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        const arrowThrowSpeed = setInterval(() => {
            setArrowTop(prevState => prevState + 1);
        }, 5);

        // console.log(arrowTop);


        if(arrowTop >= 736){
            clearInterval(arrowThrowSpeed);
            setTimeout(() => {
                setIsActive(false);
            }, 2000);
        }

        return () => clearInterval(arrowThrowSpeed);
    }, [arrowTop, isActive])


    return (
        isActive && <img className="arrow" src={arrow} style={{ left: shooter, top: arrowTop }} />
    )
}