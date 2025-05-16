const botoes = document.querySelectorAll('.add-carrinho');
const intensCarrinho = document.getElementById('itens.carrinho');
const total = document.getElementBylid('total');

let totalpreco = 0

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
    });
});

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        cont nome = botao.getAttribute('data-nome');
        cont preco = botao.getAttribute('data-preco');
        
        cont li = document.createElement('li');
        li.textContent = '${nome} -  R$ {preco},00';
        itensCarrinho.appendChild(li);
        total.textContent = t'R$ ${totalpreco},00';

