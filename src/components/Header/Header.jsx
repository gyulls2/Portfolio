import React, { useState } from "react";
import "./Header.scss";
import { BsGithub } from "react-icons/bs";
import { BsMoonStarsFill } from "react-icons/bs";
import { HiSun } from "react-icons/hi";
import { HiMenu } from "react-icons/hi";
import SideNav from "./SideNav";

const Header = ({ toggleDarkMode, darkMode }) => {
  // 사이드 메뉴 토글
  const [isOpen, setIsOpen] = useState(false);
  const toggleSide = () => {
    setIsOpen(true);
  };

  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <a href="#mainpage" className="logoText">
            Portfolio
          </a>
        </div>
        <nav className="nav">
          <ul className="menuList">
            <li>
              <a href="#skills" className="to-right-underline">
                Skills
              </a>
            </li>

            <li>
              <a href="#proj00" className="to-right-underline">
                Project
              </a>
            </li>

            <li>
              <a
                href="https://velog.io/@tangerine"
                target="_blank"
                rel="noreferrer"
                className="to-right-underline"
              >
                Blog
              </a>
            </li>
          </ul>

          <ul className="iconList">
            <li>
              <a
                href="https://github.com/gyulls2"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub
                  size={28}
                  style={{ position: "relative", top: "15px" }}
                />
              </a>
            </li>
            <li>
              <button className="toggle-button" onClick={toggleDarkMode}>
                {darkMode ? (
                  <BsMoonStarsFill
                    size={24}
                    style={{ position: "relative", top: "15px" }}
                  />
                ) : (
                  <HiSun
                    size={32}
                    style={{ position: "relative", top: "15px" }}
                  />
                )}
              </button>
            </li>
          </ul>
        </nav>
        <button type="button" className="navBtn" onClick={toggleSide}>
          <HiMenu size={30}/>
        </button>
        <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export default Header;
