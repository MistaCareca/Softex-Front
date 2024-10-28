"use strict";
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    aplicarDesconto(percentual) {
        this.preco -= this.preco * (percentual / 100);
    }
    exibirInfo(index) {
        return `
            <div>
                <p>Produto: ${this.nome} <br> Preço: R$${this.preco.toFixed(2)}</p>
                <input type="number" class="desconto-adicional" placeholder="Desconto adicional (%)">
                <button onclick="aplicarDescontoAdicional(${index})">Aplicar Desconto</button>
            </div>
        `;
    }
}
const produtos = [];
function adicionarItem(nome, preco, desconto) {
    const novoProduto = new Produto(nome, preco);
    novoProduto.aplicarDesconto(desconto);
    produtos.push(novoProduto);
    atualizaLista();
}
function atualizaLista() {
    const divExibir = document.querySelector("#exibir");
    divExibir.innerHTML = produtos
        .map((produto, index) => produto.exibirInfo(index))
        .join("");
}
function chamaAdicionarItem(event) {
    event.preventDefault();
    const nomeInput = document.querySelector(".nome");
    const precoInput = document.querySelector(".preco");
    const descontoInput = document.querySelector(".desconto");
    const nomeAjuste = nomeInput.value;
    const precoAjuste = Number(precoInput.value);
    const descontoAjuste = Number(descontoInput.value);
    adicionarItem(nomeAjuste, precoAjuste, descontoAjuste);
    nomeInput.value = "";
    precoInput.value = "";
    descontoInput.value = "";
}
function aplicarDescontoAdicional(index) {
    const descontoAdicionalInput = document.querySelectorAll(".desconto-adicional")[index];
    const descontoAdicional = Number(descontoAdicionalInput.value);
    if (!isNaN(descontoAdicional) && descontoAdicional > 0) {
        produtos[index].aplicarDesconto(descontoAdicional);
        atualizaLista();
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form");
    form.addEventListener("submit", chamaAdicionarItem);
});
