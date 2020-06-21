import React from "react";
import PropTypes from "prop-types";

import Delete from "./Delete";

import "./Participant.css";

const Participant = (props) => {
  return (
    <div className="participant-card">
      <div className="participant-name">{props.name}</div>
      <div className="participant-roll">{props.roll}</div>
      <div className="participant-delete">
        <Delete showDeletePopup={props.showDeletePopup} id={props.id} />
      </div>
    </div>
  );
};

Participant.propTypes = {
  name: PropTypes.string,
  roll: PropTypes.string,
  id: PropTypes.number,
  showDeletePopup: PropTypes.func,
};

export default Participant;
