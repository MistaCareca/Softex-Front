/*Escreva um programa para ler o ano de nascimento de uma pessoa e escrever
uma mensagem que diga se ela poderá ou não votar este ano 
(não é necessário considerar o mês em que ela nasceu).*/

/*Uso pelo Terminal*/
/*
function VerificarVotar(ano){
    anoAtual = new Date();
    idade = anoAtual.getFullYear() - ano;


    if(idade >= 18){
        console.log(`Voce esta apto para votar`);
    }
    else if(idade === 17){
        console.log(`Proximo ano voce estara apto para votar`);
    }
    else{
        console.log(`Voce nao esta apto para votar esse ano`);
    }
}

VerificarVotar(2005);
*/

function VerificarVotar(event){
    event.preventDefault();
    const ano = Number(document.querySelector('.ano').value);

    anoAtual = new Date();
    idade = anoAtual.getFullYear() - ano;

    let resultado = "";
    if(idade >= 18){
        resultado = "Voce esta apto para votar esse ano";
    } else if(idade === 17){
        resultado = "Voce esta apto proximo ano para votaçoes";
    } else{
        resultado = "Voce nao esta apto para votar esse ano";
    }

    document.querySelector("#resultado").innerHTML += `<p>${resultado}</p>`;
}