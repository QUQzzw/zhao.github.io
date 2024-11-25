<script setup>
import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFloader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
let scene,camera,renderer;
let controls;

init();
initEnv();
animate();
loadModel();

window.onresize = function() {
  camera.asoect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

function init() {
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio )
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputEncoding = THREE.sRGBEncoding;
  document.body.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set(0, 0, 10);
  camera.lookAt(0, 0, 0);

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xbfe3dd );
  scene.add(new THREE.AxesHelper(0));

  controls = new OrbitControls( camera,renderer.domElement );
  controls.target.set(0,0.5,0);
  controls.update();
  controls.enablePan = false;
  controls.enableDamping = true;
}

function initEnv(){
  const pmremGenerator = new THREE.PMREMGenerator( renderer)
  scene.environment = pmremGenerator.fromScene(new RoomEnvironment(),0.001).texture;
}

function loadModel(){
  const loader = new GLTFLoader();
  loader.load('public/scene(2).glb', 
    function (gltf) {
    scene.add(gltf.scene);}
  );
}

function animate(){
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

</script>

<template>
 
</template>

<style scoped>

</style>
