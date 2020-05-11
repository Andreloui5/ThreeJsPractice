import React, { Component } from "react";
import * as THREE from "three";
import "./styles.scss";
// import SkullOne from "./SkullOne";

export default class App extends Component {
  componentDidMount() {
    this.sceneSetup();
    this.addSceneObjects();
    this.startAnimationLoop();
    window.addEventListener("resize", this.handleWindowResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
    window.cancelAnimationFrame(this.requestID);
    this.controls.dispose();
  }
  // Scene setup
  sceneSetup = () => {
    const width = this.el.clientWidth;
    const height = this.el.clientHeight;

    this.scene = new THREE.Scene();
    // perspective camera takes (fov, aspect, near, and far)
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 500);
    // positions camera away from objects
    // this.camera.position.y = 10;
    this.camera.position.z = 5;

    // sets up renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
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
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    this.scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0x404040);
    spotLight.position.set(100, 1000, 100);

    spotLight.castShadow = true;

    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;

    spotLight.shadow.camera.near = 500;
    spotLight.shadow.camera.far = 4000;
    spotLight.shadow.camera.fov = 30;

    this.scene.add(spotLight);
  };
  // Starts animation loop
  startAnimationLoop = () => {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;

    // brings in scene and camera to the renderer
    this.renderer.render(this.scene, this.camera);
    this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
  };

  handleWindowResize = () => {
    const width = this.el.clientWidth;
    const height = this.el.clientHeight;

    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;

    // Note that after making changes to most of camera properties you have to call
    // .updateProjectionMatrix for the changes to take effect.
    this.camera.updateProjectionMatrix();
  };

  render() {
    return <div ref={(ref) => (this.el = ref)} id="canvas" />;
  }
}
