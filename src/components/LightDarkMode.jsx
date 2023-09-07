import React, { useState } from "react";
import { useToggle } from "@uidotdev/usehooks";

const LightDarkMode = () => {
  const [on, toggle] = useToggle(true);

  return (
    <div>
      <label className="toggle">
        <input
          onChange={toggle}
          className="toggle-checkbox"
          type="checkbox"
          checked={on}
        />
        <div className="toggle-switch"></div>
        <span className="toggle-label">{on ? "On" : "Off"}</span>
      </label>
    </div>
  );
};

export default LightDarkMode;
