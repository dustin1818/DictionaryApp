import React, { useState } from "react";
import { useToggle } from "@uidotdev/usehooks";
import useColorModeHook from "../hooks/UseColorModeHook";

const LightDarkMode = () => {
  const [on, toggle] = useToggle(true);
  const [colorMode, setColorMode] = useColorModeHook();

  const updateToggle = () => {
    toggle("nope");
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  return (
    <div>
      <label className="toggle">
        <input
          onChange={updateToggle}
          className="toggle-checkbox "
          type="checkbox"
          checked={on}
        />
        <div className="toggle-switch !bg-[#7c3aed]"></div>
        <span className="toggle-label text-zinc-700 dark:text-white">
          {on ? "On" : "Off"}
        </span>
      </label>
    </div>
  );
};

export default LightDarkMode;
