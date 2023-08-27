import React from "react";
import * as THREE from "three";

const Cubepics = ({ textures }) => {
  const materials = textures.map(
    (texture) =>
      new THREE.MeshLambertMaterial({
        map: texture,
        transparent: true,
        opacity: 1,
      })
  );
  const colorMaterial = new THREE.MeshLambertMaterial({ color: "red" });
  const geometry = new THREE.BoxBufferGeometry(2.1, 2.1, 2.1);
  const getCubeMesh = (geometry, materials) => {
    return (
      <mesh
        geometry={geometry}
        material={materials}
        rotation={[0, 0, Math.PI / 4]}
      >
        <meshLambertMaterial attachArray="material" map={textures[0]} />
        <meshLambertMaterial attachArray="material" map={textures[1]} />
        <meshLambertMaterial attachArray="material" map={textures[2]} />
        <meshLambertMaterial attachArray="material" map={textures[3]} />
        <meshLambertMaterial attachArray="material" map={textures[4]} />
        <meshLambertMaterial attachArray="material" map={textures[5]} />
      </mesh>
    );
  };
  return getCubeMesh(geometry, materials);
};

export default Cubepics;
