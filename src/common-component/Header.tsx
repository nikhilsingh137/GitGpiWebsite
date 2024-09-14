import React, { useEffect, useState } from "react";
import Style from "./header.module.scss";
import HDImg from "../img/gpe3-removebg-preview.png";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchHeader } from "../redux/Slice";
import SearchBox from "../Component/SearchBox";
import Sidebar from "./Sidebar";
import Overlay from "./Overlay";

const Header = () => {
  const [search, setSearch] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchHeader());
  }, [dispatch]);

  const handleForm = (e: any) => {
    setSearch(false);
  };
  const handleShowIcon = (e: any) => {
    setSearch(true);
  };

  const handleSide = (e: any) => {
    const sidebar = document.getElementById("side");
    if (sidebar) {
      sidebar.style.width = "250px";
    }
    setOverlay(true);
    document.body.style.overflow = "hidden";
  };

  const handleCross = () => {
    const sidebar = document.getElementById("side");
    if (sidebar) {
      sidebar.style.width = "0px";
    }
    setOverlay(false);
    document.body.style.overflow = "";
  };
  return (
    <div className={Style.header}>
      {overlay && (
        <div className={Style.overlay}>
          <Overlay handleCross={handleCross} />
        </div>
      )}
      <div className={Style.side} id="side">
        <Sidebar />
      </div>
      <>{search && <SearchBox handleForm={handleForm} />}</>
      <div className={Style.wrapper}>
        <div className={Style.Icon} onClick={handleSide}>
          <h2>☰</h2>
        </div>
        <div className={Style.logo}>
          <img src={HDImg} alt="" />
        </div>
        <div className={Style.nav}>
          <ul>
            {data.headerData &&
              data.headerData.map((item) => {
                return (
                  <li>
                    <a href={item.url}>{item.title}</a>
                    {item.id === "1" && "2" && "3" && "4" && item.SubMenu && (
                      <div className={Style.drop}>
                        {item.SubTitle &&
                          item.SubTitle.map((item) => {
                            return <a href={item.url}>{item.title}</a>;
                          })}
                      </div>
                    )}
                  </li>
                );
              })}
          </ul>
        </div>
        <div className={Style.icon}>
          <i
            className="fa-solid fa-magnifying-glass"
            onClick={handleShowIcon}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
