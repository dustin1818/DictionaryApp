import React, { useContext, useState } from "react";
import { DictionaryContext } from "../contexts/DictionaryContext";

const Searchbar = () => {
  const [errors, setErrors] = useState("");
  const { term, setTerm } = useContext(DictionaryContext);
  const [value, setValue] = useState("");

  const sendValue = () => {
    if (value === "") {
      setErrors("Please enter a value");
    } else {
      setTerm(value);
      setErrors("");
    }
  };

  const searchEnterValue = (e) => {
    if (value === "") {
      setErrors("Please enter a value");
    } else if (e.key === "Enter") {
      setTerm(value);
      setErrors("");
    }
  };

  return (
    <>
      <div className="relative flex h-16 items-center gap-5 rounded-2xl bg-secondary-200 px-6 outline outline-1 outline-transparent transition-all duration-300  focus-within:outline-accent dark: bg-zinc-950 mt-14">
        <input
          type="text"
          className="dark w-full grow bg-transparent font-bold caret-accent outline-none transition-colors duration-300 placeholder:text-primary-400 placeholder:text-opacity-25 placeholder:transition-colors placeholder:duration-300 dark:placeholder:text-white dark:placeholder:text-opacity-25 md:text-xl "
          placeholder="Search for any word..."
          onChange={(e) => setValue(e.target.value.trim())}
          onKeyDown={(e) => searchEnterValue(e)}
        />

        <button className="shrink-0" onClick={sendValue}>
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              fill="none"
              stroke="#A445ED"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5px"
              d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
            ></path>
          </svg>
        </button>
      </div>
      {errors ? <p className="text-red-500 mt-5 text-left">{errors}</p> : null}
    </>
  );
};

export default Searchbar;
