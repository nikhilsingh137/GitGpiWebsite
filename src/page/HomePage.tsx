import React from "react";
import Imagebox from "../Component/Imagebox";
import Power from "../Component/Power";
import Location from "../Component/Location";
import Feature from "../Component/Feature";
import Offer from "../Component/Offer";
import Video from "../Component/Video";
import Brief from "../Component/Brief";
import Latest from "../Component/Latest";
import InstagramData from "../Component/InstagramData";

const HomePage = () => {
  return (
    <>
      <Imagebox />
      <Power />
      <Location />
      <Feature />
      <Offer />
      <Video />
      <Brief />
      <Latest />
      <InstagramData />
    </>
  );
};

export default HomePage;
