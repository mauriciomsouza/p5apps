
function configuraBg() {
	b1 = color(46, 25, 116);
	background(b1);
  	for (let i = 0; i < 120; i++) {
    	particulas.push(new Particula(random(0, windowWidth), random(0, windowHeight), random(1,3), random(-2, 2), random(-2, 2)));
  	}
}

function criaTopbar() {
	logo.resize(0, 25);
	imageMode(CENTER);
	image(logo, windowWidth/2, 30);
}

function criaBg() {
	background(b1);
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
	if (d < 25) {
	  stroke(255, random(0,255));
	  line(tempPart1.posX, tempPart1.posY, tempPart2.posX, tempPart2.posY);
	}
}
