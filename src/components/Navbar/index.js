import React from "react";
import "./style.css";

const NavBar = props => {
  return (
    <nav>
      <div className=" container justify-content-center">
        <ul>
          <li>
            <a href="/" alt="">
              Clicky Game
            </a>
          </li>
          <li>Click an Image to Start!</li>
          <li>
            Score: {props.state.score} | Best: {props.state.highScore}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
