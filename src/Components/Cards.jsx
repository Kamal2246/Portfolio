import React from "react";
import "./Cards.css";

const Cards = ({ data }) => {
  return (
    <>
      <div
        className="cards"
        style={{
          background: `url("${data.pic}")`,
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          padding: "20px",
          width: "80%",
          height: "100%",
        }}
      >
        {" "}
        <div className="desc">{data.desc}</div>
        <div className="Info">
          <div className="links">
            <div className="url">
              <a href={data.link} target="_blank">
                To project
              </a>
            </div>
            <div className="gitrepo">
              <a href={data.code} target="_blank">
                {data.name ? data.name : "Gitrepo"}
              </a>
            </div>
            {data.bcode && (
              <div className="bendcode">
                <a href={data.bcode} className="gitlink" target="_blank">
                  Backend
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
