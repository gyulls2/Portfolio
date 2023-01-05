import React from "react";
import "./Main.scss";
import { Button } from "antd";

const Main = () => {
  const clickHandler = () => {
    window.open("https://gyulls2.github.io/Portfolio/images/resume.pdf");
  };

  return (
    <section className="mainSection" id="main">
      <div className="wrapper">
        <div className="keyImage">
          <img
            src="https://gyulls2.github.io/Portfolio/images/key.png"
            alt="파일없음"
            className="key"
          />
        </div>
        <div className="keyText">
          <div>
            <h1>
              안녕하세요.
              <br />
              정직하게 성장하는 개발자, 김규리입니다.
            </h1>
            <p>
              ‘꾸준히, 즐겁게’라는 가치관으로 프론트엔드 개발 역량을 향상시키고
              있습니다.
              <br />
              섬세한 분석력과 협업의 가치를 실현하는 의사소통 역량으로 팀에
              기여하겠습니다.
            </p>
            <Button type="primary" className="moreBtn" onClick={clickHandler}>
              Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
