import logo from "./logo.svg";
import "./App.css";
import { Theme } from "./Context/Povider";
import { Color } from "./Theme/Color";
import Main from "./Pages/Main";
import { useState } from "react";
import ColorMode from "./Theme/ColorMode";

function App() {
  let [light, setLight] = useState(
    !window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  return (
    <>
      <Theme.Provider
        value={{
          mode: light ? "light" : "dark",
          colorFunction: ColorMode,
          changeTheme: setLight,
        }}
      >
        <Main />
      </Theme.Provider>
    </>
  );
}

export default App;
