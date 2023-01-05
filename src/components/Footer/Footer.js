import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerTitle">
        김규리 포트폴리오
        <span className="copyright">Copyright ⓒ 김규리 All rights reserved.</span>
      </div>
      <div className="footerList">
        <ul>
          <li className="to-right-underline">
            <a
              href="https://github.com/gyulls2"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li className="to-right-underline">
            <a href="mailto:kuri6233@gmail.com">Mail</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
