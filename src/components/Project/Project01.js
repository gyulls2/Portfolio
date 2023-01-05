import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import { BiLink } from "react-icons/bi";

const Project01 = () => {
  return (
    <section className="projectSection">
      <h1>PROJECT</h1>
      <h3>디지털존 블록체인 관리자 페이지</h3>

      <div className="projectWrap">
        <div className="projectLeft">
          <img
            src="https://gyulls2.github.io/Portfolio/images/proj01.svg"
            alt="파일없음"
          />
          <p>
            2022/12/12 → 2023/01/13
            <br />
            팀 프로젝트 (7인)
            <br /> <br />
            배포 링크&nbsp;
            <BiLink size={20} style={{ position: "relative", top: "5px" }} />
            &nbsp;(개발중)
            <br />
            <a
              href="https://github.com/jeongminhui/Digitalzone"
              target="_blank"
            >
              Github&nbsp;
              <BiLink size={20} style={{ position: "relative", top: "5px" }} />
            </a>
            <br />
            velog 회고록&nbsp;
            <BiLink size={20} style={{ position: "relative", top: "5px" }} />
            &nbsp;(준비중)
          </p>
        </div>

        <div className="projectRight">
          <Timeline
            className="projTimeLine"
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
            style={{ marginTop: "-30px" }}
          >
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: "#407BFF" }} />

                <TimelineConnector sx={{ bgcolor: "#407BFF" }} />
              </TimelineSeparator>
              <TimelineContent>
                <span className="timeLineTitle">프로젝트 소개</span>
                <p>
                  기업 연계 실무 프로젝트로, 디지털존의 블록체인 사업인
                  도큐체인의 관리자 페이지를 제작하였습니다. 스토리보드를
                  기반으로 디자인 시안을 제작하고, 웹 페이지를 구현하였습니다.
                  차트와 테이블을 이용하여 데이터를 신뢰성 있게 보여주되,
                  대시보드를 활용하여 트렌디하고 다채로운 뷰를 구성하였습니다.
                  블록 페이지를 전담하여 업무를 수행하였습니다.
                </p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: "#407BFF" }} />
                <TimelineConnector sx={{ bgcolor: "#407BFF" }} />
              </TimelineSeparator>
              <TimelineContent>
                <span className="timeLineTitle">주요 기술</span>
                <p>React, SaSS, Figma, Firebase, Github</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: "#407BFF" }} />
                <TimelineConnector sx={{ bgcolor: "#407BFF" }} />
              </TimelineSeparator>
              <TimelineContent>
                <span className="timeLineTitle">주요 기능</span>
                <p className="last">
                  React reducder, context를 활용한 상태 관리
                  <br />
                  react-router-dom 라이브러리를 활용한 라우팅
                  <br />
                  Firebase DB를 활용한 데이터 생성 및 관리
                  <br />
                  Firebase Authentication을 활용한 로그인 및 권한 관리
                  <br />
                  차트 라이브러리를 활용한 데이터 시각화
                  <br />
                  Form 제출 시 DB와 연동하여 데이터 입력, 수정, 삭제 기능
                  <br />
                  context를 활용하여 사용자 권한에 따라 뷰 구성 변경
                  <br />
                  filter 메서드를 사용한 전체 검색 기능
                </p>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </section>
  );
};

export default Project01;
