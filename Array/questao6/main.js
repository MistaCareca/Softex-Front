const resultado = document.querySelector('#exibir');
const lista = document.querySelector('#exibirLista');

const sistemaCadastro = {
    users: [],


adicionarUser: function (nome, idade, email) {
    const novoUser = { nome, idade, email };
    this.users.push(novoUser);
    resultado.innerHTML = `Usuario ${nome} adicionado.`;
},

buscarUser: function (email){
    const usuarioEncontrado = this.users.find(user => user.email === email);

        if (usuarioEncontrado) {
            resultado.innerHTML = `Usuário encontrado: 
                Nome: ${usuarioEncontrado.nome}, 
                Idade: ${usuarioEncontrado.idade}, 
                Email: ${usuarioEncontrado.email}`;
        } else {
            resultado.innerHTML = `Usuário não encontrado.`;
        }
    },

listarUsers: function(){
    if(this.users.length === 0){
        lista.innerHTML = `Usuarios nao encontrados`;
    } else {
        lista.innerHTML = `Usuarios encontrados`;
        this.users.forEach((user, index) => {
            lista.innerHTML += `
                <p>${index + 1}. Nome: ${user.nome}, 
                Idade: ${user.idade}, 
                Email: ${user.email}</p>`;
        });
        }
    }
};

function chamadaAdicionado(event){
    event.preventDefault();

    const nome = (document.querySelector('.nome').value).toString();
    const idade = (document.querySelector('.idade').value).toString();
    const email = (document.querySelector('.email').value).toString();

    sistemaCadastro.adicionarUser(nome, idade, email);

}

function chamadaBuscando(event){
    event.preventDefault();
    const email = (document.querySelector('.emailBusca').value).toString();

    sistemaCadastro.buscarUser(email);

}

function exibirLista(){
    sistemaCadastro.listarUsers();
}


