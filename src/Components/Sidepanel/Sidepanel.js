import "./sidepanel.css";
import hourglass from "../../Resources/hourglass.svg";
import location from "../../Resources/location.svg";
import person from "../../Resources/person.svg";

const Sidepanel = () => {
  return (
    <div className="sidePanel">
        <img
          src="https://oktayshakirov.com/assets/images/avatar.jpg"
          alt=""
          className="avatar"
        />
        <h1>Lokesh Kataria</h1>
        <p className="helloWorld">Hello, World !</p>
        <hr />
        <div className="ageContainer">
          <div className="hourglass svgContainer">
            <img src={hourglass} alt="" />
          </div>
          <div className="ageDetails">
            <p className="ageText">AGE</p>
            <p className="age">25 years old</p>
          </div>
        </div>
        <div className="locationContainer">
          <div className="locationSvg svgContainer">
            <img src={location} alt="" />
          </div>
          <div className="locationDetails">
            <p className="locationText">LOCATION</p>
            <p className="location">Delhi, India</p>
          </div>
        </div>
        <div className="personalityContainer">
          <div className="person svgContainer">
            <img src={person} alt="" />
          </div>
          <div className="personalityDetails">
            <p className="personalityType">PERSONALITY TYPE</p>
            <p className="personality">ISTP-T</p>
          </div>
        </div>
        <div className="socialIcons">
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </div>
  )
}

export default Sidepanel;
