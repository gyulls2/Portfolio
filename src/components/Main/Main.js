import "./Main.scss";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Main = () => {
  const clickHandler = () => {
    window.open("https://gyulls2.github.io/Portfolio/images/resume.pdf");
  };

  return (
    <section className="mainSection" id="main">
      <img
        src="/images/Pill-Blue-Glossy.svg"
        alt="backgroundAsset"
        className="pill-Blue-Glossy"
      />
      <img
        src="/images/RoundCube-Orange-Glossy.svg"
        alt="backgroundAsset"
        className="roundCube-Orange-Glossy"
      />
      <div className="eclipse1"></div>
      <div className="eclipse2"></div>

      <div className="wrapper">
        <div className="keyText">
          <div className="container">
            <h1 clsssName="textBox">
              Hello!
              <br />
              I’m Kim Gyuri
              <br />
              <span>Frontend Developer</span>
            </h1>

            <p>
              협업을 위해 배려하며, 성장하기 위해 노력합니다.
              <br />
              무엇이든 관심이 생기면 빠르게 도전하고 실행합니다.
              <br />
              ‘꾸준히, 즐겁게’라는 가치관으로 프론트엔드 개발 역량을 향상시키고
              있습니다.
            </p>
            <button className="btn-hover color-3" onClick={clickHandler}>
              Resume &nbsp;
              <HiArrowNarrowRight
                size={16}
                style={{ position: "absolute", top: "16px" }}
              />
            </button>
            <Link to="intro" spy={true} smooth={true}>
              <button className="btn-hover color-3">
                About Me &nbsp;
                <HiArrowNarrowRight
                  size={16}
                  style={{ position: "absolute", top: "16px" }}
                  className="arrowIcon"
                  color="white"
                />
              </button>
            </Link>
          </div>
        </div>

        <div className="keyImage">
          <img src="/images/Group6.svg" alt="keyImage" />
        </div>
      </div>
    </section>
  );
};

export default Main;
