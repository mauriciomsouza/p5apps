let div;

function setup() {
	createCanvas(windowWidth, windowHeight);
	bg = color(255);
	background(bg);
	div = createElement('div','this is some text');
}

function draw() {
	
	fill(0);
	textSize(36);
	textAlign(CENTER);
	text('Fluent Blur', windowWidth/2, windowHeight/2);
	noStroke();
	fill(255,150,23);
	ellipse(160, 650, 200, 200);
	fill(175,30,233);
	ellipse(1010, 350, 200, 200);
	fill(155,250,73);
	ellipse(260, 150, 200, 200);
	fill(205,50,23);
	ellipse(960, 650, 200, 200);
	div.position(mouseX, mouseY);
}

function mousePressed() {
	let div;
	div = createElement('div', 'just created another');
	div.position(mouseX, mouseY);

}