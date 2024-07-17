import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Footer } from "./Footer";
import { faGem } from "@fortawesome/free-regular-svg-icons";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";

export const Invite = () => {
  return (
    <div className="mine-part" style={{ paddingBottom: "4em" }}>
      <h1 className="invite-head">invite friends</h1>
      <div className="invite-friends-box">
        <div className="invite-box">
          <div className="invite-image-part">
            <img
              src={require("./Images/image-removebg-preview (1).png")}
              alt=""
            />
          </div>
          <div className="invite-text">
            <h3>invite a friend</h3>
            <p>
              5,000{" "}
              <span>
                <FontAwesomeIcon
                  icon={faGem}
                  style={{ color: "#1cf514", marginLeft: "0.2em" }}
                />
              </span>{" "}
              for you and your friend
            </p>
          </div>
        </div>
        <div className="invite-box">
          <div className="invite-image-part">
            <img
              src={require("./Images/image-removebg-preview (1).png")}
              alt=""
            />
          </div>
          <div className="invite-text">
            <h3>invite a friend</h3>
            <p>
              5,000{" "}
              <span>
                <FontAwesomeIcon
                  icon={faGem}
                  style={{ color: "#1cf514", marginLeft: "0.2em" }}
                />
              </span>{" "}
              for you and your friend
            </p>
          </div>
        </div>
      </div>
      <div className="friend-list">
        <h1>friend list</h1>
        <FontAwesomeIcon
          icon={faRotateLeft}
          style={{ color: "white", marginLeft: "0.2em" }}
        />
      </div>
      <div className="no-friend-yet">
        <p>you have not invited anyone</p>
      </div>
      <button className="invite-btn">invite</button>
      <Footer />
    </div>
  );
};
