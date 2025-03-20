import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Router from "./Routes/Path";
import ThemeModeProvider from "./Themes/ThemeProvider";

function App() {
  

  return (
    <>
      <ThemeModeProvider>
        <Router />
      </ThemeModeProvider>
    </>
  );
}

export default App;
