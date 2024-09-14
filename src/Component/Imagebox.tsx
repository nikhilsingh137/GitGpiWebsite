import React, { useEffect } from "react";
import { fetchImagebox } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Style from "./imagebox.module.scss";
import WalfredDetail from "./WalfredDetail";

const Imagebox = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchImagebox());
  }, [dispatch]);
  return (
    <div className={Style.imagebox}>
      {data.imageData &&
        data.imageData.map((item) => {
          return (
            <div className={Style.image}>
              <OwlCarousel
                className="owl-theme"
                autoplay
                items={1}
                dots={false}
              >
                {item.image &&
                  item.image.map((item) => {
                    return (
                      <span>
                        <img src={item.img} alt="" />
                      </span>
                    );
                  })}
              </OwlCarousel>
            </div>
          );
        })}
      <div className={Style.walfred}>
        <WalfredDetail />
      </div>
    </div>
  );
};

export default Imagebox;
