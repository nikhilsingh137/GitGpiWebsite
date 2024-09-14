import React, { useEffect } from "react";
import Style from "./brief.module.scss";
import { fetchBrief } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Brief = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchBrief());
  }, [dispatch]);
  return (
    <div className={Style.brief}>
      <div className={Style.wrapper}>
        {data.briefData &&
          data.briefData.map((item) => {
            return (
              <a href={item.url}>
                <span>
                  <img src={item.img} alt="" />
                </span>
                <div className={Style.text}>
                  <h2>{item.title}</h2>
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default Brief;
