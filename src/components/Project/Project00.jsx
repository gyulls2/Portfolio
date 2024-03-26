import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import { BiLink } from "react-icons/bi";

import proj00 from "../../asset/proj00.png";

const Project00 = () => {
  return (
    <section className="projectSection">
      <h2 className="a11y-hidden">PROJECT</h2>
      <p className="title">PROJECT</p>
      <h3>SUBONE</h3>

      <div className="projectWrap">
        <div className="projectLeft">
          <a
            href="https://frontendschool7.github.io/villains/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={proj00} alt="proj00" />
          </a>
          <p>
            2023.10.12 ~ 2023.11.09
            <br />
            팀 프로젝트 (4인)
            <br /> <br />
            <a
              href="https://frontendschool7.github.io/villains/"
              target="_blank"
              rel="noopener noreferrer"
              className="underLine"
            >
              배포 링크&nbsp;
              <BiLink size={20} style={{ position: "relative", top: "5px" }} />
            </a>
            <br />
            <a
              href="https://github.com/FRONTENDSCHOOL7/villains"
              target="_blank"
              rel="noopener noreferrer"
              className="underLine"
            >
              README&nbsp;
              <BiLink size={20} style={{ position: "relative", top: "5px" }} />
            </a>
            <br />
            <a
              href="https://www.figma.com/file/ChSjZuBQFDF8FJxwrXAgja/villains_figma?type=design&node-id=102535%3A1224&mode=design&t=C0UAVKtFe9fZP34U-1"
              target="_blank"
              rel="noopener noreferrer"
              className="underLine"
            >
              Figma&nbsp;
              <BiLink size={20} style={{ position: "relative", top: "5px" }} />
            </a>
            <br />
            <a
              href="https://sleepingoff.notion.site/17a927fcbf4d42c4bd4b250e88201b46?v=174ea0763a4a4ad88f40bf32031db8c0&pvs=4"
              target="_blank"
              rel="noopener noreferrer"
              className="underLine"
            >
              팀 노션&nbsp;
              <BiLink size={20} style={{ position: "relative", top: "5px" }} />
            </a>
            <br />
            <a
              href="https://github.com/FRONTENDSCHOOL7/villains/wiki"
              target="_blank"
              rel="noopener noreferrer"
              className="underLine"
            >
              Github Wiki&nbsp;
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
                  SUBONE은 서울의 일상생활 속 교통과 커뮤니티를 연결하는
                  서비스입니다. 서울 지하철 1호선 이용자를 위해{" "}
                  <span className="blue">
                    커뮤니티 기능을 통한 소통 및 편리한 지하철 택배 배송 서비스
                  </span>
                  를 제공합니다. 이 프로젝트에서 저는 디자인 리더로 활동하며{" "}
                  <span className="blue">
                    Figma를 사용한 디자인 시스템 구축 및 UI/UX 디자인을 담당
                  </span>
                  했습니다. 또한 백앤드 API를 활용하여{" "}
                  <span className="blue">게시글 페이지를 개발</span>하였습니다.
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
                  React, React Query, Recoil, Axios, Vite, Styled-components,
                  Figma, Github
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
                <p className="last">
                  <span className="bold">CRUD 게시판:</span> RESTful API를
                  활용하여 사용자 인터랙션을 제공하는 CRUD 게시판 구현
                  <br />
                  <span className="bold">상태 관리:</span> React Query와
                  Recoil을 활용하여 효율적인 상태 관리 시스템 구축
                  <br />
                  <span className="bold">지도 상의 게시글 표시:</span> 카카오
                  지도 API를 이용해 사용자들이 올린 게시글을 지도 위에 표시
                  <br />
                  <span className="bold">지하철 도착정보 검색:</span> 서울
                  지하철 API를 활용해 실시간 도착 정보 검색 기능 제공
                  <br />
                  <span className="bold">공통 컴포넌트:</span> 커스텀 훅을
                  활용해 모달, 바텀시트, 무한 스크롤 등의 공통 UI 컴포넌트 구현
                  <br />
                  <span className="bold">Form 데이터 관리:</span>{" "}
                  react-hook-form을 사용하여 효율적으로 폼 데이터 관리
                </p>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </section>
  );
};

export default Project00;
