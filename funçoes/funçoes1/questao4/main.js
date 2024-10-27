function experiencia(anos){
    if(anos <= 1){
        return "Iniciante";
    } else if(1 < anos || anos >= 3){
        return "Intermediario";
    } else if(3 < anos || anos >= 6){
        return "Avançado";
    } else{
        return "Jedi Master";
    }
}

function chamada(event){
    event.preventDefault();

    const anos = Number(document.querySelector('.anos').value);

    const resultado = experiencia(anos);

    document.querySelector("#saida").innerHTML = `<p>Seu grau de experiencia é ${resultado}</p>`;

}