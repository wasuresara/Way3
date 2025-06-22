import React from "react";
import s from "./Video.module.css";

const Video = () => {
  return (
    <div className={s.fullBox}>
      <img src="src/assets/r.gif" alt="berlingif" className={s.Giff} />
      <img src="src/assets/r.gif" alt="berlingif" className={s.Giff} />
      <img src="src/assets/r.gif" alt="berlingif" className={s.Giff} />
      <img src="src/assets/r.gif" alt="berlingif" className={s.Giff} />
      <img src="src/assets/r.gif" alt="berlingif" className={s.GiffMob} />
    </div>
  );
};

export default Video;
