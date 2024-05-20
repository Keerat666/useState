import React, { useState, useRef } from "react";
import "./index.css";
import switchClick from "../../audio/click.mp3";

function Smart() {
  const [isLightOn, setIsLightOn] = useState(false); // State variable
  const audioRef = useRef(null); // Reference to the audio element

  const toggleLight = () => {
    setIsLightOn(!isLightOn); // Toggle state on click
    audioRef.current.play().catch((err) => {
      console.error("Audio playback error:", err);
    });
  };

  return (
    <div className="root-smart">
      <div className={isLightOn ? "smart on" : "smart"}>
        <div className="light">
          <div className="wire"></div>
          <div className="bulb">
            {" "}
            <span></span>
            <span></span>
          </div>

          <div className="switch" onClick={toggleLight}>
            {" "}
            <div className="btn"></div>
          </div>
          <audio ref={audioRef} src={switchClick} type="audio/mpeg" />
        </div>
      </div>
    </div>
  );
}

export default Smart;
