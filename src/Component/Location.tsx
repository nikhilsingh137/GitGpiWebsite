import React, { useState } from "react";
import Style from "./location.module.scss";

const Location = () => {
  const [drop, setDrop] = useState(false);
  const [drop1, setDrop1] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const handleButton = () => {
    setDrop(!drop);
    setDrop1(false);
    setDrop2(false);
  };

  const handleButton1 = () => {
    setDrop1(!drop1);
    setDrop(false);
    setDrop2(false);
  };

  const handleButton2 = () => {
    setDrop2(!drop2);
    setDrop1(false);
    setDrop(false);
  };
  return (
    <div className={Style.location}>
      <div className={Style.wrapper}>
        <div className={Style.paragraph}>
          <p>Find the perfect space for you</p>
        </div>
        <div className={Style.formbox}>
          <div className={Style.buuton}>
            <div className={Style.section} onClick={handleButton}>
              <h2>All Types</h2>
              <i
                className={`fa-solid fa-angle-down ${drop ? Style.rotate : ""}`}
              ></i>
            </div>
            {drop && (
              <div className={Style.drop}>
                <div className={Style.text}>
                  <h2>Quick Property Search Filter By Type</h2>
                  <div className={Style.selectbox}>
                    <div className={Style.box}>
                      <h2>Ready to Fit</h2>
                      <input type="checkbox" />
                    </div>
                    <div className={Style.box}>
                      <h2>Ready to Fit</h2>
                      <input type="checkbox" />
                    </div>
                    <div className={Style.box}>
                      <h2>Ready to Fit</h2>
                      <input type="checkbox" />
                    </div>
                    <div className={Style.box}>
                      <h2>Ready to Fit</h2>
                      <input type="checkbox" />
                    </div>
                    <div className={Style.box}>
                      <h2>Ready to Fit</h2>
                      <input type="checkbox" />
                    </div>
                    <div className={Style.box}>
                      <h2>Ready to Fit</h2>
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div className={Style.button}>
                    <h2>Clear</h2>
                    <h3>
                      Save <i className="fa-solid fa-angle-right"></i>
                    </h3>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={Style.buuton}>
            <div className={Style.section} onClick={handleButton1}>
              <h2>All Types</h2>
              <i
                className={`fa-solid fa-angle-down ${
                  drop1 ? Style.rotate : ""
                }`}
              ></i>
            </div>
            {drop1 && (
              <div className={Style.drop}>
                <div className={Style.text}>
                  <h2>Quick Property Search Filter By Type</h2>
                  <div className={Style.selectbox}>
                    <div className={Style.box}>
                      <h2>Ready to Fit</h2>
                      <input type="checkbox" />
                    </div>
                    <div className={Style.box}>
                      <h2>Ready to Fit</h2>
                      <input type="checkbox" />
                    </div>
                    <div className={Style.box}>
                      <h2>Ready to Fit</h2>
                      <input type="checkbox" />
                    </div>
                    <div className={Style.box}>
                      <h2>Ready to Fit</h2>
                      <input type="checkbox" />
                    </div>
                    <div className={Style.box}>
                      <h2>Ready to Fit</h2>
                      <input type="checkbox" />
                    </div>
                    <div className={Style.box}>
                      <h2>Ready to Fit</h2>
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div className={Style.button}>
                    <h2>Clear</h2>
                    <h3>
                      Save <i className="fa-solid fa-angle-right"></i>
                    </h3>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={Style.buuton}>
            <div className={Style.section} onClick={handleButton2}>
              <h2>All Types</h2>
              <i
                className={`fa-solid fa-angle-down ${
                  drop2 ? Style.rotate : ""
                }`}
              ></i>
            </div>
            {drop2 && (
              <div className={Style.drop}>
                <div className={Style.text}>
                  <h2>Quick Property Search Filter By Type</h2>
                  <div className={Style.selectbox}>
                    <div className={Style.box}>
                      <h2>Ready to Fit</h2>
                      <input type="checkbox" />
                    </div>
                    <div className={Style.box}>
                      <h2>Ready to Fit</h2>
                      <input type="checkbox" />
                    </div>
                    <div className={Style.box}>
                      <h2>Ready to Fit</h2>
                      <input type="checkbox" />
                    </div>
                    <div className={Style.box}>
                      <h2>Ready to Fit</h2>
                      <input type="checkbox" />
                    </div>
                    <div className={Style.box}>
                      <h2>Ready to Fit</h2>
                      <input type="checkbox" />
                    </div>
                    <div className={Style.box}>
                      <h2>Ready to Fit</h2>
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div className={Style.button}>
                    <h2>Clear</h2>
                    <h3>
                      Save <i className="fa-solid fa-angle-right"></i>
                    </h3>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
