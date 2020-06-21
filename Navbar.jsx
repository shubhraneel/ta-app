import React from "react";

import Logo from "./Logo";
import ButtonNavbar from "./ButtonNavbar";

import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="navbar-logo-container">
      <Logo />
      </div>
      <div className="navbar-buttons-container">
        <ButtonNavbar page="subjects">Subjects</ButtonNavbar>
        <ButtonNavbar page="home">Home</ButtonNavbar>
      </div>
    </div>
  );
};

export default Navbar;
