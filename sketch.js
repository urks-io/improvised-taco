function setup() {
  createCanvas(500, 500, WEBGL);

  let cycle = 29;


  let detailX;
  detailX = createSlider(3, 24, 3);
  detailX.position(10, height + 5);
  detailX.style('width', '80px');

   detailY = createSlider(3, 16, 3);
  detailY.position(10, height + 5);
  detailY.style('width', '80px');

}

function draw() {
	background(55);
	rotateX(frameCount * 0.01);
	rotateY(frameCount * 0.01);
  ellipse(50, 50, 100);

plane(45, 75);

torus(55, 49, detailX.value, detailY.value);


}

function drawMoon(moonphase, moonsize){
	
}