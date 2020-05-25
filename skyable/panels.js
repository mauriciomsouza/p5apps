function criaPainel() {
    div = createElement('div','this is some text');
    console.log(div);
    div.style('backdrop-filter', 'blur(5px)');
    div.style('box-shadow', '0px 5px 34px -15px rgba(0,0,0,0.55)');
    div.style('background', 'rgba(255,255,255,0.2)');
    div.style('height', '300px');
    div.style('width', '300px');
    div.style('border-radius', '10px');
}

function desenhaPainel() {
    div.position(mouseX, mouseY);
}
