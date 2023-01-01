import React from "react";
import "./Project01.scss";
import Timeline from "@mui/lab/Timeline";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";

const Project01 = () => {
  return (
    <section className="project01Section">
      <h1>PROJECT</h1>
      <h3>갈피를 잡다</h3>

      <div className="projectWrap">
        <div className="projectLeft">
          <img src="/images/project01.png" alt="파일없음" />
          <p>
            2022/11/14 → 2022/11/23
            <br />
            개인프로젝트
            <br />
            Javascript, HTML, CSS, Figma, Firebase <br />
            배포 주소 : http://www.
            <br />
            Github : http://www.
            <br />
            velog 회고록 : http://www.
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
                  카카오 도서 API를 활용한 책 검색 & 책갈피 생성 사이트입니다.
                  사용자가 입력한 책갈피를 생성하여 JSON-server에 저장하는
                  기능을 구현하였습니다. 서비스 기획부터 디자인, 반응형 사이트
                  제작, 기능 구현까지 전담하여 업무를 수행하였습니다.
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
                <p>
                  JavaScript
                  <br />
                  Ajax를 통한 API 통신
                  <br />
                  JSON-server (배포를 위해 Firebase DB로 리팩토링)
                </p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: "#407BFF" }} />
                <TimelineConnector sx={{ bgcolor: "#407BFF" }} />
              </TimelineSeparator>
              <TimelineContent>
                <span className="timeLineTitle">주요 기능</span>
                <p>
                  책갈피 정렬(최신순, 오래된 순)
                  <br />
                  모달 → 책 정보, 책갈피 생성일 입력 받은 책갈피 문장
                  <br />
                  json데이터로 저장, 화면에 추가
                  <br />
                  도서 검색 기능
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
