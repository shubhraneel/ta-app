import React from "react";
import Logo from "./Logo";

import "./TaAssist.css";

const TaAssist = (props) => {
  return (
    <div className="information">
      <div className="information-logo">
        <Logo />
      </div>
      <div className="information-info">Manage courses and student enrollment easily</div>
      <div className="go-to-subjects-container">
        <div className="go-to-subjects" onClick={props.goToSubjects}>
          Go to Subjects
        </div>
      </div>
    </div>
  );
};

export default TaAssist;
