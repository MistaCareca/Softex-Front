/*Tendo como entrada a altura e o sexo (codificado da seguinte forma: 
1:feminino 2:masculino) de uma pessoa, construa um programa que calcule e imprima seu
peso ideal, utilizando as seguintes Fórmulas:
• para homens: (72.7 * Altura) – 58
• para mulheres: (62.1 * Altura) – 44.7*/


/*Uso pelo Terminal*/

/*
function pesoIdeal(altura, sexo){
    let pesoIdeal;
    if(sexo === 1){
        pesoIdeal = (72.7 * altura) - 58;
    } else if(sexo === 2){
        pesoIdeal = (62.1 * altura) - 44.7;
    } else{
        console.log("informe um valor valido 1 - mulheres ou 2 - homens");
    }
    console.log(`Seu peso ideal é ${pesoIdeal}`);
}

pesoIdeal(1.8, 2);
*/

function pesoIdeal(event){
    event.preventDefault();

    const altura = Number(document.querySelector('.altura').value);
    const sexo  = Number(document.querySelector('.sexo').value);
    let resultado, formula;

    if(sexo === 1){
        formula = (72.7 * altura) - 58;
        resultado = `Seu peso ideal é ${formula}`;
    } else if(sexo === 2){
        formula = (62.1 * altura) - 44.7;
        resultado = `Seu peso ideal é ${formula}`;
    }else{
        resultado = `Informe um valor valido para sexo 1 - mulheres, 2 - homens`;
    }

    document.querySelector("#resultado").innerHTML = `<p>${resultado}</p>`;
}
