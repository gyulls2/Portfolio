import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';

const TimeLine = () => {
  return (
    <Timeline className="timeLine"
    sx={{
      [`& .${timelineItemClasses.root}:before`]: {
        flex: 0,
        padding: 0,
      },
    }}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: "#407BFF" }} />
          <TimelineConnector sx={{ bgcolor: "#407BFF" }} />
        </TimelineSeparator>
        <TimelineContent>
          <span className="timeLineTitle">Education</span>
          <p>
            <span className="contentsTitle">
              기업연계형 프론트엔드 실무 프로젝트 과정
              <span className="normal"> (2022.10.14 ~ 2023.01.26)</span>
            </span>
            <br />
            <span>
              청년취업사관학교 새싹(SeSAC)
              <br />
            </span>
            <span className="contents">
              Javascript, React, Typescript의 기본 문법을 익히고 React와 관련된
              훅, 라이브러리들을 학습하였습니다. 블록체인 관리자 페이지를 주제로
              디지털존과의 실무 프로젝트를 경험하였습니다.
            </span>
          </p>
          <p>
            <span className="contentsTitle">
              청년 반응형 프론트엔드 개발자 양성과정
              <span className="normal"> (2022.06 ~ 2022.09)</span>
            </span>
            <span>
              <br />
              대우직업능력개발원
              <br />
            </span>
            <span className="contents">
              HTML, CSS, JQuery 를 활용한 반응형 페이지 제작과 Figma, Photoshop,
              Illustrator 를 활용한 스토리보드, 와이어프레임, 프로토타입 제작에
              대해 배웠으며 총 3번의 팀 프로젝트를 진행하였습니다.
            </span>
          </p>
          <p>
            <span className="contentsTitle">성신여자대학교</span>
            <br />
            2015.03 ~ 2021.02 졸업
            <br />
            식품영양학과 학사
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: "#407BFF" }} />
          <TimelineConnector sx={{ bgcolor: "#407BFF" }} />
        </TimelineSeparator>
        <TimelineContent>
          <span className="timeLineTitle">Skill</span>
          <p className="skills">
            Programing Languages &nbsp;&nbsp;&nbsp;
            <span className="bold">
              JavaScript(ES6), TypeScript, HTML5, CSS3, SaSS
            </span>
            <br />
            Framework / Library &nbsp;&nbsp;&nbsp;
            <span className="bold">React, JQuery</span>
            <br />
            ETC &nbsp;&nbsp;&nbsp;
            <span className="bold">
              Github, Figma, Notion, Firebase, JSON-server
            </span>
          </p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default TimeLine;
