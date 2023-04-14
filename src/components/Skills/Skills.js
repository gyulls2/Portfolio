import React from "react";
import "./Skills.scss";
import { BsGithub } from "react-icons/bs";

const Skills = () => {
  return (
    <section className="skillsSection" id="skill">
      <div className="wrapper">
        <h1>Skills</h1>
        <div className="container">
          <div className="box">
            <img
              src="https://gyulls2.github.io/Portfolio/images/logo192.png"
              alt="파일없음"
            />
            <h3>React</h3>
            <p>
              Hooks를 활용한 상태관리 가능
              <br />
              JSX 문법을 사용한 view 구성 가능
              <br />
              react-router를 이용한 라우팅 가능
              <br />
              virtual DOM 및 컴포넌트 라이프사이클 이해
            </p>
          </div>
          <div class="updown"></div>
          <div className="box">
            <img
              src="https://gyulls2.github.io/Portfolio/images/js.png"
              alt="파일없음"
            />
            <h3>JavaScript / TypeScript</h3>
            <p>
              ES6+ 문법 능숙하게 사용 가능
              <br />
              fetch, Ajax로 데이터 통신, API 활용 가능
              <br />
              Typescript의 인터페이스와 클래스 사용 가능
            </p>
          </div>
          <div class="updown"></div>
          <div className="box">
            <img
              src="https://gyulls2.github.io/Portfolio/images/css.png"
              alt="파일없음"
            />
            <img
              src="https://gyulls2.github.io/Portfolio/images/sass.png"
              alt="파일없음"
            />
            <h3>CSS3 / SaSS</h3>
            <p>
              미디어 쿼리를 활용한 반응형 웹 제작 가능
              <br />
              Grid, Flex 속성을 이용한 레이아웃 구성
              <br />
              SaSS의 mixin문법을 활용해 중복된 스타일 코드 제거 가능
            </p>
          </div>
          <div class="updown"></div>
          <div className="box">
            <img
              src="https://gyulls2.github.io/Portfolio/images/html.png"
              alt="파일없음"
            />
            <h3>HTML</h3>
            <p>
              웹표준과 웹 접근성을 준수하여 웹페이지 제작 가능
              <br />
              시맨틱태그를 이용한 웹페이지 구성 가능
              <br />
              input, select 태그를 이용한 form 양식 작성 가능
            </p>
          </div>
        </div>
        <h1>.etc</h1>
        <div className="container">
          <div className="box">
            <BsGithub
              size={40}
              style={{ marginTop: "50px", marginRight: "15px" }}
            />
            <h3>Github</h3>
            <p>
              Commit convention을 통한 협업 경험
              <br />
              pull, push, commit 등의 git 명령어 사용 가능
            </p>
          </div>
          <div class="updown"></div>
          <div className="box">
            <img
              src="https://gyulls2.github.io/Portfolio/images/figma.png"
              alt="파일없음"
            />
            <h3>Figma</h3>
            <p>
              Figma 협업 경험
              <br />
              Figma로 프로토타입 제작 가능
              <br />
              Figma를 이용한 프로젝트 디자인 시안 제작 경험
            </p>
          </div>
          <div class="updown"></div>
          <div className="box">
            <img
              src="https://gyulls2.github.io/Portfolio/images/notion.png"
              alt="파일없음"
            />
            <h3>Notion</h3>
            <p>
              노션 페이지 관리, 문서 작성 가능
              <br />
              노션을 통한 협업과 일정관리 경험
            </p>
          </div>
          <div class="updown"></div>
          <div className="box">
            <img
              src="https://gyulls2.github.io/Portfolio/images/vscode.png"
              alt="파일없음"
            />
            <h3>vs code</h3>
            <p>주로 VS Code를 통해 작업 진행</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
