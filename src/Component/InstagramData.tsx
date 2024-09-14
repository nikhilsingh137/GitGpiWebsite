import React, { useEffect, useState } from "react";
import Style from "./instagramdata.module.scss";
import { fetchData } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const InstagramData = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  const [expandedItems, setExpandedItems] = useState<{
    [key: string]: boolean;
  }>({});
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleView = (key: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className={Style.data}>
      <div className={Style.wrapper}>
        {data.dataData &&
          data.dataData.map((item, idx) => {
            return (
              <>
                <div className={Style.header}>
                  <h2>{item.title}</h2>
                </div>
                <div className={Style.content}>
                  {item.data &&
                    item.data.map((item, innerIdx) => {
                      const key = `${idx}-${innerIdx}`;
                      const isExpanded = expandedItems[key];
                      return (
                        <div className={Style.image} key={innerIdx}>
                          <span>
                            <img src={item.img} alt="" />
                          </span>
                          <div className={Style.paragraph} id="paragraph">
                            <p className={isExpanded ? Style.full : ""}>
                              {item.text}
                            </p>
                            <strong onClick={() => handleView(key)}>
                              {isExpanded ? "View Less" : "View More"}
                              <i
                                className={`fa-solid fa-angle-down ${
                                  isExpanded ? Style.rotated : ""
                                }`}
                              ></i>
                            </strong>
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

export default InstagramData;
