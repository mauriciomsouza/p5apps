let particulas = [];
let b1, painel1, logo;

function preload() {
  logo = loadImage("images/logo.svg");
  acrylicTex = loadImage("images/acrylic_texture.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  configuraBg();
  criaPainel();
  criaApod();
  criaRodape();
  
}

function draw() {
  criaBg();
  criaTopbar();
}









