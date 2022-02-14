// 3d Animation Part


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(50);
camera.position.setX(-3);
document.body.appendChild( renderer.domElement );




camera.position.z = 5;
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshToonMaterial({ color: 0xfffff4 });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

const spaceTexture = new THREE.TextureLoader().load('pics/space.jpg');
scene.background = spaceTexture;

// Avatar

const tomasTexture = new THREE.TextureLoader().load('pics/tomas.jpg');
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({ map: tomasTexture });
const tomas = new THREE.Mesh( geometry, material );
scene.add( tomas );




// scene.add(mars);


mars.position.x = -25;
mars.position.y = -5;
mars.position.z = -25

tomas.position.x =5;
tomas.position.y = -1;
tomas.position.z = -6;


function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  mars.rotation.x += 0.02;
  mars.rotation.y += 0.02;
  mars.rotation.z += 0.02;

  tomas.rotation.y += 0.01;
  tomas.rotation.z += 0.01;

  camera.position.z = t * -0.005;
  camera.position.x = t * -0.0005
  camera.rotation.y = t * 0.0002;
  camera.rotation.x = t * -0.0001;
}

document.body.onscroll = moveCamera;
moveCamera();


// Animation Loop

function animate() {
	requestAnimationFrame( animate );
    mars.rotation.x += 0.005;
    tomas.rotation.x += 0.01;
tomas.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();

		

const toggle = document.querySelector(".toggle")
const nav = document.querySelector("#nav")
const hireBtns = document.querySelectorAll(".cta-btn")
const modal = document.querySelector("#modal")

const container = document.querySelector(".container")
const closeNav = document.querySelector("#close-nav")

const closeModalBtn = document.querySelector("#close")

const links = document.querySelectorAll("nav li")

toggle.addEventListener("click", () => {
    nav.classList.remove("nav-closed");
})
    ;



closeNav.addEventListener("click", () => {
    nav.classList.toggle("nav-closed");


});

links.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.add("nav-closed");
    })

});






hireBtns.forEach((button) => {
    button.addEventListener("click", () => {
        modal.classList.add("modal-containeropen");

    });
})





closeModalBtn.addEventListener("click", () => {
    modal.classList.toggle("modal-containeropen");

});

window.addEventListener("click", (e) =>
    e.target == modal ? modal.classList.remove("modal-containeropen") : false


);

container.addEventListener("click", (e) =>
    e.target !== nav ? nav.classList.add("nav-closed") : false


);


const slideInLeft = () => {
    const titleBox = document.querySelectorAll('.subtitle-left');

    titleBox.forEach(function (box) {

        const titlePosition = box.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.6;

        if (titlePosition < screenPosition) {
            box.classList.add('slide-in-left');
        }

    });
}
window.addEventListener('scroll', slideInLeft);
``