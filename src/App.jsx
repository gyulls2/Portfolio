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
import { MdOutlineArrowUpward } from "react-icons/md";


import $ from "jquery";
import "fullpage.js/vendors/scrolloverflow";
import "fullpage.js";
import "fullpage.js/dist/jquery.fullpage.min.css";

function App() {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 870);
  const [showTopBtn, setShowTopBtn] = useState(false); // 버튼 표시 상태 추가

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 870);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          anchors: [
            "mainpage",
            "intropage",
            "skills",
            "proj00",
            "proj01",
            "proj02",
            "proj03",
            "proj04",
            "footer",
          ],
          afterLoad: function (origin, destination, direction) {
            setShowTopBtn(destination > 1); // top 버튼 표시
          },
        });
      }
    } else {
      // 모바일일 때 fullpage.js 해제
      if (window.fullpage_api) {
        window.fullpage_api.fullpage_api.setAutoScrolling(false);
      }

      // 모바일에서 스크롤을 올릴 때만 top 버튼 표시
      let lastScrollY = window.scrollY;
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setShowTopBtn(currentScrollY < lastScrollY && currentScrollY !== 0);
        lastScrollY = currentScrollY;
      };

      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isMobile]);

  const handleTopBtn = () => {
    if (!isMobile) {
      $.fn.fullpage.moveTo(1);
    } else {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      <div id="fullpage">
        <div className="section">
          <Main />
          <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        </div>
        <div className="section fp-scrollable section-intro">
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

      <aside>
        <button
          className={
            showTopBtn ? "show-quick-btn quick-btn-top" : "quick-btn-top"
          }
          aria-label="맨 위로"
          onClick={handleTopBtn}
        >
          <MdOutlineArrowUpward size={30} />
        </button>
      </aside>
    </div>
  );
}

export default App;
