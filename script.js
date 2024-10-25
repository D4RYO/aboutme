// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a room (a box)
const geometry = new THREE.BoxGeometry(10, 10, 10);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const room = new THREE.Mesh(geometry, material);
scene.add(room);

// Set the initial camera position
camera.position.z = 5;

// Movement variables
const moveSpeed = 0.1;
const move = { forward: 0, backward: 0, left: 0, right: 0 };

// PointerLockControls for mouse look
const controls = new THREE.PointerLockControls(camera, document.body);

document.addEventListener('click', () => {
  controls.lock();
});

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      move.forward = moveSpeed;
      break;
    case 'ArrowDown':
      move.backward = moveSpeed;
      break;
    case 'ArrowLeft':
      move.left = moveSpeed;
      break;
    case 'ArrowRight':
      move.right = moveSpeed;
      break;
  }
});

document.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      move.forward = 0;
      break;
    case 'ArrowDown':
      move.backward = 0;
      break;
    case 'ArrowLeft':
      move.left = 0;
      break;
    case 'ArrowRight':
      move.right = 0;
      break;
  }
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Update camera position based on movement
  controls.moveForward(move.forward);
  controls.moveRight(move.right - move.left);

  renderer.render(scene, camera);
}

animate();