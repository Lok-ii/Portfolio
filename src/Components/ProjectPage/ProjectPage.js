import React, {useState} from "react";
import "./projectpage.css";
import projectData from "../../Data/projects.json";
import Project from "./Project/Project";

const ProjectPage = () => {
    const [projects, setProjects] = useState(projectData);

    const selectCategory = (e)=>{
      if(e.target.classList.contains("all")){
        e.target.classList.add("selected");
      }
    }
  return (
    <div className="projectPage">
      <h1 className="aboutHeading">
        Certificates
        <span className="headingBorder"></span>
      </h1>
      <div className="projectList">
        <div className="projectOptions" onClick={selectCategory}>
            <p className="all option" autoFocus>All</p>
            <p className="websites option">Websites</p>
            <p className="apps option">Applications</p>
            <p className="games option">Games</p>
        </div>
        <div className="projListCont">
            {
                projects.map((item, idx)=>{
                    return <Project img={item.img} title={item.title} detail={item.detail} technology={item.technology} />
                })
            }
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
