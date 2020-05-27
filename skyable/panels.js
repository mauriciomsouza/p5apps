function criaPainel() {
    div = createElement('div','');
    div.style('backdrop-filter', 'blur(6px)');
    div.class("acrylic");
    div.style("background-image", acrylicTex);
    div.style('box-shadow', '0px 5px 34px -15px rgba(0,0,0,0.55)');
    div.style('background', 'rgba(255,255,255,0.4)');
    div.style('height', windowHeight-120+"px");
    div.style('width', windowWidth-60+"px");
    div.style('border-radius', '2px')
    div.position(30, 60);
}

function criaRodape() {
    footer = createElement('p','<a href="https://github.com/mauriciomsouza/" style="text-decoration: none; color: #fff">Mauricio Melo</a>. 2020 ');
    footer.style('height', windowHeight-120+"px");
    footer.style('width', windowWidth-60+"px");
    footer.style('font-family', "Arial");
    footer.style('color', "#fff");
    footer.style('text-align', "center");
    footer.position(30, windowHeight-55);
}
