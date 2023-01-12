import "./Main.scss";
import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { HiCursorClick } from "react-icons/hi";

const Main = () => {
  const clickHandler = () => {
    window.open("https://gyulls2.github.io/Portfolio/images/resume.pdf");
  };

  const content = `안녕하세요.\n 정직하게 성장하는 개발자,\n 김규리입니다.`;
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setText((prev) => {
        let result = prev ? prev + content[count] : content[0];
        setCount(count + 1);

        if (count >= content.length) {
          setText("");
          setCount(0);
        }
        return result;
      });
    }, 200);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return (
    <section className="mainSection" id="main">
      <div className="wrapper">
        <div className="keyImage">
          <div onClick={clickHandler}>
            <img
              src="https://gyulls2.github.io/Portfolio/images/back-animate1.svg"
              alt="파일없음"
              className="key back"
            />
            <img
              src="https://gyulls2.github.io/Portfolio/images/website-creator-animate1.svg"
              alt="파일없음"
              className="key"
            />
          </div>
        </div>
        <div className="keyText">
          <div className="container">
            <h1 clsssName="textBox">
              <span className="text">{text}</span>
              <span className="blink">|</span>
            </h1>

            <p>
              ‘꾸준히, 즐겁게’라는 가치관으로 프론트엔드 개발 역량을 향상시키고
              있습니다.
              <br />
              섬세한 분석력과 협업의 가치를 실현하는 의사소통 역량으로 팀에
              기여하겠습니다.
            </p>
            <Button type="primary" className="moreBtn" onClick={clickHandler}>
              Resume &nbsp;
              <HiCursorClick
                size={18}
                style={{ position: "relative", top: "5px" }}
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
