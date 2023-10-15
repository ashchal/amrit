import { useState } from "react";
import "./App.css";
import "./comic/carousel.css";
import { CarouselExtends } from "./comic/carouselextends";
import { Slider } from "./slider";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      hello
      <h1>Toggleable Dark Mode</h1>
      <button onClick={toggleDarkMode}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <Slider />
      <CarouselExtends />
    </div>
  );
}

export default App;
