class Produto {
    nome: string;
    preco: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }

    aplicarDesconto(percentual: number) {
        this.preco -= this.preco * (percentual / 100);
    }

    exibirInfo(index: number): string {
        return `
            <div>
                <p>Produto: ${this.nome} <br> Preço: R$${this.preco.toFixed(2)}</p>
                <input type="number" class="desconto-adicional" placeholder="Desconto adicional (%)">
                <button onclick="aplicarDescontoAdicional(${index})">Aplicar Desconto</button>
            </div>
        `;
    }
}

const produtos: Produto[] = [];

function adicionarItem(nome: string, preco: number, desconto: number) {
    const novoProduto = new Produto(nome, preco);
    novoProduto.aplicarDesconto(desconto);
    produtos.push(novoProduto);
    atualizaLista();
}

function atualizaLista() {
    const divExibir = document.querySelector("#exibir")!;
    divExibir.innerHTML = produtos
        .map((produto, index) => produto.exibirInfo(index))
        .join("");
}

function chamaAdicionarItem(event: Event) {
    event.preventDefault();

    const nomeInput = document.querySelector<HTMLInputElement>(".nome")!;
    const precoInput = document.querySelector<HTMLInputElement>(".preco")!;
    const descontoInput = document.querySelector<HTMLInputElement>(".desconto")!;

    const nomeAjuste = nomeInput.value;
    const precoAjuste = Number(precoInput.value);
    const descontoAjuste = Number(descontoInput.value);

    adicionarItem(nomeAjuste, precoAjuste, descontoAjuste);

    nomeInput.value = "";
    precoInput.value = "";
    descontoInput.value = "";
}

function aplicarDescontoAdicional(index: number) {
    const descontoAdicionalInput = document.querySelectorAll<HTMLInputElement>(
        ".desconto-adicional"
    )[index];

    const descontoAdicional = Number(descontoAdicionalInput.value);

    if (!isNaN(descontoAdicional) && descontoAdicional > 0) {
        produtos[index].aplicarDesconto(descontoAdicional);
        atualizaLista();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector<HTMLFormElement>("#form")!;
    form.addEventListener("submit", chamaAdicionarItem);
});
