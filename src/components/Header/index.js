import React from "react";
import NavBar from "../Navbar/index";

const Header = props => {
  return (
    <header>
      <NavBar state={props.state} />
    </header>
  );
};

export default Header;