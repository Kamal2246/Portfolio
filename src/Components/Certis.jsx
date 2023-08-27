import React from "react";
import "./Certis.css";

const Certis = ({ data }) => {
  return (
    <div
      className="certis"
      style={{
        background: `url("${data.img}")`,
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        padding: "20px",
      }}
    >
      <a href={data.link} target="_blank">
        <div className="verify">Verify Certificate</div>{" "}
      </a>
    </div>
  );
};

export default Certis;
