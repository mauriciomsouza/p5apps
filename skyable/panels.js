function criaPainel() {
    div = createElement('div','');
    div.style('backdrop-filter', 'blur(10px)');
    div.class("acrylic");
    div.style("background-image", acrylicTex);
    div.style('box-shadow', '0px 5px 34px -15px rgba(0,0,0,0.55)');
    div.style('background', 'rgba(255,255,255,0.6)');
    div.style('max-width', "100%");
    div.style('margin', '0 15px');
    div.style('color', '#000');
    div.position(0, 60);

}

function criaRodape() {

}

function criaApod() {
    let url = 'https://api.nasa.gov/planetary/apod?api_key=3NfLfgsWUq1UUTgyf12v0DXh74LvscaEHe1ag2qa&date=2017-07-08';
    httpGet(url, 'json', false, function(response) {
        divImg = createDiv('');
        divImg.parent(div);
        divImg.style('max-width', '100%');
        divImg.style('height', '250px');
        divImg.style('background-image', 'url('+response.url+')');
        divImg.style('background-position', 'center');
        divImg.style('background-size', 'cover');
        divImg.style('background-repeat', 'no-repeat');
        divTitle = createElement('p', response.title);
        divTitle.style('font-weight', '500');
        divTitle.style('font-size', '1.5em');
        divTitle.style('padding', '0 15px');
        divTitle.parent(div);
        divExplanation = createElement('p', response.explanation);
        divExplanation.style('padding', '0 15px');
        divExplanation.style('font-weight', '300');
        divExplanation.parent(div);
      });
}
