import { Footer } from "./Footer";

export const Trade = ({ setActiveNav, activeNav }) => {
  return (
    <div className="mine-part">
      <h2>daily bonus</h2>
      <div className="box-flex">
        <div className="boxes">
          <div className="image-part">
            <img
              src={require("./Images/image-removebg-preview (1).png")}
              alt=""
            />
          </div>
        </div>
        <div className="boxes">
          <div className="image-part">
            <img
              src={require("./Images/image-removebg-preview (1).png")}
              alt=""
            />
          </div>
        </div>
        <div className="boxes">
          <div className="image-part">
            <img
              src={require("./Images/image-removebg-preview (1).png")}
              alt=""
            />
          </div>
        </div>
        <div className="boxes">
          <div className="image-part">
            <img
              src={require("./Images/image-removebg-preview (1).png")}
              alt=""
            />
          </div>
        </div>
        <div className="boxes">
          <div className="image-part">
            <img
              src={require("./Images/image-removebg-preview (1).png")}
              alt=""
            />
          </div>
        </div>
        <div className="boxes">
          <div className="image-part">
            <img
              src={require("./Images/image-removebg-preview (1).png")}
              alt=""
            />
          </div>
        </div>
        <div className="boxes">
          <div className="image-part">
            <img
              src={require("./Images/image-removebg-preview (1).png")}
              alt=""
            />
          </div>
        </div>
        <div className="boxes">
          <div className="image-part">
            <img
              src={require("./Images/image-removebg-preview (1).png")}
              alt=""
            />
          </div>
        </div>
        <div className="boxes">
          <div className="image-part">
            <img
              src={require("./Images/image-removebg-preview (1).png")}
              alt=""
            />
          </div>
        </div>
      </div>
      <button className="claim-btn">claim bonus</button>
      <Footer setActiveNav={setActiveNav} activeNav={activeNav} />
    </div>
  );
};
