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
      props.setNextBtn(0);
      e.target.classList.add("selected");
    } else if (e.target.classList.contains("certificates")) {
      props.setTab("certificates");
      e.target.classList.add("selected");
      props.setNextBtn(1);
    } else if (e.target.classList.contains("projects")) {
      props.setTab("projects");
      e.target.classList.add("selected");
      props.setNextBtn(2);
    } else if (e.target.classList.contains("more")) {
      props.setTab("more");
      props.setNextBtn(3);
      e.target.classList.add("selected");
    } else if(e.target.classList.contains("contact")) {
      props.setTab("contact");
      e.target.classList.add("selected");
      props.setNextBtn(4);
    }
  };
  return (
    <header onClick={changeTab}>
      <p className="links about selected">About</p>
      <p className="links certificates">Certificates</p>
      <p className="links projects">Projects</p>
      <p className="links more">More</p>
      <p className="links contact">Contact</p>
    </header>
  );
};

export default Header;
