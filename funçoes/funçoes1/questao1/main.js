function calcularMedia(num1, num2, num3){
    return (num1 + num2 + num3) / 3;
}

function chamada(event){
    event.preventDefault();

    const nota1 = Number(document.querySelector('.nota1').value);
    const nota2 = Number(document.querySelector('.nota2').value);
    const nota3 = Number(document.querySelector('.nota3').value);

    const resultado = calcularMedia(nota1, nota2, nota3);

    document.querySelector('#resultado').innerHTML = `<p>A media das notas é ${resultado.toFixed(2)}</p>`;
}

