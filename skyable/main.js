let particulas = [];
let b1, painel1, logo;
let lat, lon;
let urlWeather;
let urlApod;

function preload() {
  logo = loadImage("images/logo.svg");
}

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  navigator.geolocation.getCurrentPosition(pegaLocalizacao);
  configuraBg();
  topBar = createElement('div','');
	topBar.style('height','55px');
  criaApod();
  criaWeather();
  criaLightpol();
}

function draw() {
  criaBg();
  criaTopbar();
}

function pegaLocalizacao(position) {
  lon = position.coords.longitude;
  lat = position.coords.latitude;
  urlWeather = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=15b2c025c36c8ab30872fb75f238a4ec&lang=pt_br';
  httpGet(urlWeather, 'json', false, function(response) {
    console.log(response);
  });
}









