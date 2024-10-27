const endereco = {
    rua: "Rua dos Pinherios",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

function exibirEndereco(){
    document.querySelector("#saida").innerHTML = `<p>O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua} com nª ${endereco.numero}"</p>`;
}