import React from "react";
// import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Aboutme from "./Components/AboutMe/Aboutme";
import Sidepanel from "./Components/Sidepanel/Sidepanel";
import aboutData from "./Data/aboutMe.json";
import AboutSection from "./Components/AboutSection/AboutSection";

function App() {
  
  return (
    <>
      <Sidepanel />
      <div className="App">
        <Header />
        <Aboutme />
        {
          aboutData.map((item, idx)=>{
            return <AboutSection key={idx} sectionName={item.category} data={item.items} id={item.id} />
          })
        }
      </div>
    </>
  );
}

export default App;
