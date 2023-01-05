import React from "react";
import "./Project.scss";

const Project = ({ children }) => {
  return (
    <div id="project">
      <div className="wrapper">{children}</div>
    </div>
  );
};

export default Project;
