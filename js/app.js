let quantAluguelJogos = 0
function alterarStatus(id){
    //Pego todos os componentes da tela
   let gameClicado = document.getElementById(`game-${id}`);
   let gameImagem = gameClicado.querySelector('.dashboard__item__img'); //O ponto significa que é uma classe
   let gameBotao = gameClicado.querySelector('.dashboard__item__button');
   

   if(gameImagem.classList.contains('dashboard__item__img--rented')) {//A imagem está escura, ao clicar removo.
    gameImagem.classList.remove('dashboard__item__img--rented');
    gameBotao.textContent = 'Alugar'
    gameBotao.classList.remove('dashboard__item__button--return');

    if(confirm('Tem certeza que deseja devolver o livro?')){ //Opção de cancelar
    gameImagem.classList.remove('dashboard__item__img--rented');
    gameBotao.textContent = 'Alugar'
    gameBotao.classList.remove('dashboard__item__button--return')
        quantAluguelJogos--; //Reduz o valor
    }else{
    gameImagem.classList.add('dashboard__item__img--rented'); // A imagem está clara, ao clicar adiciono o tema escuro
    gameBotao.textContent = 'Devolver'
    gameBotao.classList.add('dashboard__item__button--return')
    }
    
   }else {
    gameImagem.classList.add('dashboard__item__img--rented');// A imagem está clara, ao clicar adiciono o tema escuro
    gameBotao.textContent = 'Devolver'
    gameBotao.classList.add('dashboard__item__button--return');
        quantAluguelJogos++;
   }

   imprimirQuantidadeAlugados();
}

function imprimirQuantidadeAlugados(){
    console.log(`A quantidade de jogos alugados é: ${quantAluguelJogos}`);
}