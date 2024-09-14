import React, { useEffect } from "react";
import Style from "./offer.module.scss";
import { fetchOffer } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Offer = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchOffer());
  }, [dispatch]);
  return (
    <div className={Style.offer}>
      <div className={Style.wrapper}>
        {data.offerData &&
          data.offerData.map((item) => {
            return (
              <>
                <div className={Style.header}>
                  <h2>{item.title}</h2>
                </div>
                <div className={Style.content}>
                  {item.data &&
                    item.data.map((item) => {
                      return (
                        <div className={Style.text}>
                          <span>
                            <img src={item.img} alt="" />
                          </span>
                          <div className={Style.paragraph}>
                            <h2>{item.title}</h2>
                            <p>{item.paragraph}</p>
                          </div>
                        </div>
                      );
                    })}
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

export default Offer;
