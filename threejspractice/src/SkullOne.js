import React, { useEffect, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./styles.scss";

const SkullOne = (props) => {
  const [model, setModel] = useState();
  // This Model was made by azzamah, and found at https://sketchfab.com/3d-models/card-130ec74a08b2445c91aae106d738d01e
  useEffect(() => {
    new GLTFLoader().load("./Skull1/scene.gltf", setModel);
  }, []);

  // models returns if loaded
  return model ? (
    <primitive object={model.scene} position={props.position} />
  ) : null;
};

export default SkullOne;
