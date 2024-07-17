import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Footer } from "./Footer";
import { LittleCoin } from "./LittleCoin";
import { useEffect } from "react";
import BiggerCoin from "./BiggerCoin";
export const Mine = ({ setActiveNav, activeNav }) => {
  const getPosition = (e) => {
    console.log(e.target.getBoundingClientRect());
    // console.log(e);
  };
  return (
    <div className="mine-part">
      <div className="mine-coin" onClick={(e) => getPosition(e)}>
        <LittleCoin />
        <h2>1,000</h2>
        <p>newbie</p>
      </div>
      <div className="mine-dashboard">
        <div className="mine-level">
          <div className="level-name">
            <p>newbie</p>
          </div>
          <div className="loading-bar">
            <p style={{ fontWeight: "bold" }}>level 1/10</p>
            <div className="bar">
              <div className="second-bar"></div>
            </div>
          </div>
        </div>
        <div
          className="mine-level"
          style={{ marginTop: "0em", fontWeight: "bold" }}
        >
          <div className="level-name">
            <p>boost 🚀</p>
          </div>
          <div className="loading-bar">
            <p style={{ color: "white" }}> 1500/1500</p>
            <div className="bar" style={{ backgroundColor: "#1cf514" }}></div>
          </div>
        </div>
        <BiggerCoin getPosition={getPosition} />
        <Footer setActiveNav={setActiveNav} activeNav={activeNav} />
      </div>
    </div>
  );
};
