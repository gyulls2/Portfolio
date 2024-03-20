import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import { BiLink } from "react-icons/bi";

const TimeLine = () => {
  return (
    <Timeline
      className="timeLine"
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: "#407BFF" }} />
          <TimelineConnector sx={{ bgcolor: "#407BFF" }} />
        </TimelineSeparator>
        <TimelineContent>
          <span className="timeLineTitle">Education</span>
          <p>
            <span className="contentsTitle">
              멋쟁이사자처럼 프론트엔드 스쿨
              <span className="normal"> (2022.10.14 ~ 2023.01.26)</span>
            </span>
            <br />
            <span>
              (주)멋쟁이사자처럼
              <br />
            </span>
            <span className="contents">
              HTML, CSS, Javascript, React의 심화 내용을 학습하고, 4인 팀
              프로젝트를 통해 실무 기술을 익혔습니다. 자바스크립트 딥다이브
              스터디에 참여하여 Javascript 에 대한 깊이 있는 학습을
              진행하였습니다.
            </span>
          </p>
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
              (주)디지털존과의 실무 프로젝트를 경험하였습니다.
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
            <span className="contentsTitle">
              한국방송통신대학교 <span className="normal"> (2023.08 ~)</span>
            </span>
            <br />
            컴퓨터과학과 편입
          </p>
          <p>
            <span className="contentsTitle">
              성신여자대학교
              <span className="normal"> (2015.03 ~ 2021.02 졸업)</span>
            </span>
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
          <span className="timeLineTitle">Experience</span>
          <p>
            <a
              className="contentsTitle"
              href="https://ridibooks.com/books/2773000079"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLink size={20} style={{ position: "relative", top: "5px" }} />
              불편함에서 시작된 FE개발자의 UX&UI 전자책 집필
              <span className="normal"> (2023.08 ~ 2023.11)</span>
            </a>
            <span className="contents">
              프론트엔드 개발자와 디자이너의 협업 스터디를 바탕으로, 강력한
              사용자 경험(UX) 구축을 위한 실용적 지침서를 집필했습니다.
            </span>
          </p>
          <p>
            <span className="contentsTitle">
              정보처리기사 필기
              <span className="normal"> (2023.05.14)</span>
            </span>
            <br />
            한국산업인력공단
          </p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default TimeLine;
