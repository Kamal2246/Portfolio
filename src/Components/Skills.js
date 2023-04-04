import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Cube from "./Cube";
import "./Components.css";
import Cubepics from "./Cubepics";

const Skills = () => {
  return (
    <section className="Skills">
      <div className="right-skill-div">
        <img src={"/Images/0 (1).png"} alt="right-div" />
      </div>
      <div className="left-skill-div">
        {/* <Canvas camera={{ fov: 75, position: [0, 0, 4] }}>
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={0.2} />
          <directionalLight position={(3, 2, 1)} />
          <Cube />
        </Canvas> */}
      </div>
    </section>
  );
};

export default Skills;
