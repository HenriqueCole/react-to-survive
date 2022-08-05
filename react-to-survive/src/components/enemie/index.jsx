import React, { useEffect, useState } from 'react'

import './styles.css'

import NewArrow from '../arrow';

import enemie1StopRight from "../../assets/Enemie1/enemie1-stopped-right.gif";
import enemie1RunningLeft from "../../assets/Enemie1/enemie1-left.gif";
import enemie1RunningRight from "../../assets/Enemie1/enemie1-right.gif";

export default function Enemie({initalPos, propEnemySpeed}) {
    
    const [enemy, setEnemy] = useState(enemie1StopRight);
    const [enemyPosition, setEnemyPosition] = useState(initalPos);
    const [enemySpeed, setEnemySpeed] = useState(propEnemySpeed);
    const [arrowsList, setArrowsList] = useState([]);
    const [goingBack, setGoingBack] = useState(false);

  useEffect(() => {
    // CONTROLE DE IDA DO INIMIGO 1
    // INIMIGO 1

    if (enemyPosition >= 0 && enemyPosition <= window.innerWidth && !goingBack) {
      setEnemy(enemie1RunningRight);
      const interval = setInterval(() => {
        setEnemyPosition((prevState) => prevState + 10);
      }, enemySpeed);
      if (enemyPosition >= window.innerWidth - 120) {
        setGoingBack(true);
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }
    // CONTROLE DE VOLTA DO INIMIGO 1
    if (enemyPosition >= 0 && enemyPosition <= window.innerWidth && goingBack) {

      setEnemy(enemie1RunningLeft);

      const interval = setInterval(() => {
        setEnemyPosition((prevState) => prevState - 10);
      }, enemySpeed);

      if (enemyPosition <= 0) {
        setGoingBack(false);
        clearInterval(interval);
      }

      return () => clearInterval(interval);
    }

  }, [enemyPosition, goingBack]);
  

  // PARA USAR COMO UMA EXECUÇÃO DAS FLECHAS
  // const [isThrow, setIsThrow] = useState(true);
  
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIsThrow(!isThrow);
  //   },1000)  

  //   return () => clearInterval(interval);
  // },[isThrow])
  

  // useEffect(() => {
  //   if(isThrow){
  //     console.log("teste");
  //     setArrowsList(prevState => [...prevState, <NewArrow shooter={enemyPosition}/>]);
  //   }
  // },[isThrow && enemyPosition])


  const [isThrow, setIsThrow] = useState(false);
  

  useEffect(() => {

    const interval = setInterval(() => {
      setIsThrow(!isThrow);
    },1000)  

    if(!isThrow) return () => clearInterval(interval);

    console.log("teste");
    setArrowsList(prevState => [...prevState, <NewArrow shooter={enemyPosition}/>]);
    setIsThrow(!isThrow);
    
    return () => clearInterval(interval);

  },[isThrow])



  return (
    <>
    <img
        className="enemie1"
        src={enemy}
        style={{
            left: enemyPosition,
        }}
    />
     {arrowsList.map(e => (e))}
    </>
  )
}
