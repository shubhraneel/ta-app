import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import "./ButtonNavbar.css";

const ButtonNavbar = (props) => {
  let link = "";
  if (props.page === "home") {
    link = "/";
  } else if (props.page === "subjects") {
    link = "/subjects";
  }
  return (
    <Link to={link}>
      <div className={"button-navbar button-" + props.children}>{props.children}</div>
    </Link>
  );
};

export default ButtonNavbar;
