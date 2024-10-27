function calculaAreaTriangulo(base, altura){
    const formula = (base * altura)/2;

    return formula;
}

function chamada(event){
    event.preventDefault();

    const base = Number(document.querySelector(".base").value);
    const altura = Number(document.querySelector(".altura").value);

    const resultado = calculaAreaTriangulo(base, altura);

    document.querySelector("#saida").innerHTML = `<p>a area do triangulo é ${resultado}</p>`;
}