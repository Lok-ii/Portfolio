import React, {useEffect, useState} from "react";
import "./project.css";

const Project = (props) => {
  const [preview, setPreview] = useState(true);
  const [github, setGithub] = useState(true);
  const [prevColor, setPrevColor] = useState("rgba(0, 0, 0, 0.2)");
  const [gitColor, setGitColor] = useState("rgba(0, 0, 0, 0.2)");

  useEffect(()=>{
    const checkDisabled = ()=>{
      if(props.preview === ""){
        setPreview(true);
        setPrevColor("rgba(0, 0, 0, 0.1)");
      }else{
        setPreview(false);
        setPrevColor("rgba(0, 0, 0, 0.2)");
      }
    
      if(props.github === ""){
        setGithub(true);
        setGitColor("rgba(0, 0, 0, 0.1)");
      }else{
        setGithub(false);
        setGitColor("rgba(0, 0, 0, 0.2)");
      }
    }
    checkDisabled();
  }, []);
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
      <a href={props.preview} className="prevLink"><button className="previewBtn" style={{backgroundColor : prevColor}} disabled={preview}>
        <i class="fa-regular fa-eye"></i> Preview
      </button></a>
      <a href={props.github} className="gitLink">
      <button className="githubBtn" style={{backgroundColor : gitColor}} disabled={github}>
        <i class="fa-brands fa-github"></i> Github
      </button>
      </a>
    </div>
  );
};

export default Project;
