import React from "react";
import "./project.css";

const Project = (props) => {
  return (
    <div className="project">
      <div className="projectImg">
        <img src={props.img} alt="" />
      </div>
      <div className="projDetails">
        <p className="projTitle">{props.title}</p>
        <p className="projCategory">{props.detail}</p>
        <p className="techUsed">{props.technology}</p>
      </div>
      <button className="previewBtn">
        <i class="fa-regular fa-eye"></i> Preview
      </button>
    </div>
  );
};

export default Project;
