import React from "react";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";
import Controls from "./Controls";
import "./styles.scss";
import Skull from "./Skull";

export default function Animation() {
  return (
    <Canvas
      camera={{ position: [10, 0, -25] }}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFSoftShadowMap;
      }}
    >
      <fog attach="fog" args={["#cc7b32", 2, 50]} />
      <Controls />
      <ambientLight intensity={0.4} />
      <pointLight position={[-5, 5, 10]} penumbra={1} />
      <Skull />
    </Canvas>
  );
}
