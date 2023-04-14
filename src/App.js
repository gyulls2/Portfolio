import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Project from "./components/Project/Project";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Main />
      <Intro />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
