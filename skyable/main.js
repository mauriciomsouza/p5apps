let particulas = [];
let b1, painel1, logo;

function preload() {
  logo = loadImage("images/logo.svg");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  configuraBg();
  criaPainel();
}

function draw() {
  desenhaBg();
  desenhaTopbar();
  desenhaPainel();
}









