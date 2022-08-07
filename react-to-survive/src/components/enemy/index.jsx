import React, { useEffect, useState } from 'react'

import './styles.css'

import NewArrow from '../arrow';

import enemie1StopRight from "../../assets/Enemie1/enemie1-stopped-right.gif";
import enemie1RunningLeft from "../../assets/Enemie1/enemie1-left.gif";
import enemie1RunningRight from "../../assets/Enemie1/enemie1-right.gif";

export default function Enemy({ initalPos, propEnemySpeed, arrowFrequency, arrowSpeed, isStartingForward }) {

  const [enemy, setEnemy] = useState(enemie1StopRight);
  const [enemyPosition, setEnemyPosition] = useState(initalPos);
  const [enemySpeed, setEnemySpeed] = useState(propEnemySpeed);

  const [arrowsList, setArrowsList] = useState([]);
  const [arrowCount, setArrowCount] = useState(0);
  const [goingForward, setGoingForward] = useState(isStartingForward);

  useEffect(() => {
    // CONTROLE DE IDA DO INIMIGO 1
    // INIMIGO 1

    if (goingForward) {
      setEnemy(enemie1RunningRight);
      const interval = setInterval(() => {
        setEnemyPosition((prevState) => prevState + 1);
      }, enemySpeed);
      if (enemyPosition >= window.innerWidth - 120) {
        setGoingForward(!goingForward);
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }
    // CONTROLE DE VOLTA DO INIMIGO 1
    if (!goingForward) {

      setEnemy(enemie1RunningLeft);

      const interval = setInterval(() => {
        setEnemyPosition((prevState) => prevState - 1);
      }, enemySpeed);

      if (enemyPosition <= 50) {
        setGoingForward(!goingForward);
        clearInterval(interval);
      }

      return () => clearInterval(interval);
    }

  }, [enemyPosition, goingForward]);


  // PARA USAR COMO UMA EXECUÇÃO DAS FLECHAS ---------------------------------

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
      setIsThrow(true);
    }, arrowFrequency)

    if (isThrow === false) return () => clearInterval(interval);
    setArrowsList((prevState) => [...prevState, <NewArrow shooter={enemyPosition + 25} arrowSpeed={arrowSpeed} />]);
    setIsThrow(false);

    return () => clearInterval(interval);

  }, [isThrow])



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
