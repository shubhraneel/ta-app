import React from "react";
import PropTypes from "prop-types";

import "./Notification.css";

const Notification = (props) => {
  return (
    
      <div className="notification">
        <h2>{props.text}</h2>
      </div>
    
  );
};

Notification.propTypes = {
  text: PropTypes.string,
};

export default Notification;
