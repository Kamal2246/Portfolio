import React from "react";
import "./Components.css";

const Project_component = ({ data }) => {
  // React.useEffect(() => {
  //   const openLinkInNewTab = () => {
  //     const newTab = window.open(
  //       "https://clonebackend-nzwz.onrender.com/",
  //       "_blank"
  //     );
  //     setTimeout(() => newTab.close(), 4000);
  //   };

  //   const link = document.getElementById("myLink");
  //   link && link.addEventListener("click", openLinkInNewTab);

  //   return () =>
  //     link ? link.removeEventListener("click", openLinkInNewTab) : "";
  // }, []);

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
              <img src={data.pic} alt={data.title} />
            </div>
            <div className="project-title">
              <a href={data.link} className="projectlink" target="_blank">
                {data.title}
              </a>
              <a href={data.code} className="gitlink" target="_blank">
                Git Repo
              </a>
              {data.bcode ? (
                <a href={data.bcode} className="gitlink" target="_blank">
                  Backend Git Repo
                </a>
              ) : (
                ""
              )}
            </div>
            <div className="project-desc">{data.desc}</div>

            {/* {data.backlink && (
              <div className="project-desc">
                <span id="myLink">Click Here....</span>
                if content is not Loading
              </div>
            )} */}
          </div>
        );
      })}
    </div>
  );
};

export default Project_component;
