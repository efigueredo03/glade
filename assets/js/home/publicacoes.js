/* 
    Toda vez que o textarea do box de publicações for pressionado, sua altura deve ser aumentada
    Toda vez que ele estiver selecionado e a serguir outro elemento fora dele for clicado, ele deve
    voltar ao seu tamanho normal.

*/

const entryPublicacao = document.querySelector(".box__input");
let titulo = document.querySelector(".box__titulo");
let menu = document.querySelector(".menu");

entryPublicacao.addEventListener("focus", function(e) {
    entryPublicacao.classList.add("ativado");
    entryPublicacao.classList.remove("desativado");

    // Esconder o título
    titulo.classList.add("hidden");

});

/* 

    Quando o ícone de imagem for selecionado, ele poderá
    acessar o input file para upar um arquivo
    
    Esse arquivo deve ser exivido abaixo do textarea

*/

let photo = document.getElementById('imgPhoto');
let inputfile = document.getElementById('flImage');
let boxContent = document.querySelector(".box__content-img");
let textAreaSecundario = document.getElementById("text-area-secundario");

photo.addEventListener('click', () => {
    inputfile.click();
});

inputfile.addEventListener('change', function(e) {

    // Acesso ao elemento input quando ele mudar
    const inputTarget = e.target;

    // Acesso a imagem que foi upada
    const file = inputTarget.files[0];

    // Se a seleção de imagens não for cancelada
    if(file) {
        
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener("load", function(e) {

            // Acesso ao objeto reader quando ele for carregado

            const readerTarget = e.target;

            // Criando o elemento img que vai ser adicionado a publicação
            const img = document.createElement("img");
            img.classList.add("img-content");
            img.src = readerTarget.result;

            // Adicionando a imagem no box de conteúdo da publicação
            boxContent.appendChild(img);

            // Com a imagem adicionada, podemos mostrar o textarea secundário
            textAreaSecundario.classList.remove("hidden");

        })

    }

});


/*

    Ajustar automaticamente a altura do textarea enquanto o usuário insere texto

*/

textarea1 = document.querySelector("#textarea1");
textarea2 = document.querySelector("#text-area-secundario");

textarea1.addEventListener('input', autoResize, false);
textarea2.addEventListener('input', autoResize, false);
  
function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}