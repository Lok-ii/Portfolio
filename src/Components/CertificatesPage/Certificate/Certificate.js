import React from 'react';
import "./certificate.css";

const Certificate = (props) => {
  return (
    <div className='Certificate'>
        <p className="certName">{props.name}</p>
        <div className="certCont">
            <p className="certDetail">{props.detail}</p>
            <div className="certImage">
                <img src={props.image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Certificate;
