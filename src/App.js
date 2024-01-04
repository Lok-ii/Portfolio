import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidepanel from "./Components/Sidepanel/Sidepanel";
import AboutPage from "./Components/AboutPage/AboutPage";
import ProjectPage from "./Components/ProjectPage/ProjectPage";
import CertificatePage from "./Components/CertificatesPage/CertificatePage";

function App() {
  const [selectedTab, setSelectedTab] = useState("about");
  const [nextBtn, setNextBtn] = useState(0);

  const pageArray = ["about", "certificates", "projects", "more", "contact"];

  const changePage = ()=>{
    let headerOptions = document.querySelectorAll(".links");
    headerOptions.forEach((item)=> item.classList.remove("selected"));

    setNextBtn((prev)=>{
      let next = (prev + 1)%5;
      headerOptions[next].classList.add("selected");
      setSelectedTab(pageArray[next]);
      return next;
    });
    
  }

  return (
    <>
      <Sidepanel />
      <div className="App">
        <Header tab={selectedTab} setTab={setSelectedTab} />
        {
          (selectedTab === "about") ? <AboutPage /> : (selectedTab === "certificates") ? <CertificatePage /> : (selectedTab === "projects") ? <ProjectPage /> : ""
        }
        <div className="nextBtnCont">
          <button className="nextBtn" onClick={changePage}>
            Next <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
