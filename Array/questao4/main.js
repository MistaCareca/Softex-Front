const senhas = [];

function addSenha(senha){
    if(senha.length < 5){
        document.querySelector("#exibir").innerHTML = `<p>A senha deve conter no minimo 5 digitos</p>`
    } else{
        senhas.push(senha);
        document.querySelector("#exibir").innerHTML = `<p>Lista de nomes: [${senhas.join(', ')}]</p>`;
    }
}

function chamadaAddSenha(event){
    event.preventDefault();

    const senha = (document.querySelector(".senha").value).toString();

    addSenha(senha);

}