import React from "react";
import "./Components.css";
import Project_component from "./Project_component";

const items = [
  "Full-Stack",
  "JavaScript",
  "CSS",
  "React",
  "Django",
  "Miscelleneous",
];
const fullStack = [
  {
    pic: "/Images/sorting.PNG",
    url: "/airbnb/index.html",
    title: "AirBnb Clone",
    desc: "Still Need hosting",
  },
];
const react = [];
const django = [];
const misc = [];
const js = [
  {
    pic: "/Images/sorting.PNG",
    url: "/sorting/home.html",
    title: "Sorting Project",
    desc: "Basic Sorting Algorithms Visualization",
  },
];
const css = [
  {
    pic: "/Images/cssporject1.PNG",
    url: "/css_project-2/home.html",
    title: "CSS Project 1",
    desc: "Simple Css project without any functionality",
  },
];
const Projects = () => {
  const [object, setObject] = React.useState(items[0]);

  return (
    <section className="Projects">
      <div className="right-project-div">
        {items.map((data) => {
          return (
            <p
              className="text-items"
              text={data}
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
        {object === items[0] && <Project_component data={fullStack} />}
        {object === items[1] && <Project_component data={js} />}
        {object === items[2] && <Project_component data={css} />}
        {object === items[3] && <Project_component data={react} />}
        {object === items[4] && <Project_component data={django} />}
        {object === items[5] && <Project_component data={misc} />}
      </div>
    </section>
  );
};

export default Projects;
