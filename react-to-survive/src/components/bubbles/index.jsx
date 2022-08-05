import { useEffect, useState } from "react";
import bubbles from "../../assets/details/bubbles.gif";

export default function Bubbles() {
  const [isBubble, setIsBubble] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setIsBubble(false);
    }, 4800);
    setInterval(() => {
      setIsBubble(true);
    }, 4000);
  }, []);

  return <>{isBubble && <img className="bubblesGif" src={bubbles} />}</>;
}
