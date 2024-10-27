function soma(num1, num2){
    return num1 + num2;
}

function chamda(event){
    event.preventDefault();

    const valor1 = Number(document.querySelector('.valor1').value);
    const valor2 = Number(document.querySelector('.valor2').value);

    const resultado = soma(valor1, valor2);

    document.querySelector('#resultado').innerHTML = `<p>a soma dos valores ${valor1} e ${valor2} é ${resultado}</p>`;
}