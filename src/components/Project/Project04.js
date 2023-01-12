import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import "./Project04.scss";
import { BiLink } from "react-icons/bi";

const Project04 = ({ showModal }) => {
  return (
    <section className="projectSection">
      <h1>PROJECT</h1>
      <h3>달빛러닝페스티벌 랜딩페이지(반응형)</h3>

      <div className="projectWrap">
        <div className="projectLeft">
          <div className="imgBox">
            <img
              src="https://gyulls2.github.io/Portfolio/images/proj04.svg"
              alt="파일없음"
              style={{ width: "35%", marginRight: "5%" }}
              onClick={() =>
                showModal(
                  "https://gyulls2.github.io/Portfolio/images/proj04.svg"
                )
              }
            />
            <img
              src="https://gyulls2.github.io/Portfolio/images/proj05.svg"
              alt="파일없음"
              style={{ width: "35%" }}
              onClick={() =>
                showModal(
                  "https://gyulls2.github.io/Portfolio/images/proj05.svg"
                )
              }
            />
          </div>

          <p>
            2022/08/10 → 2022/08/17
            <br />
            팀 프로젝트 (3인)
            <br /> <br />
            <a href="http://tangerine.dothome.co.kr/" target="_blank" rel="noopener noreferrer">
              배포 링크&nbsp;
              <BiLink size={20} style={{ position: "relative", top: "5px" }} />
            </a>
            <br />
            <a
              href="https://gyulls2.github.io/Portfolio/images/project.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              발표 자료&nbsp;
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
                  달빛 러닝 페스티벌은 마라톤과 음악 페스티벌이 합쳐진 축제로,
                  페르소나 기법을 활용하여 기획하였습니다. 타겟층인{" "}
                  <span className="blue">MZ 세대의 흥미를 유도</span>할 수
                  있도록 캐릭터 굿즈, 스토리텔링, 달빛네컷 등 다양한 콘텐츠로
                  축제의 <span className="blue">랜딩 페이지를 구성</span>하였고,{" "}
                  <span className="blue">디자인 및 반응형 웹</span>을 제작
                  하였습니다. 3인으로 진행한 팀 프로젝트로, 팀장을 맡아
                  프로젝트를 수행하였습니다.
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
                <p>HTML, CSS, JQuery, Photoshop, Illustrator</p>
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
                  미디어 쿼리를 사용한 반응형 웹 구현
                  <br />
                  JQuery를 사용한 드롭다운 메뉴 구현
                  <br />
                  뷰 사이즈 변경 시 메뉴바 형태 변경
                  <br />
                  스크롤 위치에 따른 메뉴바 색상 변경
                  <br />
                  이미지 클릭 시 모달창으로 확대 기능
                  <br />
                  이미지 캐러셀 기능
                </p>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </section>
  );
};

export default Project04;
