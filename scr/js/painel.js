/* quando clicar na seta pra avançar temos que esconder todas as imagens e mostrar a proxima imagem.

a imagem atual começa em 0.

assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagens pra poder saber que agora eu vou motrar a segunda imagem.

esconder todas imagens, pegar todas as imagens usando o DOM e remover a classe mostrar.

mostrar a proxima imagem, pegar todas as imagens, descobrir qual é a proxima, e colocar a classe mostrar nela*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function escoderImagens() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
      })
}

function mostrarImagens() {
    imagensPainel[imagemAtual].classList.add('mostrar');
}

setaAvancar.addEventListener('click', function () {

    const totalDeImagens =imagensPainel.length -1;
    if(imagemAtual === totalDeImagens){
        return;
    }

    imagemAtual++;

   escoderImagens();

    mostrarImagens();

})

setaVoltar.addEventListener('click', function () {
    if (imagemAtual === 0) {
        return;
    }
    imagemAtual --;

    escoderImagens();

    mostrarImagens();
    
})
