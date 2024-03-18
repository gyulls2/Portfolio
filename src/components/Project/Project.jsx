import React from "react";
import "./Project.scss";

import Project01 from "./Project01";
import Project02 from "./Project02";
import Project03 from "./Project03";
import Project04 from "./Project04";

const Project = () => {
  return (
    <div id="project">
      <div className="wrapper">
        <h2 className="a11y-hidden">PROJECT</h2>
        <Project01 />
        <Project02 />
        <Project03 />
        <Project04 />
      </div>
    </div>
  );
};

export default Project;
