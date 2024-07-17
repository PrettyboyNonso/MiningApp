import React from "react";

function BiggerCoin({ getPosition }) {
  return (
    <div className="mine-clicker">
      <div className="second-mine-div">
        <div className="third-mine-div">
          <img
            src={require("./Images/IMG_1719.PNG")}
            alt=""
            onClick={getPosition}
          />
        </div>
      </div>
    </div>
  );
}

export default BiggerCoin;
