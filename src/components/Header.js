import React from "react";
import "./Header.scss";
import Progressbar from "./Progressbar";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="menuList">
          <li className="logo">logo</li>
          <li>Home</li>
          <li>About Me</li>
          <li>Skills</li>
          <li>Project</li>
          <li>Velog</li>
          <li>darkmodebutton</li>
        </ul>
        <Progressbar />
      </nav>
    </header>
  );
};

export default Header;
