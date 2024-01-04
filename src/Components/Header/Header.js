import React from "react";
import "./header.css";

const Header = (props) => {
  const changeTab = (e) => {
    const tabs = document.querySelectorAll(".links");
    tabs.forEach((item) => {
      item.classList.remove("selected");
    });
    if (e.target.classList.contains("about")) {
      props.setTab("about");
      e.target.classList.add("selected");
    } else if (e.target.classList.contains("certificates")) {
      props.setTab("certificates");
      e.target.classList.add("selected");
    } else if (e.target.classList.contains("projects")) {
      props.setTab("projects");
      e.target.classList.add("selected");
    } else if (e.target.classList.contains("more")) {
      props.setTab("more");
      e.target.classList.add("selected");
    } else {
      props.setTab("contact");
      e.target.classList.add("selected");
    }
  };
  return (
    <header>
      <p className="links about selected" onClick={changeTab}>About</p>
      <p className="links certificates" onClick={changeTab}>Certificates</p>
      <p className="links projects" onClick={changeTab}>Projects</p>
      <p className="links more" onClick={changeTab}>More</p>
      <p className="links contact" onClick={changeTab}>Contact</p>
    </header>
  );
};

export default Header;
