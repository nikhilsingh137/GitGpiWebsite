import React, { useEffect } from "react";
import Style from "./walfred.module.scss";
import { fetchWalfred } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const WalfredDetail = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchWalfred());
  }, [dispatch]);
  return (
    <div className={Style.wrapper}>
      <div className={Style.text}>
        {data.walfredData &&
          data.walfredData.map((item) => {
            return (
              <>
                <h2>{item.title}</h2>
                <p>
                  {item.paragraph} <a href={item.url}>{item.text}</a>
                </p>
              </>
            );
          })}
      </div>
      <div className={Style.right}>
        <h2>Our workspaces</h2>
        <h3>Thirty One Alfred Place</h3>
      </div>
    </div>
  );
};

export default WalfredDetail;
