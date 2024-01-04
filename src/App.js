import React from "react";
// import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidepanel from "./Components/Sidepanel/Sidepanel";
import AboutPage from "./Components/AboutPage/AboutPage";
import ProjectPage from "./Components/ProjectPage/ProjectPage";

function App() {
  return (
    <>
      <Sidepanel />
      <div className="App">
        <Header />
        <AboutPage />
        {/* <ProjectPage /> */}
        <div className="nextBtnCont">
          <button className="nextBtn">
            Next <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
