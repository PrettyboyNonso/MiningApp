import { faGem } from "@fortawesome/free-regular-svg-icons";
import {
  faBriefcase,
  faHammer,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons/faGift";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Footer = ({ setActiveNav, activeNav }) => {
  return (
    <div className="footer">
      <div className="bottom-menu" onClick={() => setActiveNav("mine")}>
        <FontAwesomeIcon
          icon={faGem}
          style={{
            color: activeNav === "mine" ? "#1cf514" : "white",
            fontSize: "22px",
          }}
        />
        <p style={{ color: activeNav === "mine" ? "#1cf514" : "white" }}>
          mine
        </p>
      </div>
      <div className="bottom-menu" onClick={() => setActiveNav("bonus")}>
        <FontAwesomeIcon
          icon={faGift}
          style={{
            color: activeNav === "bonus" ? "#1cf514" : "white",
            fontSize: "22px",
          }}
        />
        <p style={{ color: activeNav === "bonus" ? "#1cf514" : "white" }}>
          bonus
        </p>
      </div>
      <div className="bottom-menu" onClick={() => setActiveNav("invite")}>
        <FontAwesomeIcon
          icon={faPeopleGroup}
          style={{
            color: activeNav === "invite" ? "#1cf514" : "white",
            fontSize: "22px",
          }}
        />
        <p style={{ color: activeNav === "invite" ? "#1cf514" : "white" }}>
          invite
        </p>
      </div>
      <div className="bottom-menu" onClick={() => setActiveNav("tasks")}>
        <FontAwesomeIcon
          icon={faBriefcase}
          style={{
            color: activeNav === "tasks" ? "#1cf514" : "white",
            fontSize: "22px",
          }}
        />
        <p style={{ color: activeNav === "tasks" ? "#1cf514" : "white" }}>
          tasks
        </p>
      </div>
    </div>
  );
};
