import React from "react";
import Style from "./videoplayer.module.scss";

interface IType {
  handleClose: any;
}

const VideoPlayer: React.FC<IType> = ({ handleClose }) => {
  return (
    <div className={Style.videoplayer}>
      <div className={Style.wrapper}>
        <div className={Style.video}>
          <video controls>
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" />
          </video>
          <div className={Style.icon} onClick={handleClose}>
            X
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
