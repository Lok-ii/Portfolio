import React from "react";
import "./aboutpage.css";
import aboutData from "../../Data/aboutMe.json";
import AboutSection from "../AboutSection/AboutSection";
import Aboutme from "../AboutMe/Aboutme";

const AboutPage = () => {
  return (
    <div className="aboutPage">
      <Aboutme />
      {aboutData.map((item, idx) => {
        return (
          <AboutSection
            key={idx}
            sectionName={item.category}
            data={item.items}
            id={item.id}
          />
        );
      })}
    </div>
  );
};

export default AboutPage;
