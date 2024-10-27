let vetor = [];

function addnumero(valor){
    vetor.push(valor);
    const maior = maiorNumero();
    exibirMaior(maior);
    exibirVetor();
}

function maiorNumero(){
    return Math.max(...vetor);
}

function exibirMaior(maior){
    document.querySelector("#saida").innerHTML = `<p>O maior numero é ${maior}</p>`;
}

function exibirVetor(){
    document.querySelector("#exibir").innerHTML = `<p>Vetor: [${vetor.join(', ')}]</p>`;

}

function chamadaAddnumero(event){
    event.preventDefault();
    const valor = Number(document.querySelector('.valor').value);
    addnumero(valor);

}




