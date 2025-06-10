import React from "react";
import s from "./WVideo.module.css";
import welcomeGif from "/src/assets/Images/MyMovie-ezgif.com-optimize.gif"; // Assuming your GIF is named welcome.gif and is in src/assets

function WVideo() {
  return (
    <div className={s.videoContainer}>
      <img
        src={welcomeGif}
        alt="Welcome animation"
        className={s.responsiveGif}
      />
    </div>
  );
}

export default WVideo;
