import backgroundImg from "../../assets/Scenaries/scenary1.gif";

import toast, { Toaster } from "react-hot-toast";

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import song from "../../music/game-music.mp3";
import cursorImg from "../../assets/mainCharacter.png"

import "./styles.css";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    if(playing){
      audio.play();
    } else {
      audio.pause();
    }
    
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};


function check() {
  if (document.querySelector(".usernameInput").value == "") {
    notify();
  } else {
    window.location.href = "/phases";
  }
  localStorage.setItem(
    "username",
    document.querySelector(".usernameInput").value
  );
}

const notify = () => toast.error("Please enter an username");

export default function WelcomePage() {


  const moveCursor = (e) => {
    document.querySelector(".cursorImg").style.top = `${e.clientY-45}px`;
    document.querySelector(".cursorImg").style.left = `${e.clientX-55}px`;
  }

  useEffect(() => {
    document.addEventListener("mousemove", moveCursor);
  },[])

  const [isPlaying, toggle] = useAudio(song);

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("usersRanking"))) {
      localStorage.setItem("usersRanking", JSON.stringify([]));
    }
    document.querySelector("img").ondragstart = () => false;
  }, []);

  function closeTab() {
    window.open("http://google.com", "_self");
    window.close();
  }


  return (
    <div className="WelcomePageContainer">
      <body>

        <img className="cursorImg" src={cursorImg} />
        <div className="ContainerBackgroundImage">
          <Toaster
            toastOptions={{
              className: "",
              style: {
                border: "1px solid #713200",
                padding: "16px",
                color: "#713200",
              },
            }}
          />
          <img className="backgroundImage" src={backgroundImg} alt="" />
          <div className="containerTextScreen">
            <div className="containerWelcomeText">
              <h1 className="h1WelcomeTo">Welcome to</h1>
              <h1 className="h1GameName">React To Survive</h1>
            </div>
            <div className="containerInputUsername">
              <input
                className="usernameInput"
                type="text"
                placeholder="Insert you username"
              />
            </div>
            <div className="containerActionsText">
              <a onClick={check}>Play!</a>
              <Link to="/ranking">Ranking</Link>
              <button className="exit" onClick={closeTab}>
                Leave
              </button>
              <button className="musicButton" onClick={toggle}>
                {isPlaying ? "Music on" : "Music off"}
              </button>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
