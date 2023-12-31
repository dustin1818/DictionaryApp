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
