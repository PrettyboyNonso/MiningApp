import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { Mine } from "./Mine";
import { Trade } from "./Trade";
import { Invite } from "./Invite";
import { Task } from "./Tasks";

export const Application = () => {
  const [activeNav, setActiveNav] = useState("mine");

  return (
    <div className="application">
      <Header />
      {activeNav === "mine" && (
        <Mine setActiveNav={setActiveNav} activeNav={activeNav} />
      )}
      {activeNav === "bonus" && (
        <Trade setActiveNav={setActiveNav} activeNav={activeNav} />
      )}
      {activeNav === "invite" && (
        <Invite setActiveNav={setActiveNav} activeNav={activeNav} />
      )}
      {activeNav === "tasks" && (
        <Task setActiveNav={setActiveNav} activeNav={activeNav} />
      )}
    </div>
  );
};
