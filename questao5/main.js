function media(num1, num2){
    return (num1 + num2) / 2;
}

function diferenca(num1, num2){
    let diff = num1 - num2;

    if(diff < 0){
    return diff < 0 ? diff * -1 : diff;
    } else if(num1 === num2){
        return `Os valores sao iguais`;
    }

}

function produto(num1, num2){
    return num1 * num2;
}

function divisao (num1, num2){
    if(num1 === 0){
        return `Divisao invalida`;
    } else{
        return num1 / num2;
    }
}

function Operacao(event){
    event.preventDefault();

    const opcao = Number(document.querySelector('.opcao').value);
    const valor1 = Number(document.querySelector('.valor1').value);
    const valor2 = Number(document.querySelector('.valor2').value);
    let resultado;

    if(opcao === 1){
        resultado = media(valor1, valor2);
    } else if(opcao === 2){
        resultado = diferenca(valor1, valor2);
    } else if(opcao === 3){
        resultado = produto(valor1, valor2);
    } else{
        resultado = divisao(valor1, valor2);
    }
    document.querySelector('#resultado').innerHTML += `<p>${resultado}</p>`;
}