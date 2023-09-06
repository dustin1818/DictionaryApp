import React, { useContext, useState } from "react";
import { DictionaryContext } from "../contexts/DictionaryContext";

const ToggleFont = () => {
  const { font, setFont } = useContext(DictionaryContext);
  console.log(font.fontFamily);

  const updateFont = () => {
    setFont({
      ...font,
      fontFamily: "Poppins",
    });

    alert("Font has been changed");
  };
  return (
    <div className="flex items-center cursor-pointer" onClick={updateFont}>
      <h2 className="font-bold mr-5 text-lg text-gray-900">Sans serif</h2>
      <svg
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="8"
        viewBox="0 0 14 8"
      >
        <path
          fill="none"
          stroke="#A445ED"
          strokeWidth="1.5px"
          d="m1 1 6 6 6-6"
        ></path>
      </svg>
    </div>
  );
};

export default ToggleFont;
