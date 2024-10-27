function formula(x, y, z){
    return ((x * y)/2 + z)*5;
}

function chamada(event){
    event.preventDefault();

    const valor1 = Number(document.querySelector('.valor1').value);
    const valor2 = Number(document.querySelector('.valor2').value);
    const valor3 = Number(document.querySelector('.valor3').value);

    const resultado = formula(valor1, valor2, valor3);
    document.querySelector('#saida').innerHTML = `<p>Resultado ${resultado}</p>`;
}