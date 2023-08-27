import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cube = () => {
  const textRef = useRef(null);
  useFrame((state) => {
    textRef.current.position.x = Math.sin(state.clock.elapsedTime) / 2;
    textRef.current.position.y = Math.cos(state.clock.elapsedTime) / 2;
    textRef.current.position.z = Math.cos(state.clock.elapsedTime) / 1.5;
  });

  return (
    <mesh rotation={[0, 0, Math.PI / 6]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 2]} />
          <color attach="background" args={["yellow"]} />
          <Text ref={textRef} fontSize={0.25} color="#555">
            Hello
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
