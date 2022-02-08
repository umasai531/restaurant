import React, { useState, useRef } from "react";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import "./Intro.css";
import { meal } from "../../constants";
const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const vidRef = useRef();
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="app__video">
      <video src={meal} type="video/mp4" Loop controls={false} ref={vidRef} muted />
      <div className="app__video_overlay flex__center">
        <div
          className="app__video_overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsFillPauseFill color="#fff" font-size={30} />
          ) : (
            <BsFillPlayFill color="#fff" font-size={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
