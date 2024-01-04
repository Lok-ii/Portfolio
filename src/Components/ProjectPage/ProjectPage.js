import React, { useState } from "react";
import "./projectpage.css";
import projectData from "../../Data/projects.json";
import Project from "./Project/Project";

const ProjectPage = () => {
  const [projects, setProjects] = useState(projectData);

  const selectCategory = (e) => {
    let options = document.querySelectorAll(".option");
    options.forEach((opt) => opt.classList.remove("selected"));
    if (e.target.classList.contains("websites")) {
      e.target.classList.add("selected");
      setProjects(()=>{
        return projectData.filter((proj) => proj.detail.includes("Website") || proj.detail.includes("Design"));
      });
    }else if (e.target.classList.contains("apps")) {
      e.target.classList.add("selected");
      setProjects(()=>{
        return projectData.filter((proj) => proj.detail === "Application" || proj.detail === "Fullstack Project")
      });
    } else if (e.target.classList.contains("games")) {
      e.target.classList.add("selected");
      setProjects(()=>{
        return projectData.filter((proj) => proj.detail.includes("Game"));
      });
    }else{
      e.target.classList.add("selected");
      setProjects(projectData);
    }
  };
  return (
    <div className="projectPage">
      <h1 className="aboutHeading">
        Projects
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
                preview={item.preview}
                github={item.github}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
