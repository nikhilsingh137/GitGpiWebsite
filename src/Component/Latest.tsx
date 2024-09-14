import React, { useEffect } from "react";
import Style from "./latest.module.scss";
import { fetchLatest } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Latest = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchLatest());
  }, [dispatch]);
  return (
    <div className={Style.latest}>
      <div className={Style.wrapper}>
        {data.latestData &&
          data.latestData.map((item) => {
            return (
              <>
                <div className={Style.header}>
                  <h2>{item.title}</h2>
                </div>
                <div className={Style.content}>
                  <OwlCarousel
                    items={4}
                    autoplay
                    loop
                    className={Style.owlTheme}
                    margin={30}
                    nav={false}
                    dots={false}
                    responsive={{
                      0: {
                        items: 1,
                      },
                      768: {
                        items: 2,
                      },
                      500: {
                        items: 2,
                      },
                      992: {
                        items: 4,
                      },
                    }}
                  >
                    {item.data &&
                      item.data.map((item) => {
                        return (
                          <a href={item.url}>
                            <span>
                              <img src={item.img} alt="" />
                            </span>
                            <div className={Style.text}>
                              <h2>{item.slug}</h2>
                              <h3>{item.text}</h3>
                              <h4>{item.date}</h4>
                            </div>
                          </a>
                        );
                      })}
                  </OwlCarousel>
                </div>

                <div className={Style.button}>
                  <a href={item.url}>{item.button}</a>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Latest;
