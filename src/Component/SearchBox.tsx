import React from "react";
import Style from "./searchbox.module.scss";

export interface IType {
  handleForm: any;
}

const SearchBox: React.FC<IType> = ({ handleForm }) => {
  return (
    <div className={Style.searchbox}>
      <div className={Style.wrapper}>
        <div className={Style.text}>
          <h2>Search</h2>
          <h3 onClick={handleForm}>X</h3>
        </div>
        <div className={Style.box}>
          <form>
            <div className={Style.formbox}>
              <input type="text" placeholder="Search for something....." />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
