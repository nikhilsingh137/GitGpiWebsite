import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchHeader } from "../redux/Slice";
import Style from "./sidebar.module.scss";

const Sidebar = () => {
  const [drop, setDrop] = useState(false);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchHeader());
  }, [dispatch]);

  const handleDrop = (e: any) => {
    setDrop(!drop);
  };
  return (
    <div className={Style.sidebar}>
      <ul>
        {data.headerData &&
          data.headerData.map((item) => {
            return (
              <li onClick={handleDrop}>
                <a href={item.url}>{item.title}</a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Sidebar;
