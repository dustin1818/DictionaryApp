import React, { useContext, useState, useRef, useEffect } from "react";
import { DictionaryContext } from "../contexts/DictionaryContext";
import useOnClickOutsideRef from "../hooks/ClickOutsideHook";

const ToggleFont = () => {
  const [toggleBtn, setToggleBtn] = useState(false);
  const { font, setFont } = useContext(DictionaryContext);

  const updateFont = () => {
    setToggleBtn((value) => !value);
  };

  const modalRef = useOnClickOutsideRef(() => setToggleBtn(false));

  useEffect(() => {
    function handler(event) {
      if (!modalRef.current?.contains(event.target)) {
        setToggleBtn(false);
      }
    }
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  return (
    <div
      ref={modalRef}
      className="flex items-center cursor-pointer relative"
      onClick={updateFont}
    >
      <h2 className="font-bold mr-4 text-lg text-gray-900 dark:text-white">
        {font.fontFamily}
      </h2>
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
        <div className="absolute top-[45px] right-0 bottom-0 left-[-68px] md:left-0 p-5 shadow h-[135px] w-[165px] rounded dark:bg-white dark:text-slate-800 dark:shadow-purple-800 dark:shadow-md z-10">
          <h2
            className="roboto cursor font-bold mb-3 text-md md:text-lg hover:text-[#A445ED] "
            onClick={() =>
              setFont({
                ...font,
                fontFamily: "Roboto",
              })
            }
          >
            Roboto
          </h2>
          <h2
            className="poppins cursor font-bold mb-3 text-md md:text-lg hover:text-[#A445ED] "
            onClick={() =>
              setFont({
                ...font,
                fontFamily: "Poppins",
              })
            }
          >
            Poppins
          </h2>

          <h2
            className="montserrat cursor font-bold mb-3 text-md md:text-lg hover:text-[#A445ED]"
            onClick={() =>
              setFont({
                ...font,
                fontFamily: "Montserrat",
              })
            }
          >
            Montserrat
          </h2>
        </div>
      ) : null}
    </div>
  );
};

export default ToggleFont;
