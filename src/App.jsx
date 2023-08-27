import "./App.css";
import React from "react";
import Main from "./Components/Main";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";

function App() {
  const main = React.useRef(null);
  const skills = React.useRef(null);
  const projects = React.useRef(null);
  const contact = React.useRef(null);
  // const testd = React.useRef(null);
  const elements = [main, projects, skills, contact];
  function scrolltoElement(index) {
    elements[index].current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="App">
      <div ref={main}>
        <Main func={scrolltoElement} />
      </div>
      <div ref={projects}>
        <Projects />
      </div>
      <div ref={skills}>
        <Skills />
      </div>
      <div ref={contact}>
        <Contact />
      </div>
      {/* <div ref={testd}>
        <TestD />
      </div> */}
    </div>
  );
}

export default App;
