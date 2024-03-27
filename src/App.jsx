import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Project00 from "./components/Project/Project00";
import Project01 from "./components/Project/Project01";
import Project02 from "./components/Project/Project02";
import Project03 from "./components/Project/Project03";
import Project04 from "./components/Project/Project04";

import $ from "jquery";
import "fullpage.js/vendors/scrolloverflow";
import "fullpage.js";
import "fullpage.js/dist/jquery.fullpage.min.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 870);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (!isMobile) {
      if (!window.fullpage_api) {
        $("#fullpage").fullpage({
          scrollOverflow: true,
          scrollOverflowOptions: {
            scrollbars: false,
          },
        });
      }
    } else {
      // 모바일일 때 fullpage.js 해제
      if (window.fullpage_api) {
        window.fullpage_api.fullpage_api.setAutoScrolling(false);
      }
    }

    return () => {
      if (window.fullpage_api) {
        window.fullpage_api.fullpage_api.setAutoScrolling(false);
      }
    };
  }, []);

  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      <div id="fullpage">
        <div className="section">
          <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          <Main />
        </div>
        <div className="section fp-scrollable">
          <Intro />
        </div>
        <div className="section fp-scrollable">
          <Skills />
        </div>
        <div className="section fp-scrollable">
          <Project00 />
        </div>
        <div className="section fp-scrollable">
          <Project01 />
        </div>
        <div className="section fp-scrollable">
          <Project02 />
        </div>
        <div className="section fp-scrollable">
          <Project03 />
        </div>
        <div className="section fp-scrollable">
          <Project04 />
        </div>
        <div className="section fp-auto-height">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
