import React, { useState } from "react";
import "./projectpage.css";
import projectData from "../../Data/projects.json";
import Project from "./Project/Project";

const ProjectPage = () => {
  const [projects, setProjects] = useState(projectData);

  const selectCategory = (e) => {
    if (e.target.classList.contains("all")) {
      e.target.classList.add("selected");
    }
  };
  return (
    <div className="projectPage">
      <h1 className="aboutHeading">
        Certificates
        <span className="headingBorder"></span>
      </h1>
      <div className="projectList">
        <div className="projectOptions" onClick={selectCategory}>
          <button className="all option selected" autoFocus>
            All
          </button>
          <button className="websites option">Websites</button>
          <button className="apps option">Applications</button>
          <button className="games option">Games</button>
        </div>
        <div className="projListCont">
          {projects.map((item, idx) => {
            return (
              <Project
                img={item.img}
                title={item.title}
                detail={item.detail}
                technology={item.technology}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
