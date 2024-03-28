import React, { useEffect, useRef } from "react";
import "./SideNav.scss";
import { Link } from "react-scroll";
import { IoIosClose } from "react-icons/io";

const SideNav = ({ isOpen, setIsOpen }) => {
  const toggleSide = () => {
    setIsOpen(false);
  };

  const outside = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", handlerOutsie);
    return () => {
      document.removeEventListener("mousedown", handlerOutsie);
    };
  });

  const handlerOutsie = (e) => {
    if (!outside.current.contains(e.target)) {
      toggleSide();
    }
  };

  return (
    <div className={isOpen ? "bg_open bg" : "bg"}>
      <nav className={isOpen ? "open sideNav" : "sideNav"} ref={outside}>
        <button type="button" className="close" onClick={toggleSide}>
          <IoIosClose size={35} />
        </button>

        <ul className="menuList">
          <li>
            <Link to="main" spy={true} smooth={true} onClick={toggleSide}>
              Home
            </Link>
          </li>

          <li>
            <Link to="intro" spy={true} smooth={true} onClick={toggleSide}>
              About Me
            </Link>
          </li>

          <li>
            <Link to="skill" spy={true} smooth={true} onClick={toggleSide}>
              Skills
            </Link>
          </li>

          <li>
            <Link to="project00" spy={true} smooth={true} onClick={toggleSide}>
              Project
            </Link>
          </li>

          <li>
            <a
              href="https://velog.io/@tangerine"
              target="_blank"
              rel="noreferrer"
              onClick={toggleSide}
            >
              Velog
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
