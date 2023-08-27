import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import "./Components.css";
import Navbartop from "./Navbar";
import Cubepics from "./Cubepics";
import * as THREE from "three";
import Sphereblob from "./Sphereblob";

const Main = ({ func }) => {
  const [textures, setTextures] = React.useState([]);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    setTextures([
      textureLoader.load("/Images/react2.png"),
      textureLoader.load("/Images/express.png"),
      textureLoader.load("/Images/mdb.png"),
      textureLoader.load("/Images/html.png"),
      textureLoader.load("/Images/django.png"),
      textureLoader.load("/Images/python.png"),
    ]);
    if (count < 12) {
      setTextures([]);
      setCount(count + 1);
    }
  }, [count]);

  return (
    <section className="Main">
      <Navbartop func={func} />
      <div className="Main-div">
        <div className="right-div">
          <div className="Intro">
            <h2>Hello </h2>
            <h2>welcome to my portfolio!</h2>
            <div className="blinker-container">
              <h4 className="Intro-h"> I Love Coding and Data </h4>
            </div>
          </div>
          <div className="webdev">
            <img src={"./Images/webdev.png"} alt="webdev" />
          </div>
        </div>
        <div className="left-div">
          <div className="skills-images">
            <img src={"Images/mdb.png"} style={{ width: "15%" }}></img>
            <img src={"Images/express.png"} style={{ width: "25%" }}></img>
            <img src={"Images/react2.png"} style={{ width: "15%" }}></img>
            <img src={"Images/node.png"} style={{ width: "25%" }}></img>
            <img src={"Images/python.png"}></img>
            <img src={"Images/django.png"} style={{ width: "25%" }}></img>
            <img src={"Images/jp.png"}></img>
            <img src={"Images/git.png"} style={{ width: "15%" }}></img>
            <img src={"Images/github.png"} style={{ width: "15%" }}></img>
          </div>
          <div className="sphere">
            <Canvas camera={{ fov: 75, position: [0, 0, 4] }}>
              <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={5}
                rotation={[Math.PI / 4, Math.PI / 4, Math.PI / 4]}
              />
              <ambientLight intensity={0.2} />
              <directionalLight position={(3, 2, 1)} />
              {/* <Cubepics textures={textures} /> */}
              <Sphereblob />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
