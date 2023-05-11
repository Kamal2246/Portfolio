import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import React from "react";

const Sphereblob = () => {
  return (
    <mesh>
      <Sphere args={[1, 100, 200]} scale={2.2}>
        <MeshDistortMaterial
          color="#ffff66"
          attach="material"
          distort={0.4}
          speed={2.5}
        />
      </Sphere>
    </mesh>
  );
};

export default Sphereblob;
