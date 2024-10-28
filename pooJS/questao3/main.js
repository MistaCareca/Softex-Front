class Produto{
    constructor(nome, preco, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    valortotal(){
        const total = this.preco * this.quantidade;
        console.log(`Valor total em estoque: ${total}`);
    }

    add(novoAdd){
        this.quantidade += novoAdd;
        console.log(`Valor em estoque atualizado em +${novoAdd}`);
        this.valortotal();
    }

    remover(novoRemove){
        this.quantidade -= novoRemove;
        console.log(`Valor em estoque atualizado em -${novoRemove}`);
        this.valortotal();
    }

}

const produto1 = new Produto('Lapis', 1, 50);
const produto2 = new Produto('Caneta', 2, 50);

produto1.valortotal();
produto1.add(20);
produto1.remover(35);
console.log("----");
produto2.valortotal();
produto2.add(5);
produto2.remover(50);