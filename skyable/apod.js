function criaApod() {
    apod = createElement('div','');
    apod.style('backdrop-filter', 'blur(5px)');
    apod.class('panel');
    apod.style('box-shadow', '0px 5px 34px -15px rgba(0,0,0,0.55)');
    apod.style('background', 'rgba(255,255,255,0.24)');
    apod.style('max-width', "100%");
    apod.style('margin', '10px 15px');
    apod.style('color', '#ccc');
    apod.style('border-radius', '10px');
    apod.style('padding-bottom', '5px');
    apod.mouseClicked(mostraApod);
    apodImg = createDiv('');
    apodImg.parent(apod);
    apodImg.class('apod-content');
    apodImg.style('max-width', '100%');
    apodImg.style('height', '250px');
    apodImg.style('background-image', ' ');
    apodImg.style('background-position', 'center');
    apodImg.style('background-size', 'cover');
    apodImg.style('background-repeat', 'no-repeat');
    apodImg.style('border-radius', '10px 10px 0px 0px');
    apodIcon = createImg('images/apodIcon.png','');
    apodIcon.parent(apod);
    apodIcon.class('apod-content');
    apodIcon.style('width', '100px');
    apodIcon.style('float', 'left');
    apodIcon.style('background-position', 'center');
    apodIcon.style('background-repeat', 'no-repeat');
    apodLabel = createElement('p', 'Nasa APOD');
    apodLabel.style('font-weight', '500');
    apodLabel.class('apod-content');
    apodLabel.style('font-size', '1.5em');
    apodLabel.style('padding', '0 15px');
    apodLabel.style('margin', '35px 0px 0px 0px');
    apodLabel.style('color', '#fff');
    apodLabel.style('float', 'left');
    apodLabel.parent(apod);
    apodTitle = createElement('p',' ');
    apodTitle.style('font-weight', '500');
    apodTitle.class('apod-content');
    apodTitle.style('font-size', '1.5em');
    apodTitle.style('padding', '0 15px');
    apodTitle.style('color', '#fff');
    apodTitle.parent(apod);
    apodExplanation = createElement('p', ' ');
    apodExplanation.style('padding', '0 15px');
    apodExplanation.class('apod-content');
    apodExplanation.style('font-weight', '300');
    apodExplanation.parent(apod);
    apodButton = createButton('VOLTAR');
    apodButton.parent(apod);
    apodButton.style('background-color', '#2E1974');
    apodButton.style('color', '#fff');
    apodButton.style('border', 'none');
    apodButton.style('border-radius', '5px');
    apodButton.style('padding', '10px');
    apodButton.style('margin', '10px');
    apodButton.mousePressed(escondeApod);
    apod.style('height', '100px');
    apod.style('overflow', 'hidden');
    apodImg.hide();
    apodTitle.hide();
    apodExplanation.hide();
    apodButton.hide();
    
}

function mostraApod(){
  let urlApod = 'https://api.nasa.gov/planetary/apod?api_key=3NfLfgsWUq1UUTgyf12v0DXh74LvscaEHe1ag2qa&date=2017-07-08';
  httpGet(urlApod, 'json', false, function(response) {
    apodImg.style('background-image', 'url('+response.url+')');
    apodTitle.html( response.title );
    apodExplanation.html(response.explanation);
    apodIcon.hide();
    apodLabel.hide();
    apodTitle.show();
    apodImg.show();
    apodExplanation.show();
    apod.style('height', '');
    apod.style('width', '');
    apod.style('overflow', 'visible');
    apodButton.style('width' ,apod.size().width-20+'px');
    apodButton.show();
  })
};

function escondeApod(){
  apodIcon.show();
  apodLabel.show();
  apodTitle.hide();
  apodButton.hide();
  apodImg.hide();
  apodExplanation.hide();
  apod.style('height', '100px');
  apod.style('overflow', 'hidden');
};

