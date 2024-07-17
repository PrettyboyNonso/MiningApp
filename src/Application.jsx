import React from "react";
import { Header } from "./Header";
import { Mine } from "./Mine";
import { Trade } from "./Trade";
import { Invite } from "./Invite";

export const Application = () => {
  return (
    <div className="application">
      <Header />
      {/* <Mine /> */}
      {/* <Trade /> */}
      <Invite />
    </div>
  );
};
