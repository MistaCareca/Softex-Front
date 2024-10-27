/*Leia o código de um determinado produto e mostre sua classificação. Utilize a
seguinte tabela como referência*/


/*Terminal*/
/*
function classificacao(id){
    if(id === 1){
        console.log("Alimento Não-Perecivel");

    }else if(id === 2 || id === 3 || id === 4){
        console.log("Alimento Perecivel");

    }else if(id === 5 || id === 6){
        console.log("Vestuario");

    }else if(id === 7){
        console.log("Higiene Pessoal");

    }else if(id >= 8 && id <= 15){
        console.log("Limpeza e Utensilios Domesticos");

    } else{
        console.log(`Codigo Invalido`);
    }
}

classificacao(3);
*/

/*Navegador*/
function classificacao(event){
    event.preventDefault();

    const id = Number(document.querySelector('.id').value);
    let resultado;
    if(id === 1){
        resultado = ("Alimento Não-Perecivel");

    }else if(id === 2 || id === 3 || id === 4){
        resultado = ("Alimento Perecivel");

    }else if(id === 5 || id === 6){
        resultado = ("Vestuario");

    }else if(id === 7){
        resultado = ("Higiene Pessoal");

    }else if(id >= 8 && id <= 15){
        resultado = ("Limpeza e Utensilios Domesticos");

    } else{
        resultado = (`Codigo Invalido`);
    }
    document.querySelector("#resultado").innerHTML += `<p>${resultado}</p>`;
}