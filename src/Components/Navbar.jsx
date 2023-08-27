import React from "react";
import "./Components.css";

const Navbartop = ({ func }) => {
  return (
    <div className="NavHeader">
      <div className="left-head">
        <div className="logo">
          <a href="#" onClick={() => window.location.reload()}>
            <img src={"/Images/home.png"} alt="logo" />
          </a>
        </div>
        <div className="Nav-links">
          <div onClick={() => func(0)}>Home</div>
          <div onClick={() => func(1)}>Projects</div>
          <div onClick={() => func(2)}>Certificates</div>
          <div onClick={() => func(3)}>Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Navbartop;
