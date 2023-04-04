import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Cubepics from "./Cubepics";
import Sphereblob from "./Sphereblob";

const TestD = () => {
  return (
    <section className="Test">
      <div className="right-Test-div">
        <Canvas camera={{ fov: 75, position: [0, 0, 3] }}>
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={0.2} />
          <directionalLight position={(3, 2, 1)} />
          {/* <Cubepics /> */}
        </Canvas>
      </div>
      <div className="left-Test-div">
        <img src={"/Images/0 (1).png"} alt="right-div" />
      </div>
    </section>
  );
};

export default TestD;
