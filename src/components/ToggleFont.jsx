import React, { useContext, useState } from "react";
import { DictionaryContext } from "../contexts/DictionaryContext";

const ToggleFont = () => {
  const [toggleBtn, setToggleBtn] = useState(false);
  const { font, setFont } = useContext(DictionaryContext);
  console.log(font.fontFamily);

  const updateFont = () => {
    setToggleBtn((value) => !value);
  };
  return (
    <div
      className="flex items-center cursor-pointer relative"
      onClick={updateFont}
    >
      <h2 className="font-bold mr-5 text-lg text-gray-900">{font.fontFamily}</h2>
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

      {toggleBtn === true ? (
        <div className="absolute top-[50px] right-0 bottom-0 left-0 p-5 shadow h-[165px] w-[206px] rounded">
          <h2
            className="cursor font-bold mb-3 text-lg hover:text-[#A445ED] font-[!Nunito San]"
            onClick={() =>
              setFont({
                ...font,
                fontFamily:"Nunito Sans",
              })
            }
          >
            Nunito Sans
          </h2>
          <h2
            className="cursor font-bold mb-3 text-lg hover:text-[#A445ED] font-[!Poppins] "
            onClick={() =>
              setFont({
                ...font,
                fontFamily: "Poppins",
              })
            }
          >
            Poppins
          </h2>
        </div>
      ) : null}
    </div>
  );
};

export default ToggleFont;
