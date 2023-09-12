import React, { useContext } from "react";
import { DictionaryContext } from "../contexts/DictionaryContext";

const Footer = () => {
  const { term, setTerm } = useContext(DictionaryContext);
  return (
    <footer
      className={
        term !== null
          ? "relative mt-10 bottom-0 left-0 right-0 mb-5 text-lg md:text-xl text-center text-zinc-700 dark:text-white bg-white dark:bg-black "
          : "absolute mt-10 bottom-0 left-0 right-0 mb-5 text-lg md:text-xl text-center text-zinc-700 dark:text-white bg-white dark:bg-black "
      }
    >
      <p>
        Challenge by <span className="font-bold">Frontend Mentor</span>. Coded
        by <span className="font-bold">Dustin Amoda</span>
      </p>
    </footer>
  );
};

export default Footer;
