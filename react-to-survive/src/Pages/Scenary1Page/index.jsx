import backgroundImg from "../../assets/Scenaries/scenary1.gif";

import { Link } from "react-router-dom";

import useSound from "use-sound";
import { useState } from "react";

import { motion } from "framer-motion";

import song from "../../music/game-music.mp3";

export default function Scenary1Page() {
  return (
    <div className="Scenary1PageContainer">
      <div className="ContainerBackgroundImage">
        <img className="backgroundImage" src={backgroundImg} alt="" />
      </div>
    </div>
  );
}
