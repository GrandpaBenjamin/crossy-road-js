import { MTLLoader } from "./node_modules/three/examples/jsm/loaders/MTLLoader.js";
import { OBJLoader } from "./node_modules/three/examples/jsm/loaders/OBJLoader.js";

const mtlLoader = new MTLLoader();
const objLoader = new OBJLoader();
const scene = new THREE.Scene();
scene.background = new THREE.Color("white");
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial(); //{ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
//scene.add(cube);

mtlLoader.load("./assets/Models/OBJ format/delivery.mtl", (mtl) => {
  mtl.preload();
  objLoader.setMaterials(mtl);
  objLoader.load("./assets/Models/OBJ format/delivery.obj", (root) => {
    scene.add(root);
  });
});

camera.position.z = 5;

function run() {
  //car.position += (0.01, 0);
}

const animate = function () {
  requestAnimationFrame(animate);

  run();

  renderer.render(scene, camera);
};

animate();
