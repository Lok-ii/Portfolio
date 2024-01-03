import React from "react";
import "./progressbar.css";

const Progressbar = (props) => {
  const Parentdiv = {
    height: "8px",
    width: "100%",
    backgroundColor: "#383838",
    borderRadius: 40,
    marginTop: 20,
  };

  const Childdiv = {
    height: "100%",
    width: props.progress + "%",
    borderRadius: 40,
    textAlign: "right",
  };

  return (
    <div className="outerBar" style={Parentdiv}>
      <div className="innerBar" style={Childdiv}></div>
    </div>
  );
};

export default Progressbar;
