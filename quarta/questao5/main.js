const pessoa = {
    nome: "Brenno Cartaxo",
    idade: 19
}

function novaIdade(pessoa, novaIdade){
    pessoa.idade = novaIdade;
}

function atualiza(event){
    event.preventDefault();
    
    const nome = (document.querySelector('.nome').value).toString();
    const idade = Number(document.querySelector('.idade').value);

    if(nome === pessoa.nome){
        novaIdade(pessoa, idade);
    } else{
        document.querySelector('#saida').innerHTML = `<p>Pessoa nao Cadastrada!</p>`;
    }
}

function exibir(event){
    event.preventDefault();

    document.querySelector('#saida').innerHTML += `<p>${pessoa.nome} </br> ${pessoa.idade}</p>`;

}

