import "./aboutcard.css";
import Progressbar from "../ProgressBar/Progressbar";

const AboutCard = (props) => {
  if (
    props.sectionName === "Primary Focus" ||
    props.sectionName === "Exploring Creativity" ||
    props.sectionName === "Favorite Activities"
  ) {
    return (
      <div className="aboutCard">
        <div className="sectionImage" id={props.id}>
          <img src={props.image} alt={props.name} />
        </div>
        <div className="detailsSection">
          <h3 className="cardName">{props.name}</h3>
          <p className="cardDescription">{props.content}</p>
        </div>
      </div>
    );
  } else if (
    props.sectionName === "Programming Languages" ||
    props.sectionName === "Human Languages"
  ) {
    return (
      <div className="skillsCard">
        <p className="languageName">{props.name}</p>
        <p className="prof">{props.proficiency}</p>
        <Progressbar progress={props.progress} />
      </div>
    );
  } else if (props.sectionName === "Development Skills") {
    return (
      <div className="techList">
        <img src={props.image} alt={props.id} />
      </div>
    );
  }
};

export default AboutCard;
