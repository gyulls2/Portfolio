import React from "react";
import "./Skills.scss";

const Skills = () => {
  return (
    <section className="skillsSection">
      <h1>Skills</h1>
      <div className="container">
        <div className="box">
          <img src="/logo192.png" alt="파일없음" />
          <h3>React</h3>
          <p>
            Component를 기반으로 코드를 기능별로 나눠서 작성할 수 있음 JSX
            문법을 사용해 view를 구성할 수 있음
          </p>
        </div>
        <div class="updown"></div>
        <div className="box">
          <img src="/logo192.png" alt="파일없음" />
          <h3>JavaScript / TypeScript</h3>
          <p>
            vanilla Javascript로 사이트를 제작할 수 있음 ES6 문법 능숙하게 사용
            가능 Typescript를 통한 객체지향 프로그래밍 가능 fetch, ajax 를 통한
            데이터 통신, API 활용 가능
          </p>
        </div>
        <div class="updown"></div>
        <div className="box">
          <img src="/logo192.png" alt="파일없음" />
          <h3>CSS3 / SaSS</h3>
          <p>
            미디어 쿼리를 활용해 반응형 사이트를 제작할 수 있음 SaSS의
            mixin문법을 활용해 중복된 스타일 코드를 줄이는걸 선호합니다.
          </p>
        </div>
        <div class="updown"></div>
        <div className="box">
          <img src="/logo192.png" alt="파일없음" />
          <h3>HTML</h3>
          <p>웹표준을 준수하여 사이트를 만들 수 있음</p>
        </div>
      </div>
      <h1>.etc</h1>
      <div className="container">
        <div className="box">
          <img src="/logo192.png" alt="파일없음" />
          <h3>Github</h3>
          <p>
            github 블로그 운영 pull, push, marge 등의 명령어 능숙하게 활용
            Commit convention을 통한 협업 경험이 있음
          </p>
        </div>
        <div class="updown"></div>
        <div className="box">
          <img src="/logo192.png" alt="파일없음" />
          <h3>Figma</h3>
          <p>Figma를 이용한 프로젝트 디자인 시안 제작 경험이 있습니다.</p>
        </div>
        <div class="updown"></div>
        <div className="box">
          <img src="/logo192.png" alt="파일없음" />
          <h3>Notion</h3>
          <p>
            노션 문서 작성에 능숙하며 노션을 통한 협업, 일정관리 경험이 있음
          </p>
        </div>
        <div class="updown"></div>
        <div className="box">
          <img src="/logo192.png" alt="파일없음" />
          <h3>vs code</h3>
          <p>주로 vscode를 통해 작업을 진행합니다.</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
