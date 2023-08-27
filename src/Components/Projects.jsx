import React from "react";
import "./Components.css";
import Cards from "./Cards";

const items = ["Full-Stack", "JavaScript", "DataAnalysis"];
const fullStack = [
  {
    pic: "/Images/airbnb.PNG",
    url: "/airbnb/index.html",
    title: "AirBnb Clone",
    desc: "MERN Stack Implementation",
    code: "https://github.com/Kamal2246/AirbnbColneFrontend",
    bcode: "https://github.com/Kamal2246/AirbnbCloneBackend",
    link: "https://clonefrontend.netlify.app",
    backlink: "https://clonebackend-nzwz.onrender.com/",
    desc: (
      <div>
        Airbnb Clone:
        <ul>
          <li>Registration / Login</li>
          <li>Posting Ads</li>
          <li>Booking</li>
        </ul>
        HOSTINGS :<p>Frontend on Netlify, Backend on Render</p>
      </div>
    ),
  },
];
const da = [
  {
    pic: "/Images/fmcg.PNG",
    name: "Notebook",
    code: "https://www.kaggle.com/code/kds4622/customer-analysis-fmcg",
    link: "https://www.kaggle.com/code/kds4622/customer-analysis-fmcg",
    desc: (
      <div>
        FMCG Customer Analysis:
        <ul>
          <li>Exploratory Data Analysis</li>
          <li>Customer Segmentation</li>
          <li>Price Elasticity Analysis</li>
        </ul>
      </div>
    ),
  },
];

const js = [
  {
    pic: "/Images/sorting.PNG",
    link: "/sorting/home.html",
    title: "Sorting Project",
    code: "https://github.com/Kamal2246/Portfolio/tree/main/public",
    desc: "Basic Sorting Algorithms Visualization",
  },
];

const Projects = () => {
  const [object, setObject] = React.useState(null);

  return (
    <section className="Projects">
      <div className="right-project-div">
        {items.map((data) => {
          return (
            <p
              className="text-items"
              text={data}
              key={items.indexOf(data)}
              onClick={() => {
                setObject(data);
              }}
            >
              {data}
            </p>
          );
        })}
      </div>
      <div className="left-project-div">
        {!object && <h2>Select the Project you want to see</h2>}
        {object === items[0] &&
          fullStack.map((data) => {
            return <Cards data={data} key={fullStack.indexOf(data)} />;
          })}
        {object === items[1] &&
          js.map((data) => {
            return <Cards data={data} key={js.indexOf(data)} />;
          })}
        {object === items[2] &&
          da.map((data) => {
            return <Cards data={data} key={da.indexOf(data)} />;
          })}
      </div>
    </section>
  );
};

export default Projects;
