let totalConta = 0;

function pagamentoTotal(valor){
    totalConta += valor;
    document.querySelector('#conta').innerHTML = `<p>O valor total da conta é: ${totalConta}R$</p>`;
}


function fazerPedido(event){
    event.preventDefault(); 

    const codigo = Number(document.querySelector('.codigo').value);
    const quantidade = Number(document.querySelector('.quantidade').value);
    let preco;

    switch (codigo){
        case 100:
            preco = 1.70;
            break;
            
        case 101:
            preco = 2.30;
            break;

        case 102:
            preco = 2.60;
            break;

        case 103:
            preco = 2.40;
            break;

        case 104:
            preco = 2.50;
            break;

        case 105:
            preco = 1;
            break;
        }

        const valorTotal = preco * quantidade;
        document.querySelector('#resultado').innerHTML = `<p>Valor do ultimo pedido ${valorTotal.toFixed(2)}</p>`;
        pagamentoTotal(valorTotal);
}