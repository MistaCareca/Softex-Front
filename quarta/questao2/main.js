function verificarPar(event){
    event.preventDefault();

    const valor = Number(document.querySelector('.valor').value);

    const resultado = (valor % 2 === 0) ? true : false;

    if(resultado === true){
        document.querySelector('#saida').innerHTML += `<p>${valor} é Par</p>`;
    } else{
        document.querySelector('#saida').innerHTML += `<p>${valor} é impar</p>`;
    }
}
