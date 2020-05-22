var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);

document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(70, WIDTH/HEIGHT);
scene.add(camera);

camera.position.z = 70;

var boxGeometry = new THREE.BoxGeometry(10,10,10);
var basicMaterial = new THREE.MeshPhongMaterial({color:0x0095DD});

textures.error.minFilter = THREE.LinearFilter ;

var FirstCube = new THREE.Mesh(boxGeometry, textures.error);

scene.add(FirstCube);

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}

render();