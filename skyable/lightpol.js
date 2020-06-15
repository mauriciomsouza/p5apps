function criaLightpol() {
    lightpol = createElement('div','');
    lightpol.style('backdrop-filter', 'blur(5px)');
    lightpol.class('panel');
    lightpol.style('box-shadow', '0px 5px 34px -15px rgba(0,0,0,0.55)');
    lightpol.style('background', 'rgba(255,255,255,0.24)');
    lightpol.style('max-width', "100%");
    lightpol.style('margin', '10px 15px');
    lightpol.style('color', '#ccc');
    lightpol.style('border-radius', '10px');
    lightpol.style('padding-bottom', '5px');
    lightpol.mouseClicked(mostraLightpol);
    lightpolImg = createDiv('');
    lightpolImg.parent(lightpol);
    lightpolImg.class('lightpol-content');
    lightpolImg.style('max-width', '100%');
    lightpolImg.style('height', '250px');
    lightpolImg.style('background-image', '');
    lightpolImg.style('background-position', 'center');
    lightpolImg.style('background-size', 'cover');
    lightpolImg.style('background-repeat', 'no-repeat');
    lightpolImg.style('border-radius', '10px 10px 0px 0px');
    lightpolIcon = createImg('images/lightpolIcon.png','');
    lightpolIcon.parent(lightpol);
    lightpolIcon.class('lightpol-content');
    lightpolIcon.style('float', 'left');
    lightpolIcon.style('width', '100px');
    lightpolIcon.style('background-position', 'center');
    lightpolIcon.style('background-repeat', 'no-repeat');
    lightpolLabel = createElement('p', 'Poluição Luminosa');
    lightpolLabel.style('font-weight', '500');
    lightpolLabel.class('lightpol-content');
    lightpolLabel.style('font-size', '1.5em');
    lightpolLabel.style('white-space', 'normal');
    lightpolLabel.style('padding', '0 15px');
    lightpolLabel.style('margin', '35px 0px 0px 0px');
    lightpolLabel.style('color', '#fff');
    lightpolLabel.style('width', '210px');
    lightpolLabel.style('float', 'left');
    lightpolLabel.parent(lightpol);
    lightpolTitle = createElement('p','');
    lightpolTitle.style('font-weight', '500');
    lightpolTitle.class('lightpol-content');
    lightpolTitle.style('font-size', '1.5em');
    lightpolTitle.style('padding', '0 15px');
    lightpolTitle.parent(lightpol);
    lightpolExplanation = createElement('p', '');
    lightpolExplanation.style('padding', '0 15px');
    lightpolExplanation.class('lightpol-content');
    lightpolExplanation.style('font-weight', '300');
    lightpolExplanation.parent(lightpol);
    lightpolButton = createButton('VOLTAR');
    lightpolButton.parent(lightpol);
    lightpolButton.style('background-color', '#2E1974');
    lightpolButton.style('color', '#fff');
    lightpolButton.style('border', 'none');
    lightpolButton.style('border-radius', '5px');
    lightpolButton.style('padding', '10px 10px 20px 10px');
    lightpolButton.style('margin', '10px 10px');
    lightpolButton.mousePressed(escondeLightpol);
    lightpol.style('height', '100px');
    lightpol.style('overflow', 'hidden');
    lightpolImg.hide();
    lightpolTitle.hide();
    lightpolExplanation.hide();
    lightpolButton.hide();
    
}

function mostraLightpol(){
  httpGet(urlLightpol, 'json', false, function(response) {
    lightpolImg.style('background-image', 'url('+response.url+')');
    lightpolTitle.html( response.title );
    lightpolExplanation.html(response.explanation);
    lightpolIcon.hide();
  lightpolLabel.hide();
  lightpolTitle.show();
  lightpolImg.show();
  lightpolExplanation.show();
  lightpol.style('height', '');
  lightpol.style('width', '');
  lightpol.style('overflow', 'visible');
  lightpolButton.style('width' ,lightpol.size().width-20+'px');
  lightpolButton.show();
  })
};

function escondeLightpol(){
  lightpolIcon.show();
  lightpolLabel.show();
  lightpolTitle.hide();
  lightpolButton.hide();
  lightpolImg.hide();
  lightpolExplanation.hide();
  lightpol.style('height', '100px');
  lightpol.style('overflow', 'hidden');
};