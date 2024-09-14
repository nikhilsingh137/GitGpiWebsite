import React, { useEffect } from "react";
import Style from "./power.module.scss";
import { fetchPower } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Power = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchPower());
  }, [dispatch]);
  return (
    <div className={Style.power}>
      <div className={Style.wrapper}>
        <div className={Style.paragraph}>
          {data.powerData &&
            data.powerData.map((item) => {
              return <p>{item.paragraph}</p>;
            })}
        </div>
        <div className={Style.content}>
          {data.powerData &&
            data.powerData.map((item) => {
              return (
                <>
                  {item.data &&
                    item.data.map((item) => {
                      return (
                        <a href={item.url}>
                          <img src={item.img} alt="" />
                          <div className={Style.text}>
                            <h2>{item.title}</h2>
                            <p>{item.text}</p>
                          </div>
                        </a>
                      );
                    })}
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Power;
