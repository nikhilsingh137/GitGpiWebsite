import React, { useState } from "react";
import Style from "./video.module.scss";
import VDImg from "../img/video-image.webp";
import VideoPlayer from "./VideoPlayer";

const Video = () => {
  const [video, setVideo] = useState(false);

  const handleVideo = () => {
    setVideo(true);
  };

  const handleClose = () => {
    setVideo(false);
  };
  return (
    <div className={Style.video}>
      {video && (
        <>
          <VideoPlayer handleClose={handleClose} />
        </>
      )}
      <div className={Style.wrapper}>
        <div className={Style.header}>
          <h2>Helping London thrive</h2>
        </div>
        <div className={Style.divide}>
          <a href="#/#" onClick={handleVideo}>
            <img src={VDImg} alt="" />
            <div className={Style.icon}>
              <i className="fa-solid fa-play"></i>
            </div>
            <div className={Style.data}>
              <h2>Our evolving sustainability approach</h2>
              <h3>15 May 2023</h3>
            </div>
          </a>
          <a href="/#/">
            <span>
              <img
                src="https://www.gpe.co.uk/media/pbifrjjl/50-finsbury-square-exterior.jpg?width=500&height=500&v=1d98343cb6658b0"
                alt=""
              />
            </span>
            <div className={Style.text}>
              <h2>Our Sustainability Statement of Intent</h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Video;
