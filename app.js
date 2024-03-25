// Create an empty scene
const scene = new THREE.Scene();

// Create a basic perspective camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 4;

// Create a renderer with Antialiasing
const renderer = new THREE.WebGLRenderer({ antialias: true });

// Configure renderer clear color
renderer.setClearColor("#000000");

// Configure renderer size
renderer.setSize(window.innerWidth, window.innerHeight);

// Append Renderer to DOM
const lead = document.getElementById("lead");
lead.appendChild(renderer.domElement);

// Create a Cube Mesh with basic material

const material = new THREE.MeshStandardMaterial();
material.roughness = 0.4;

// Objects

const cube = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.75, 0.75), material);

scene.add(cube);

// Add cube to Scene

const ambientLight = new THREE.AmbientLight();
ambientLight.color = new THREE.Color("#ff5d00");
ambientLight.intensity = 2;

const directionLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionLight.position.set(1, 1, 0);

scene.add(ambientLight, directionLight);

// Render Loop
const render = function () {
  requestAnimationFrame(render);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
};

render();
