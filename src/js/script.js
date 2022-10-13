/** @format */

// 1 Criar Balão
// 2 Estourar Balão
// 3 Carregar Balão

let total = 0;

function criarBalao() {
  //Criar div e setar(colocar) a classe balao
  let balao = document.createElement('div');
  balao.setAttribute('class', 'balao');

  //Criar mapa da tela X e Y
  let x = Math.floor(Math.random() * 600);
  let y = Math.floor(Math.random() * 400);

  //Setar estilo
  balao.setAttribute('style', 'left:' + x + 'px;top:' + y + 'px;');

  //Estourar Balão
  balao.setAttribute('onclick', 'estourar(this)');
  document.body.appendChild(balao);
}

function estourar(objeto) {
  document.body.removeChild(objeto);

  total++;
  let score = document.getElementById('total');
  score.innerHTML = 'Balões estourados ' + total;
}

function carregarJogo() {
  setInterval(criarBalao, 1000);
}
