import React, { useState } from "react";
import PropTypes from "prop-types";

import "./AddParticipant.css";

const AddParticipant = (props) => {
  const [newParticipant, setNewParticipant] = useState({ name: "", roll: "" });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setNewParticipant((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  return (
    <div className="add-participant">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (newParticipant.name !== "" && newParticipant.roll !== "") {
            props.addParticipant(newParticipant);
            setNewParticipant({ name: "", roll: "" });
          }
        }}
      >
        <div className="add-appear">
          <div className="add-detail">
            <input
              name="name"
              onChange={handleChange}
              className="add-input"
              type="text"
              placeholder="Name"
              value={newParticipant.name}
            />
          </div>
          <div className="add-detail">
            <input
              name="roll"
              onChange={handleChange}
              className="add-input"
              type="text"
              placeholder="Roll Number"
              value={newParticipant.roll}
              maxLength="9"
              minLength="9"
            />
          </div>
          {/* <div className="add-back">&lt;-</div> */}
          
        </div>
        <div className="add-button">
          <button type="submit"><i className="fas fa-plus" /></button>
        </div>
      </form>
    </div>
  );
};

AddParticipant.propTypes = {
  addParticipant: PropTypes.func,
};

export default AddParticipant;
