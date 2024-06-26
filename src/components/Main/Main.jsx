import "./Main.scss";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

import bg_pill from "../../asset/bg-pill-blue.svg";
import bg_cube from "../../asset/bg-roundCube-orange.svg";
import bg_toroid from "../../asset/bg-superToroid-yellow.svg";

import img_key from "../../asset/img-key.png";

const Main = () => {
  const openPDF = () => {
    const url =
      "https://drive.google.com/file/d/1-_8CI5nPmsNI9auqEuin-QmIHh5eESQE/view?usp=drive_link";

    window.open(url, "_blank");
  };

  return (
    <section className="mainSection" id="main">
      <div className="eclipse1"></div>
      <div className="eclipse2"></div>
      <img
        src={bg_pill}
        alt="backgroundAsset"
        className="bg-pill-Blue-Glossy"
      />
      <img
        src={bg_cube}
        alt="backgroundAsset"
        className="bg-roundCube-Orange-Glossy"
      />
      <img
        src={bg_toroid}
        alt="backgroundAsset"
        className="bg-superToroid-yellow"
      />

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
            <button className="btn-hover color-3" onClick={openPDF}>
              Resume &nbsp;
              <HiArrowNarrowRight
                size={16}
                style={{ position: "absolute", top: "16px" }}
              />
            </button>
            {/* <a href="#intropage">
              <button className="btn-hover color-3 btn-intro">
                About Me &nbsp;
                <HiArrowNarrowRight
                  size={16}
                  style={{ position: "absolute", top: "16px" }}
                  className="arrowIcon"
                  color="white"
                />
              </button>
            </a> */}
          </div>
        </div>

        <div className="keyImage">
          <img src={img_key} alt="keyImage" />
        </div>
      </div>
    </section>
  );
};

export default Main;
