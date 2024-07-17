import { faGem } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Header = () => {
  return (
    <header>
      <div className="logo-part">
        <div className="profile-wrap-div">
          <img src={require("./Images/IMG_1719.PNG")} alt="" />
        </div>
        <p>fortune obi</p>
      </div>
      <div className="coin">
        <FontAwesomeIcon
          icon={faGem}
          style={{
            backgroundColor: "#3d97cd",
            color: "white",
            fontSize: "22px",
            padding: "0.25em",
            borderRadius: "10px",
          }}
        />
        <p>ton</p>
      </div>
    </header>
  );
};
