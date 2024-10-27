function concatenarStrings(texto1, texto2){
    return (texto1 + ' ' + texto2);
}


function chamada(event){
    event.preventDefault();

    const nome = (document.querySelector('.nome').value).toString();
    const sobrenome = (document.querySelector('.sobrenome').value).toString();

    const resultado = concatenarStrings(nome, sobrenome);

    document.querySelector('#saida').innerHTML = `<p>Seu nome é ${resultado}</p>`;
}
