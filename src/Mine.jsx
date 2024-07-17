import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Footer } from "./Footer";
import { faGem } from "@fortawesome/free-regular-svg-icons";
export const Mine = () => {
  return (
    <div className="mine-part">
      <div className="mine-dashboard">
        <div className="mine-level">
          <div className="level-name">
            <p>grandmaster</p>
          </div>
          <div className="loading-bar">
            <p>level 4/10</p>
            <div className="bar">
              <div className="second-bar"></div>
            </div>
          </div>
        </div>
        <div className="mine-level" style={{ marginTop: "0.3em" }}>
          <div className="level-name">
            <p>boost 🚀</p>
          </div>
          <div className="loading-bar">
            <p style={{ color: "white" }}> 1500/1500</p>
            <div className="bar" style={{ backgroundColor: "#3d97cd" }}></div>
          </div>
        </div>
        <div className="mine-coin">
          {/* <h3>hamcoins</h3> */}
          <h2>
            100
            <span>
              <FontAwesomeIcon
                icon={faGem}
                style={{ color: "#1cf514", marginLeft: "0.2em" }}
              />
            </span>
          </h2>
        </div>
        <div className="mine-clicker">
          <div className="second-mine-div">
            <div className="third-mine-div">
              <img src={require("./Images/IMG_1719.PNG")} alt="" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
