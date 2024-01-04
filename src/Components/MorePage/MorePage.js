import React from 'react';
import "./morepage.css";
import moreData from "../../Data/more.json"
import MoreCard from './MoreCard/MoreCard';

const MorePage = () => {
  return (
    <div className='morePage'>
        <h1 className="aboutHeading">
        Side Projects
        <span className="headingBorder"></span>
      </h1>
      <div className="moreCardList">
        {
            moreData.map((more)=>{
                return <MoreCard name={more.title} description={more.para} type={more.type} website={more.website} image={more.img} insta={more.insta} youtube={more.youtube}  />
            })
        }
      </div>
    </div>
  )
}

export default MorePage;
