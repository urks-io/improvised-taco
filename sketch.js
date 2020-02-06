// <iframe src="http://lunarclock.org/service/lst-for-iframe.php?style=0&color=2" height="60px" width="170px" frameborder="0" marginwidth="0" scrolling="no"><a href="http://lunarclock.org">Lunar Standard Time - What time is it on the Moon?</a></iframe>

let detailX;

function setup() {
  createCanvas(500, 500, WEBGL);

  let cycle = 29;
stroke(50);

  
  detailX = createSlider(3, 24, 3);
  detailX.position(10, height + 5);
  detailX.style('width', '80px');

  //  detailY = createSlider(3, 16, 3);
  // detailY.position(10, height + 5);
  // detailY.style('width', '80px');

}

function draw() {
	background(55);
	rotateX(frameCount * 0.01);
	rotateY(frameCount * 0.01);

	push();
	noFill();
	rotateX(frameCount * -0.02);
	rotateY(frameCount * -0.02);
	box(20);  
    pop();
push();
  rotate
ellipse(50, 50, 100, 100);
  pop();
  
torus(55,20, detailX.value(), 14);


}

function drawMoon(moonphase, moonsize){
	
}
