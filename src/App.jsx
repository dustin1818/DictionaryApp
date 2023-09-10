import { useEffect, useRef, useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { DictionaryContext } from "./contexts/DictionaryContext";
import Searchbar from "./components/Searchbar";

function App() {
  const [font, setFont] = useState({
    fontFamily: "Roboto",
  });
  const [term, setTerm] = useState(null);

  return (
    <div
      className="App py-5 px-4 md:w-[695px] md:m-auto dark:bg-black"
      style={{ fontFamily: font.fontFamily }}
    >
      <DictionaryContext.Provider value={{ font, setFont, term, setTerm }}>
        <Header />
        <Searchbar />
        <Body />
        <Footer />
      </DictionaryContext.Provider>
    </div>
  );
}

export default App;
