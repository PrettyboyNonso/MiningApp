import { Footer } from "./Footer";

export const Invite = () => {
  return (
    <div className="mine-part">
      <h1>invite friends</h1>
      <div className="invite-friends-box">
        <div className="invite-box">
          <div className="invite-image-part">
            <img
              src={require("./Images/image-removebg-preview (1).png")}
              alt=""
            />
          </div>
        </div>
      </div>
      <button className="invite-btn">invite</button>
      <Footer />
    </div>
  );
};
