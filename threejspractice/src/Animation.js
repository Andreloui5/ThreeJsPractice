import React from "react";
import * as THREE from "three";

export default function Animation() {
  // create new scene
  const scene = new THREE.scene();
  // create camera variables
  const fov = 75;
  const aspectRatio = window.innerWidth / window.innerHeight;
  const near = 2;
  const far = 500;

  // setting up the camera
  const camera = new THREE.PerspectiveCamera(fov, aspectRatio, near, far);

  // create renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  return (
    <canvas>
      <p>"hey"</p>
    </canvas>
  );
}
