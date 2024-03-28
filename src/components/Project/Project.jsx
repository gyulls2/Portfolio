import React from "react";
import "./Project.scss";

import Project01 from "./Project01";
import Project02 from "./Project02";
import Project03 from "./Project03";
import Project04 from "./Project04";
import Project00 from "./Project00";

const Project = () => {
  return (
    <div id="project">
      <div className="wrapper">
        <h2 className="a11y-hidden">PROJECT</h2>
        <div className="section fp-scrollable"><Project00 /></div>
        <div className="section fp-scrollable"><Project01 /></div>
        <div className="section fp-scrollable"><Project02 /></div>
        <div className="section fp-scrollable"><Project03 /></div>
        <div className="section fp-scrollable"><Project04 /></div>
      </div>
    </div>
  );
};

export default Project;
