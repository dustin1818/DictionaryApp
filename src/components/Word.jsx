import React, { useState } from "react";
const Word = ({ isLoading, error, words, term, setTerm }) => {
  if (isLoading) {
    return (
      <div className=" h-screen grid place-items-center text-center text-4xl">
        Loading...
      </div>
    );
  }
  if (error) {
    return (
      <div className=" h-screen grid place-items-center text-center text-4xl">
        {error}
      </div>
    );
  }
  const audioFile = words[0].phonetics[0].audio;
  let audio = new Audio(audioFile);
  const startAudio = () => {
    if (audioFile === "") {
      alert("Sorry, no audio..");
    } else {
      audio.play();
    }
  };

  const getSynonym = (e) => {
    console.log(words, e);
    // word.meaning.filter(())
  };
  return (
    <>
      {words.map((word, index) => (
        <div
          className="text-zinc-700 dark:text-white bg-white dark:bg-black"
          key={index}
        >
          <div className="flex justify-between items-center" controls>
            <div className="block">
              <h1 className="font-bold text-[42px] mb-1 capitalize ">
                {index + 1}. {word.word}
              </h1>
              <p className="text-purple-600 text-[23px]">{word.phonetic}</p>
            </div>
            <div className="button-container">
              <button title="listen to the pronunciation" onClick={startAudio}>
                <svg
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="h-16 w-16 md:h-[75px] md:w-[75px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="75"
                  height="75"
                  viewBox="0 0 75 75"
                >
                  <g fill="#A445ED">
                    <circle
                      cx="37.5"
                      cy="37.5"
                      r="37.5"
                      className="opacity-25 transition-all duration-300"
                      fill="#A445ED"
                    ></circle>
                    <path
                      d="M29 27v21l21-10.5z"
                      className="opacity-100 fill-accent transition-colors duration-300"
                      fill="#A445ED"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
          {word.meanings.map((meanings, index) => (
            <section className="block my-7" key={index}>
              <h2
                className="mb-10 flex items-center gap-6 whitespace-nowrap text-2xl
           font-bold italic after:inline-block after:h-px after:w-full after:bg-zinc-700 after:opacity-1 after:transition-colors after:duration-300 after:content-[''] md:text-2xl"
              >
                {meanings.partOfSpeech}
              </h2>
              <p className="text-zinc-600 text-[21px] my-6">Meaning</p>
              {meanings.definitions?.map((definition, index) => (
                <div className="flex flex-col " key={index}>
                  <div className="flex item-center">
                    <span className="text-purple-600 text-4xl">•</span>
                    <span className="ml-5 text-xl">
                      {definition.definition}
                    </span>
                  </div>
                  <p
                    className={
                      definition.example
                        ? "mb-5 mt-2 ml-8 text-zinc-600"
                        : "hidden"
                    }
                  >
                    Ex: "{definition.example}"
                  </p>
                </div>
              ))}

              <div
                className={
                  meanings.synonyms.length > 0
                    ? "flex flex-wrap items-start gap-4 mt-8"
                    : "hidden"
                }
              >
                <p className="text-zinc-600 text-[21px]">Synonyms</p>
                {meanings.synonyms.length > 0 &&
                  meanings.synonyms.map((synonyms, index) => (
                    <p
                      className="text-purple-600 text-[21px]"
                      key={index}
                      onClick={() => getSynonym(index)}
                    >
                      {synonyms}
                    </p>
                  ))}
              </div>
            </section>
          ))}

          <hr className="border-zinc-700 my-5" />
          <section className="flex items-center gap-4">
            <p className="text-zinc-600 text-[21px] my-6">Source</p>
            <div className="flex items-center">
              <a className="text-lg underline" href={word.sourceUrls[0]}>
                {word.sourceUrls[0]}
              </a>
              <svg
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="ml-1 inline-block h-6 w-6 md:h-7 md:w-7 stroke-secondary-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                width="24"
                height="24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  stroke="#757575"
                  fill="none"
                  strokeWidth="1.5px"
                ></path>
              </svg>
            </div>
          </section>
        </div>
      ))}
    </>
  );
};

export default Word;
