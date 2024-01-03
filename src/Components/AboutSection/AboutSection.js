import AboutCard from "../AboutCards/AboutCard";
import "./aboutsection.css";
// import ProgressBar from "@ramonak/react-progress-bar";

const AboutSection = (props) => {
  return (
    <div className="aboutSection">
        <p className="sectionName">
            {props.sectionName}
        </p>
      <div className="sectionData" id={props.id}>
      {props.data.map((card, index) => {
        return <AboutCard key={card.id} id={card.id} sectionName={props.sectionName} image={card.svg} name={card.name} content={card.details} progress={card.progress} proficiency={card.proficiency} />;
      })}
      </div>
    </div>
  );
};

export default AboutSection;
