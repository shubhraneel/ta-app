import React from "react";
import PropTypes from "prop-types";

import "./DeleteConfirm.css";

const DeleteConfirm = (props) => {
  return (
    <div className="delete-popup">
      <h2>
        Are you sure you want to delete participant {props.participant.name} (
        {props.participant.roll}) from subject {props.subject} (
        {props.subjectCode})?
      </h2>
      <div
        className="delete-button-inside"
        onClick={() => {
          props.deleteParticipant(props.deleteId);
          props.showDeletePopup(props.id);
        }}
      >
        Yes
      </div>
      <div
        className="delete-button-inside"
        onClick={() => props.showDeletePopup()}
      >
        Cancel
      </div>
    </div>
  );
};

DeleteConfirm.propTypes = {
  participant: PropTypes.shape({
    name: PropTypes.string,
    roll: PropTypes.string,
  }),
  subjectCode: PropTypes.string,
  subject: PropTypes.string,
  deleteId: PropTypes.string,
  id: PropTypes.string,
  showDeletePopup: PropTypes.func,
  deleteParticipant: PropTypes.func,
};

export default DeleteConfirm;
