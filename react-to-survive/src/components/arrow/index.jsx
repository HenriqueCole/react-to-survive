import './styles.css'

import arrow from "../../assets/Weapons/arrow.png"
import { useState } from 'react';

export default function NewArrow({shooter}) {

    const [arrowTop, setArrowTop] = useState(shooter);

    useEffect(() => {
        const arrowThrowSpeed = setInterval(() => {
            setArrowTop(prevState => prevState - 1);
        }, 100);

        return () => clearInterval(arrowThrowSpeed);
    }, [])


    return (
        <img className="arrow" src={arrow} style={{ left: shooter, top: arrowTop }} />
    )
}