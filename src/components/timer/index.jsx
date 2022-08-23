import { useState, useEffect } from "react";

import "./styles.css";

export default function Timer() {
  const [timer, setTimer] = useState("00:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((seconds) => {
        let time = seconds.split(":");
        let hour = parseInt(time[0]);
        let minute = parseInt(time[1]);
        let second = parseInt(time[2]);
        second++;
        if (second === 60) {
          minute++;
          second = 0;
        }
        if (minute === 60) {
          hour++;
          minute = 0;
        }
        const newTime = (
          (hour < 10 ? "0" + hour : hour) +
          ":" +
          (minute < 10 ? "0" + minute : minute) +
          ":" +
          (second < 10 ? "0" + second : second)
          );
          window.timer = newTime;
        return newTime
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timerContainer">
      <h1 className="timer">{timer}</h1>
    </div>
  );
}
