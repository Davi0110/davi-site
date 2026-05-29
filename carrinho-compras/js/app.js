let total = 0;
limpar();

function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let quantidade = document.getElementById('quantidade').value;
    let valorUnitario = produto.split('$')[1];
    let precoProduto = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${precoProduto}</span>
    </section>`;
    total = total + precoProduto;
    let valorGeral = document.getElementById('valor-total');
    valorGeral.textContent = `R$ ${precoProduto}`;
}

function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    let total = 0;
    document.getElementById('valor-total').textContent = '';
}