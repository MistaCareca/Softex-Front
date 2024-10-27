const banco_nomes = [];

function exibirnomes(){
    document.querySelector("#exibir").innerHTML = `<p>Lista de nomes: [${banco_nomes.join(', ')}]</p>`;

}

function addNome(nome){
    banco_nomes.push(nome);
    exibirnomes();
}

function chamaAddNome(event){
    event.preventDefault();
    const nome = (document.querySelector('.nome').value).toString();
    addNome(nome);
}
