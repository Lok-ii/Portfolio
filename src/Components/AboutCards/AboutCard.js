import "./aboutcard.css";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
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
        
        {/* <CircularProgressbar
          value={props.progress}
          text={`${props.progress}%`}
          styles={{
            // Customize the root svg element
            root: {
              width: "100px",
            },
            // Customize the path, i.e. the "completed progress"
            path: {
              // Path color
              stroke: `rgba(62, 152, 199, ${props.progress / 100})`,
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",
              // Customize transition animation
              transition: "stroke-dashoffset 0.5s ease 0s",
              // Rotate the path
              transform: "rotate(0.25turn)",
              transformOrigin: "center center",
            },
            // Customize the circle behind the path, i.e. the "total progress"
            trail: {
              // Trail color
              stroke: "#d6d6d6",
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",
              // Rotate the trail
              transform: "rotate(0.25turn)",
              transformOrigin: "center center",
            },
            // Customize the text
            text: {
              // Text color
              fill: "#f88",
              // Text size
              fontSize: "16px",
            },
            // Customize background - only used when the `background` prop is true
            background: {
              fill: "#3e98c7",
            },
          }}
        /> */}
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
