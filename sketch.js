

let detailX;
// let MOONMAN;
let vid;

function preload(){
//MOONMAN = loadModel('assets/moon10inches.stl');
}
function setup() {
  createCanvas(500, 500, WEBGL);

  let cycle = 29;
stroke(50);
// MOONMAN = createVideo('assets/MOONMAN.mp4', vidLoad);
// vid.size(canvasWidth, canvasHeight);
  
  detailX = createSlider(3, 24, 3);
  detailX.position(10, height + 5);
  detailX.style('width', '80px');

  //  detailY = createSlider(3, 16, 3);
  // detailY.position(10, height + 5);
  // detailY.style('width', '80px');
vid = createVideo(['assets/MOONMAN.mp4']);
vid.elt.muted = true;
vid.loop();
vid.hide();
}

function draw() {
	background(55);

	 camera(10, 80, 100 + sin(frameCount * 0.009) * 260, 0, 0, 0, 0, 1, 0);
	rotateX(frameCount * 0.01);
	rotateY(frameCount * 0.01);
//model(MOONMAN);
	texture(vid);
	sphere(150);

	push();
	noFill();
	rotateX(frameCount * -0.02);
	rotateY(frameCount * -0.02);
	box(20);  
    

    pop();
push();
  fill(43, 212, 114);
  rotateY(frameCount * .01);
ellipse(50, 50, 100, 100);

  pop();
 // fill(235, 132, 17);
normalMaterial();
torus(55,20, detailX.value(), 14);

//createElement(clock, [iframe src="http://lunarclock.org/service/lst-for-iframe.php?style=0&color=2" height="60px" width="170px" frameborder="0" marginwidth="0" scrolling="no"><a href="http://lunarclock.org">Lunar Standard Time - What time is it on the Moon?</a></iframe])
}

function drawMoon(moonphase, moonsize){
	
}
// function vidLoad() {
// 	vid.loop();
// 	vid.volume(0);
// }