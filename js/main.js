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

Array(1000).fill().forEach(addStar);

const spaceTexture = new THREE.TextureLoader().load('pics/space.jpg');
scene.background = spaceTexture;

// logo

const logoTexture = new THREE.TextureLoader().load('pics/logo.png');
const logoTexture2 = new THREE.TextureLoader().load('pics/logomirror.png');
const logo = new THREE.BoxGeometry(1, 4, 6);
const logomaterial = [
     
   
   
     new THREE.MeshBasicMaterial({ map: logoTexture }, { opacity: 0 }), 
  
     new THREE.MeshBasicMaterial({ map: logoTexture2 }), ];
const billboard = new THREE.Mesh( logo, logomaterial );
scene.add( billboard );

billboard.position.x = -3;
billboard.position.y = 4;
billboard.position.z = -13
billboard.rotation.y +=30.5;
billboard.rotation.z += 0.001;

     


//  Disc


const discTexture = new THREE.TextureLoader().load('pics/fesmap2.jpg');
const discTexture2 = new THREE.TextureLoader().load('pics/logo.png');
const discmaterials = [new THREE.MeshBasicMaterial({ map: discTexture2 }), new THREE.MeshBasicMaterial({ map: discTexture }),  new THREE.MeshBasicMaterial({color: 'black' }),  ];

const shape = new THREE.CylinderGeometry(6, 6, .3, 48);

const disc = new THREE.Mesh( shape, discmaterials );


scene.add( disc)

    // Tomas
const tomasTexture = new THREE.TextureLoader().load('pics/tomasfes.png');
const geometry = new THREE.CylinderGeometry(2, 2, 0.1, 48);
const material = new THREE.MeshBasicMaterial({ map: tomasTexture });
const tomas = new THREE.Mesh( geometry, material );
scene.add( tomas );

tomas.position.x =5;
tomas.position.y = -1;
tomas.position.z = -9;
// huib

const huibTexture = new THREE.TextureLoader().load('pics/huib.png');
const huibGeometry = new THREE.CylinderGeometry(2, 2, 0.1, 48);
const huibMaterial = new THREE.MeshBasicMaterial({ map: huibTexture });
const huib = new THREE.Mesh( huibGeometry, huibMaterial );
scene.add( huib) 

// A2
const saidTexture = new THREE.TextureLoader().load('pics/said.jpg');
const saidmaterial = new THREE.MeshBasicMaterial({ map: saidTexture });
const saidGeometry = new THREE.CylinderGeometry(2, 2, 0.1, 48);
const said = new THREE.Mesh( saidGeometry, saidmaterial );


scene.add( said)
said.position.x =8;
said.position.y = 3;
said.position.z = -15;

const maartenTexture = new THREE.TextureLoader().load('pics/maarten.png');
const maartenmaterial = new THREE.MeshBasicMaterial({ map: maartenTexture });
const maartenGeometry = new THREE.CylinderGeometry(2, 2, 0.1, 48);
const maarten = new THREE.Mesh( saidGeometry, maartenmaterial );


scene.add( maarten)

//  Marijn
const marijnTexture = new THREE.TextureLoader().load('pics/marijn.jpg');
const marijnmaterial = new THREE.MeshBasicMaterial({ map: marijnTexture });
const marijnGeometry = new THREE.CylinderGeometry(2, 2, 0.1, 48);
const marijn = new THREE.Mesh( marijnGeometry, marijnmaterial );


scene.add( marijn)



marijn.position.x = -0;
marijn.position.y = 1;
marijn.position.z = -16

maarten.position.x = -5;
maarten.position.y = -1;
maarten.position.z = -8

disc.position.x = 8;
disc.position.y = -3;
disc.position.z = -28;



huib.position.x =-1;
huib.position.y = -2;
huib.position.z = -10;





function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  disc.rotation.x += 0.03;
  disc.rotation.y += 0.02;
  disc.rotation.z += 0.03;
  maarten.rotation.x += 0.02;
  maarten.rotation.y += 0.02;
  said.rotation.x += 0.02;
  said.rotation.y += 0.02;
  said.rotation.z += 0.02;
  huib.rotation.x += 0.03;
  huib.rotation.y += 0.02;
  huib.rotation.z += 0.02;
  billboard.rotation.y += 0.01;
  maarten.rotation.x += 0.02;
  maarten.rotation.y += 0.02;
  maarten.rotation.z += 0.03

  tomas.rotation.y += 0.01;
  tomas.rotation.z += 0.01;

  camera.position.z = t * 0.005;
  camera.position.x = t * 0.0005
  camera.rotation.y = t * 0.0002;
  camera.rotation.x = t * 0.0001;
}

document.body.onscroll = moveCamera;
moveCamera();


// Animation Loop

function animate() {
	requestAnimationFrame( animate );
    billboard.rotation.y += 0.001;
    said.rotation.x += 0.01;
    said.rotation.y += 0.01;
    disc.rotation.x += 0.001;
    disc.rotation.y += 0.001;
    marijn.rotation.z += 0.009;
    marijn.rotation.y += 0.015;
    maarten.rotation.z += 0.008;
    maarten.rotation.y += 0.014;
    huib.rotation.x += 0.01;
    huib.rotation.z += 0.016;
    tomas.rotation.x += 0.008;
tomas.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();

		

const toggle = document.querySelector(".toggle")
const nav = document.querySelector("#nav")
const hireBtns = document.querySelector(".cta-btn")
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