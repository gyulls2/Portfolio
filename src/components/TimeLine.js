import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const TimeLine = () => {
  return (
    <Timeline className="timeLine">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: "#407BFF" }} />

          <TimelineConnector sx={{ bgcolor: "#407BFF" }} />
        </TimelineSeparator>
        <TimelineContent>
          <span className="timeLineTitle">Introduce</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringillaaccumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus.
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: "#407BFF" }} />
          <TimelineConnector sx={{ bgcolor: "#407BFF" }} />
        </TimelineSeparator>
        <TimelineContent>
          <span className="timeLineTitle">Education</span>
          <p>
            <span>기업연계형 프론트엔드 실무 프로젝트 과정</span>
            <br />
            청년취업사관학교 새싹(SeSAC)
            <br />
            2022.10.14 ~ 2023.01.26
          </p>
          <p>
            <span>청년 반응형 프론트엔드 개발자 양성과정</span>
            <br />
            대우직업능력개발원
            <br />
            2022.06 ~ 2022.09
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
            <span>JavaScript(ES6), TypeScript, HTML5, CSS3, SaSS</span>
            Framework / Library &nbsp;&nbsp;&nbsp;
            <span>React, JQuery</span>
            <br />
            ETC &nbsp;&nbsp;&nbsp;
            <span>Github, Figma, Notion, Firebase, JSON-server</span>
          </p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default TimeLine;
