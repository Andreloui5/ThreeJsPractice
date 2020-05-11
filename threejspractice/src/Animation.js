import React, { useState, useRef, Component } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import React, { Component } from "react";
import * as THREE from "three";
import "./styles.scss";
import SkullOne from "./SkullOne";

class App extends Component {
  componentDidMount() {
    this.sceneSetup();
    this.addSceneObjects();
    this.startAnimationLoop();
  }

  // Scene setup
  sceneSetup = () => {
    const width = this.el.clientWidth;
    const height = this.el.clientHeight;

    this.scene = new THREE.Scene();
    // perspective camera takes (fov, aspect, near, and far)
    this.camera = new THREE.PerspectiveCamera(75, width / height, 2, 500);
    // positions camera away from objects
    this.camera.position.z = 5;

    // sets up renderer
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height);
    // mount using React ref:
    this.el.appendChild(this.renderer.domElement);
  };
  // Adding objects to scene
  addSceneObjects = () => {
    //start with a cube as placeholder
    const geometry = new THREE.BoxBufferGeometry(2, 2, 2);
    const material = new THREE.MeshPhongMaterial({
      color: 0x156289,
      emissive: 0x072534,
      side: THREE.DoubleSide,
      flatShading: true,
    });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    // adds lighting to the scene
    const ambientLight = new THREE.ambientLight(0x404040, 0.5);
    this.scene.add(ambientLight);
  };
  // Starts animation loop
  startAnimationLoop = () => {
    this.cube.rotation.x += 0.01;

    // brings in scene and camera to the renderer
    this.renderer.render(this.scene, this.camera);
    this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
  };

  render() {
    return <div ref={(this.el = ref)} />;
  }
}
