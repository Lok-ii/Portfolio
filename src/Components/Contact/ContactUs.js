import React, {useState} from 'react';
import "./contactus.css";

const ContactUs = () => {
  const [copy, setCopy] = useState("Copy");
  return (
    <div className='contactPage'>
        <h1 className="aboutHeading">
        Contact
        <span className="headingBorder"></span>
      </h1>
      <div className="emailContainer">
        <p className="emailText">Email:</p>
        <div className="email">
          <p className="emailId">
          oktayshakirov@gmail.com
          </p>
          <p className="copy" onClick={()=>{
            navigator.clipboard.writeText('oktayshakirov@gmail.com');
            if(copy==="Copy"){
              setCopy("Copied");
            }else{
              setCopy("Copy");
            }
          }}>{copy}</p>
        </div>
      </div>
      <div className="scheduleCall">
        <p className="callText">Schedule Video Call With Me:</p>
        <div className="callImage">
          <img src="https://oktayshakirov.com/assets/images/calendar.png" alt="" />
        </div>
      </div>
      <div className="socialSection">
        <p className="socialHeading">Socials:</p>
        <div className="socialImages">
          <a href="https://github.com/lok-ii" className="githubLink"><img src="https://oktayshakirov.com/assets/images/socials/github.png" alt="" /></a>
          <a href="https://www.linkedin.com/in/lokesh--kataria/" className="linkedinLink"><img src="https://oktayshakirov.com/assets/images/socials/linkedin.png" alt="" /></a>
          <a href="" className="instagramLink"><img src="https://oktayshakirov.com/assets/images/socials/instagram.png" alt="" /></a>
          <a href="" className="twitterLink"><img src="https://oktayshakirov.com/assets/images/socials/twitter.png" alt="" /></a>
        </div>
      </div>
      <div className="supportSection">
        <p className="supportHeading">
        Support My Work:
        </p>
        <p className="supportDesc">
        Your support fuels my development journey! With every small donation, you contribute to hostings, domains and other essential costs. All my work is open source and free for everyone to use.
        </p>
        <div className="supportButtons">
          <img src='https://oktayshakirov.com/assets/images/coffee-sponsort.png' className="coffee"></img>
          <img src="https://oktayshakirov.com/assets/images/github-sponsors.png" alt="" className="sponsors" />
          <img src="https://oktayshakirov.com/assets/images/paypalme.png" alt="" className="paypal" />
        </div>
      </div>
      
    </div>
  )
}

export default ContactUs;
