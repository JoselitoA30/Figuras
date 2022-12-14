const scene = new THREE.Scene();
scene.background= new THREE.Color(0x800ad9);


scene.fog=new THREE.Fog(0xffffff, 0.01, 12);
/* let loader = new THREE.TextureLoader() */
/* loader.load('../img/Oess.jpg',function(texture){
    scene.background= texture
}) */
//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


//geometria



const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 );    
const material = new THREE.MeshBasicMaterial( {color: "Blue"} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

/* camera.position.x = -10;
camera.position.y = 1; */
camera.position.z = 5;

//funcion 
function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();



