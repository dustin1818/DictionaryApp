import { useEffect, useRef, useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { DictionaryContext } from "./contexts/DictionaryContext";
import Searchbar from "./components/Searchbar";
import useColorModeHook from "./hooks/UseColorModeHook";

function App() {
  const [font, setFont] = useState({
    fontFamily: "Roboto",
  });
  const [term, setTerm] = useState(null);
  const [colorMode, setColorMode] = useColorModeHook();

  return (
    <div className="App" style={{ fontFamily: font.fontFamily }}>
      <div className="bg-white dark:bg-black w-screen h-screen dark:text-white">
        <div className="py-5 px-4 md:w-[695px] md:m-auto dark:bg-black"></div>
        <button
          className="bg-red-500 dark:bg-sky-500 text-black dark:text-white"
          onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
        >
          Toggle Color Mode
        </button>
        <DictionaryContext.Provider value={{ font, setFont, term, setTerm }}>
          <Header />
          <Searchbar />
          <Body />
          <Footer />
        </DictionaryContext.Provider>
      </div>
    </div>
  );
}

export default App;
