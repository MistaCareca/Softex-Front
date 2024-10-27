function converteCelsiusParaFahrenheit(C){
    const formula = C * (9/5) + 32;
    return formula;
}

function chamada(event){
    event.preventDefault();

    const temperatura = Number(document.querySelector('.valor').value);

    const resultado = converteCelsiusParaFahrenheit(temperatura);

    document.querySelector("#resultado").innerHTML = `<p>O resultado de ${temperatura}C° em F° é ${resultado}F°</p>`;
}