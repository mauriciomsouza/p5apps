let particulas = [];
let b1, painel1, logo;
let lat, lon;
let urlWeather, weatherCityRes, weatherTempRes, weatherStatusRes, weatherImgRes, weatherCloudsRes;
let urlApod, apodImgRes, apodTitleRes, apodExplanationRes;
let urlLightpol, lightpolLv, lightpolStatus, lightpolExp;
let apodLoaded, weatherLoaded, lightpolLoaded;

function preload() {
  logo = loadImage("images/logo.svg");
}

function setup() {
  apodLoaded = false;
  weatherLoaded = false;
  lightpolLoaded = false;
  navigator.geolocation.getCurrentPosition(pegaLocalizacao);
  pegaApod();
  createCanvas(windowWidth, windowHeight);
  configuraBg();
  topBar = createElement('div','');
  topBar.style('height','55px');
  criaSkystatus();
}

function draw() {
  criaBg();
  criaTopbar();
  if (apodLoaded == true && weatherLoaded == true && lightpolLoaded == true) {
    if (weatherCloudsRes < 10 && lightpolLv < 700) {
      skystatusTitle.html('Céu Limpo');
      skystatusStatus.html('As condições climáticas e de poluição luminosa da sua área estão favoráveis à prática da astronomia. Aproveite!');
    } else {
      skystatusTitle.html('Sem Condições');
      skystatusStatus.html('As condições climáticas e de poluição luminosa da sua área não permitem um bom desempenho para a prática de atividades astronômicas.');
    }
    
  }
}

function pegaLocalizacao(position) {
  lon = position.coords.longitude;
  lat = position.coords.latitude;
  urlWeather = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=15b2c025c36c8ab30872fb75f238a4ec&lang=pt_br';
  httpGet(urlWeather, 'json', false, function(response) {
    weatherTempRes =  Math.floor(response.main.temp-273.15);
    weatherCityRes =  response.name;
    weatherStatusRes =  response.weather[0].description.toUpperCase();
    weatherImgRes =  response.weather[0].icon;
    weatherLoaded = true;
    weatherCloudsRes = response.clouds.all;
    console.log(weatherCloudsRes);
    criaWeather();
    });
    pegaLightpol(lon, lat);
}

function pegaApod() {
  let d = new Date();
  let dia = d.getDay();
  let mes = d.getMonth();
  let ano = d.getFullYear();
  let data = ano+'-'+mes+'-'+dia;
  let urlApod = 'https://api.nasa.gov/planetary/apod?api_key=3NfLfgsWUq1UUTgyf12v0DXh74LvscaEHe1ag2qa&date='+data;
  httpGet(urlApod, 'json', false, function(response) {
    apodImgRes = response.url;
    apodTitleRes =  response.title;
    apodExplanationRes = response.explanation;
    apodLoaded = true;
    criaApod();
  });
}

function pegaLightpol(lon, lat) {
  httpGet('https://pechincha-api-dev.herokuapp.com/api/lightpol', 'json', false, function(response) {
    urlLightpol = 'https://cors-anywhere.herokuapp.com/https://www.lightpollutionmap.info/QueryRaster/?qk='+response+'&ql=wa_2015&qt=point&qd='+lon+','+lat;
    httpDo(urlLightpol, {
      method: 'GET'
    }).then(response => {
      lightpolLv = parseFloat(response);
      lightpolLv = lightpolLv*1000;
      console.log(lightpolLv);
      if (lightpolLv < 50) {
        lightpolStatus = 'Muito Baixa';
        lightpolExp = 'Você está em uma região praticamente livre de poluição luminosa, bastante afastada dos grandes centros urbanos.';
      } else if (lightpolLv > 50 && lightpolLv < 700) {
        lightpolStatus = 'Baixa';
        lightpolExp = 'Você está em uma região com baixa poluição luminosa, próximo a pequenas cidades.';
      } else if (lightpolLv > 700 && lightpolLv < 2000) {
        lightpolStatus = 'Moderada';
        lightpolExp = 'Você está em uma região com poluição luminosa moderada, perto de um centro urbano médio ou com algum grande centro nas proximidades.';
      } else if (lightpolLv > 2000 && lightpolLv < 7000) {
        lightpolStatus = 'Intensa';
        lightpolExp = 'Você está em uma região com poluição luminosa intensa, dentro de um centro urbano médio.';
      } else if (lightpolLv > 7000) {
        lightpolStatus = 'Muito Intensa';
        lightpolExp = 'Você está em uma região com poluição luminosa muito intensa, dentro de uma grande cidade ou próximo a vários centros urbanos.';
      }
      lightpolLoaded = true;
      criaLightpol();
    })
    .catch(err => {
      lightpolStatus = "Erro";
      lightpolExp = 'O Servidor não conseguiu a informação de poluição luminosa para sua região.';
      console.log(err);
      criaLightpol();
    });
  });
}









