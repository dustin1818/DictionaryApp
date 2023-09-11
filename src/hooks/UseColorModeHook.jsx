import { useEffect } from "react";
import LocalStorageHook from "./LocalStorageHook";

function useColorModeHook() {
  const [colorMode, setColorMode] = LocalStorageHook("color-mode", "light");

  useEffect(() => {
    const className = "dark";
    const bodyClasses = window.document.body.classList;

    colorMode === "dark"
      ? bodyClasses.add(className)
      : bodyClasses.remove(className);
  }, [colorMode]);

  return [colorMode, setColorMode];
}

export default useColorModeHook;
