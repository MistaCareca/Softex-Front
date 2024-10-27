function verificaParidade(num){
    const resultado = (num % 2 == 0) ? "Par" : "Impar";
    return resultado;
}

function chamda(event){
    event.preventDefault();

    const valor = Number(document.querySelector('.valor').value);

    const resultado = verificaParidade(valor);

    document.querySelector("#saida").innerHTML = `<p>O valor ${valor} é ${resultado}</p>`;

}