let particulas = [];
let b1, b2, c1, c2;

function setup() {
	createCanvas(windowWidth, windowHeight);
	b1 = color(38, 86, 163);
	b2 = color(94,38,163);
	background(b1);
  for (let i = 0; i < 120; i++) {
    particulas.push(new Particula(random(0, windowWidth), random(0, windowHeight), random(2,5), random(-2, 2), random(-2, 2)));
  }
}

function draw() {
  desenhaDegrade(0, 0, width, height, b1, b2);
	particulas.forEach( particula => {
		particula.desenha();
		particula.atualiza();
		if (particula.posX > windowWidth || particula.posX < 0) {
			particula.destruir = true;
  	}
  	if (particula.posY < -0 || particula.posY > windowHeight) {
    	particula.destruir = true;
  	}
		for (let i = 0; i < particulas.length; i++) {
      let part2 = particulas[i];
      estaPerto(particula, part2);
    }
	});
	
}

class Particula {
	constructor(tempPosX, tempPosY, tempTam, tempVelocidadeX, tempVelocidadeY) {
		this.posX = tempPosX;
		this.posY = tempPosY;
		this.tam = tempTam;
		this.velocidadeX = tempVelocidadeX;
		this.velocidadeY = tempVelocidadeY;
		this.destruir = false;
	}
	
	desenha() {
		noStroke();
		fill(255);
		ellipse(this.posX, this.posY, this.tam);
	}
	
	atualiza() {
		this.posX+=this.velocidadeX;
		this.posY+=this.velocidadeY;
		if (this.destruir == true) {
			this.posX = random(0, windowWidth);
			this.posY = random(0, windowHeight);
			this.destruir = false;
		}
	}
}

function estaPerto(tempPart1, tempPart2) {
  let d = dist(tempPart1.posX, tempPart1.posY, tempPart2.posX, tempPart2.posY);
  if (d < mouseX/10) {
    stroke(255, random(0,255));
    line(tempPart1.posX, tempPart1.posY, tempPart2.posX, tempPart2.posY);
	}
}

function desenhaDegrade(x, y, w, h, c1, c2) {
  noFill();
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
}