import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import { BiLink } from "react-icons/bi";

import proj02 from "../../asset/proj02.png";

const Project02 = () => {
  return (
    <section className="projectSection">
      <p className="title">PROJECT</p>
      <h3>갈피를 잡다</h3>

      <div className="projectWrap">
        <div className="projectLeft">
          <a
            href="https://sesac-5cabd.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={proj02} alt="proj02" />
          </a>
          <p>
            2022/11/14 → 2022/11/23
            <br />
            개인 프로젝트
            <br /> <br />
            <a
              href="https://sesac-5cabd.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underLine"
            >
              배포 링크&nbsp;
              <BiLink size={20} style={{ position: "relative", top: "5px" }} />
            </a>
            <br />
            <a
              href="https://github.com/gyulls2/semi_project_firebase"
              target="_blank"
              rel="noopener noreferrer"
              className="underLine"
            >
              Github&nbsp;
              <BiLink size={20} style={{ position: "relative", top: "5px" }} />
            </a>
            <br />
            <a
              href="https://velog.io/@tangerine/SeSAC-JavaScript-Semi-Project"
              target="_blank"
              rel="noopener noreferrer"
              className="underLine"
            >
              velog 회고록&nbsp;
              <BiLink size={20} style={{ position: "relative", top: "5px" }} />
            </a>
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
                  <span className="blue">
                    카카오 도서 API를 활용한 책 검색 & 책갈피 생성 사이트
                  </span>
                  입니다. 책을 읽고 기억에 남는 문장으로 자신만의 감성이 담긴
                  책갈피를 만들고, SNS로 공유하여 사용자의 독서 욕구를 자극하고
                  독서 행동을 이끌어 내고자 하는 의도를 갖고 서비스를
                  기획하였습니다. 사용자가 검색한 책에 코멘트를 입력하면,
                  책갈피를 생성해 화면에 띄워주고 데이터를 JSON-server에
                  저장하는 기능을 구현하였습니다.{" "}
                  <span className="blue">
                    기획부터 디자인, 반응형 사이트 제작, 기능 구현까지 전담
                  </span>
                  하여 업무를 수행하였습니다.
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
                <p>Javascript, HTML, CSS, Figma, Ajax, Firebase, JSON-server</p>
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
                  Ajax와 API 통신을 사용해 도서 검색 기능 구현
                  <br />
                  사용자에게 입력받은 책갈피 문장을 JSON-server에 저장
                  <br />
                  (JSON-server로 개발 후 배포를 위해 Firebase DB로 리팩토링)
                  <br />
                  책갈피 클릭 시 저장된 책 정보를 담은 모달창 생성
                  <br />
                  정규표현식으로 textarea 내 개행문자, 공백 검사
                  <br />
                  시간 순 책갈피 정렬 기능 구현
                  <br />
                  미디어 쿼리로 반응형 웹 구현
                </p>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </section>
  );
};

export default Project02;
