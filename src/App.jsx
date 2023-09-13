import { useState } from "react";
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
      className="bg-white dark:bg-black"
      style={{ fontFamily: font.fontFamily }}
    >
      <div
        className={
          term !== null
            ? "py-5 px-4 md:w-[695px] md:m-auto bg-white dark:bg-black"
            : "py-5 px-4 md:w-[695px] md:m-auto bg-white dark:bg-black h-screen"
        }
      >
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
