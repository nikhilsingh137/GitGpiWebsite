import React, { useEffect } from "react";
import Style from "./feature.module.scss";
import { fetchFeature } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Feature = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchFeature());
  }, [dispatch]);
  return (
    <div className={Style.feature}>
      <div className={Style.wrapper}>
        <div className={Style.header}>
          <h2>Featured properties</h2>
        </div>
        <div className={Style.content}>
          {data.featureData &&
            data.featureData.map((item) => {
              return (
                <a
                  href={item.url}
                  className={`${item.id === "1" ? Style.first : ""}`}
                >
                  <span>
                    <img src={item.img} alt="" />
                  </span>
                  <div className={Style.text}>
                    <h2>{item.title}</h2>
                    <h3>{item.text}</h3>
                    <h4>{item.slug}</h4>
                  </div>
                </a>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Feature;
