import React from "react";
import "./Components.css";

const Project_component = ({ data }) => {
  return (
    <div className="Cards-Container">
      {data.length ? (
        ""
      ) : (
        <div className="info-data-null">No projects for this section yet </div>
      )}
      {data.map((data) => {
        return (
          <div className="Cards">
            <div className="info-pic">
              <a href={data.url} target="_blank">
                <img src={data.pic} alt={data.title} />
              </a>
            </div>
            <div className="info-data">{data.title}</div>
            <div className="info-data">{data.desc}</div>
            <a href={data.code} target="_blank">
              <p>Code</p>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Project_component;
