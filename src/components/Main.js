import React from "react";
import "./Main.scss";
import { Button } from "antd";

const Main = () => {
  return (
    <section className="mainSection">
      <div className="keyImage">
        <img src="/images/key.png" alt="파일없음" className="key" />
      </div>
      <div className="keyText">
        <div>
          <h1>
            안녕하세요.
            <br />
            프론트엔드 개발자 김규리입니다.
          </h1>
          <p>
            협업을 위해 배려하며, 성장하기 위해 노력합니다.
            <br />
            조금 느려도 꾸준히, 즐겁게!
          </p>
          <Button type="primary" className="moreBtn">Know more</Button>
        </div>
      </div>
    </section>
  );
};

export default Main;
