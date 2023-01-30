import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import { BiLink } from "react-icons/bi";

const Project03 = ({ showModal }) => {
  return (
    <section className="projectSection">
      <h1>PROJECT</h1>
      <h3>간편가계부</h3>

      <div className="projectWrap">
        <div className="projectLeft">
          <img
            src="https://gyulls2.github.io/Portfolio/images/proj03.svg"
            alt="파일없음"
            onClick={() =>
              showModal("https://gyulls2.github.io/Portfolio/images/proj03.svg")
            }
          />
          <p>
            2022/12/06 → 2022/12/18
            <br />
            개인 프로젝트
            <br /> <br />
            <a
              href="https://gyulls2.github.io/accounterbook_app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              배포 링크&nbsp;
              <BiLink size={20} style={{ position: "relative", top: "5px" }} />
            </a>
            <br />
            <a
              href="https://github.com/gyulls2/accounterbook_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github&nbsp;
              <BiLink size={20} style={{ position: "relative", top: "5px" }} />
            </a>
            {/* <br />
            velog 회고록&nbsp;
            <BiLink size={20} style={{ position: "relative", top: "5px" }} />
            &nbsp;(준비중) */}
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
          >
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: "#407BFF" }} />

                <TimelineConnector sx={{ bgcolor: "#407BFF" }} />
              </TimelineSeparator>
              <TimelineContent>
                <span className="timeLineTitle">프로젝트 소개</span>
                <p>
                  간단한 가계부 페이지로, Form에 수입, 지출을 입력받아 표로
                  정리하여 나타냅니다.{" "}
                  <span className="blue">차트 라이브러리를 사용</span>하여
                  가계부 내역을 한눈에 볼 수 있도록 데이터를 시각화하였습니다.
                  월별 수입과 지출을 나타내는 차트로{" "}
                  <span className="blue">월별 자산의 흐름을 쉽게 파악</span>할
                  수 있으며, 지출을 카테고리별로 나누어{" "}
                  <span className="blue">소비 분석 및 소비 성향을 파악</span>할
                  수 있도록 도넛 차트를 활용하였습니다. 개인 사이드 프로젝트로
                  React 사용 경험 및 숙련도 향상을 위해 진행하였습니다.
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
                <p>React, SaSS, Chart-js </p>
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
                  React Hooks를 사용한 상태 관리
                  <br />
                  Chart-js 라이브러리를 사용하여 차트 표현
                  <br />
                  소비 분석 레포트를 통해 사용자의 소비 성향 파악 가능
                  <br />
                  filter 메서드를 사용한 월별 필터 기능
                  <br />
                  MUI 라이브러리를 활용한 테이블 표현
                  <br />
                  SaSS를 활용한 컴포넌트 스타일링
                </p>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </section>
  );
};

export default Project03;
