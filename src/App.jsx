import { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import { DictionaryContext } from "./contexts/DictionaryContext";
import ToggleFont from "./components/ToggleFont";

function App() {
  const [font, setFont] = useState({
    fontFamily: "Noto Serif",
  });

  return (
    <div
      className="App py-16 md:w-[695px] md:m-auto"
      style={{ fontFamily: font.fontFamily }}
    >
      <DictionaryContext.Provider value={{ font, setFont }}>
        <Header />
        <Body />
      </DictionaryContext.Provider>
    </div>
  );
}

export default App;
