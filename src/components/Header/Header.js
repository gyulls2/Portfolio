import React, { useEffect, useState } from "react";
import "./Header.scss";
import Progressbar from "./Progressbar";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import SideNav from "./SideNav";

const Header = () => {
  // 사이드 메뉴 토글
  const [isOpen, setIsOpen] = useState(false);
  const toggleSide = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const bgMode = window.localStorage.getItem("bgMode");
    if (bgMode === "dark") {
      document.getElementsByTagName("html")[0].classList.add("ui-dark");
    }
  }, []);

  const darkOnOff = () => {
    if (
      document.getElementsByTagName("html")[0].classList.contains("ui-dark")
    ) {
      document.getElementsByTagName("html")[0].classList.remove("ui-dark");
      window.localStorage.setItem("bgMode", "light");
    } else {
      document.getElementsByTagName("html")[0].classList.add("ui-dark");
      window.localStorage.setItem("bgMode", "dark");
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="main" spy={true} smooth={true}>
          <img
            src="https://gyulls2.github.io/Portfolio/images/favicon.svg"
            alt="파일없음"
          />
        </Link>
      </div>
      <nav className="nav">
        <ul className="menuList">
          <li>
            <Link to="main" spy={true} smooth={true}>
              Home
            </Link>
          </li>

          <li>
            <Link to="intro" spy={true} smooth={true}>
              About Me
            </Link>
          </li>

          <li>
            <Link to="skill" spy={true} smooth={true}>
              Skills
            </Link>
          </li>

          <li>
            <Link to="project" spy={true} smooth={true}>
              Project
            </Link>
          </li>

          <li>
            <a
              href="https://velog.io/@tangerine"
              target="_blank"
              rel="noreferrer"
            >
              Velog
            </a>
          </li>

          <li>
            <button type="button" onClick={darkOnOff}>
              <img
                src="https://gyulls2.github.io/Portfolio/images/dark.svg"
                alt="파일없음"
                className="darkBtn"
              />
            </button>
          </li>
        </ul>
      </nav>
        <Progressbar />
      <button type="button" className="navBtn" onClick={toggleSide}>
        <GiHamburgerMenu />
      </button>
      <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
