"use strict";
const usuarios = [
    { id: 1, nome: "brenno", email: "Brenno@algo.com", idade: 19, admin: true },
    { id: 2, nome: "Cae", email: "Cae@algo.com", idade: 30, admin: false },
];
function mostrarUsuario(usuarios) {
    console.log(`ID: ${usuarios.id}\nNome: ${usuarios.nome}\nEmail: ${usuarios.email}\nIdade: ${usuarios.idade}\nAdmin: ${usuarios.admin ? "Sim" : "Não"}\n----------------------`);
}
function adicionarUsuario(usuario) {
    usuarios.push(usuario);
    console.log("Usuário ${usuario.nome} adicionado com sucesso");
}
function modificarUsuario(id, novosDados) {
    const usuario = usuarios.find((u) => u.id === id);
    if (usuario) {
        Object.assign(usuario, novosDados);
        console.log(`Usuário ${usuario.nome} modificado com sucesso!`);
    }
    else {
        console.log(`Usuário com ID ${id} não encontrado.`);
    }
}
console.log("usuarios iniciais:");
usuarios.forEach(mostrarUsuario);
const novoUsuario = { id: 3, nome: "Carlos", email: "carlos@gmail.com", idade: 28, admin: false };
adicionarUsuario(novoUsuario);
modificarUsuario(2, { nome: "João Silva", idade: 46 });
console.log("Usuários atualizados:");
usuarios.forEach(mostrarUsuario);
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
