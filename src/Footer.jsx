import { faGem } from "@fortawesome/free-regular-svg-icons";
import {
  faBriefcase,
  faHammer,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="bottom-menu">
        <FontAwesomeIcon
          icon={faGem}
          style={{ color: "white", fontSize: "22px" }}
        />
        <p>mine</p>
      </div>
      <div className="bottom-menu">
        <FontAwesomeIcon
          icon={faHammer}
          style={{ color: "white", fontSize: "22px" }}
        />
        <p>work</p>
      </div>
      <div className="bottom-menu">
        <FontAwesomeIcon
          icon={faPeopleGroup}
          style={{ color: "white", fontSize: "22px" }}
        />
        <p>invite</p>
      </div>
      <div className="bottom-menu">
        <FontAwesomeIcon
          icon={faBriefcase}
          style={{ color: "white", fontSize: "22px" }}
        />
        <p>tasks</p>
      </div>
    </div>
  );
};
