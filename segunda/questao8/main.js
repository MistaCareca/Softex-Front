function soma(event){
    event.preventDefault();

    let somaPares = 0;
    const valor = Number(document.querySelector('.valor').value);

    for(let i = 0; valor > i; i++){
        if(i % 2 === 0){
            somaPares += i;
        }
    }
    document.querySelector("#saida").innerHTML = `<p>A soma dos numeros pares de 0 ate ${valor} é ${somaPares}</p>`;
}