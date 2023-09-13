import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { DictionaryContext } from "../contexts/DictionaryContext";
import Word from "./Word";

const Body = () => {
  const [words, setWords] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const { term, setTerm } = useContext(DictionaryContext);

  const getWord = async () => {
    setError("");
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${term}`
      );
      setIsLoading(false);
      setWords(response.data);
    } catch (error) {
      setError("Sorry, something went wrong");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getWord();
  }, [term]);

  return (
    <div className="mt-10 md:mt-20 bg-white dark:bg-black">
      {term !== null ? (
        <Word
          isLoading={isLoading}
          error={error}
          words={words}
          term={term}
          setTerm={setTerm}
        />
      ) : (
        <div className="mt-20 h-full flex flex-col justify-center items-center text-center">
          <svg
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 34 38"
            class="contain h-16 w-full"
            width="34"
            height="38"
          >
            <g
              fill="none"
              fill-rule="evenodd"
              stroke="#838383"
              stroke-linecap="round"
              stroke-width="1.5px"
            >
              <path
                d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28"
                stroke="#838383"
                fill="none"
                stroke-width="1.5px"
              ></path>
              <path
                stroke-linejoin="round"
                d="M5 37a4 4 0 1 1 0-8"
                stroke="#838383"
                fill="none"
                stroke-width="1.5px"
              ></path>
              <path
                d="M11 9h12"
                stroke="#838383"
                fill="none"
                stroke-width="1.5px"
              ></path>
            </g>
          </svg>
          {/* <img
            src="./src/assets/book.png"
            alt="emoji_open_book-9a5416d7.png"
            className="contain h-16"
          /> */}

          <h1 className="font-bold text-xl mt-10 mb-8 text-zinc-700 dark:text-white ">
            Frontend Mentor Dictionary
          </h1>

          <p className="text-md text-zinc-700">
            "The limits of my langauge mean the limits of my world."
          </p>
          <p className="font-bold mt-4 text-md text-zinc-700">
            Ludwig Wittgenstein
          </p>
        </div>
      )}
    </div>
  );
};

export default Body;
