interface Usuario {
    id: number;
    nome: string;
    email: string;
    idade: number;
    admin: boolean;
}

const usuarios: Usuario[] = [

{id: 1, nome: "brenno", email: "Brenno@algo.com", idade: 19, admin: true},
{id: 2, nome: "Cae", email: "Cae@algo.com", idade: 30, admin: false},

];

function mostrarUsuario(usuarios: Usuario): void{
    console.log(`ID: ${usuarios.id}\nNome: ${usuarios.nome}\nEmail: ${usuarios.email}\nIdade: ${usuarios.idade}\nAdmin: ${usuarios.admin ? "Sim" : "Não"}\n----------------------`);
}

function adicionarUsuario(usuario: Usuario): void{
    usuarios.push(usuario);
    console.log("Usuário ${usuario.nome} adicionado com sucesso");
}

function modificarUsuario(id: number, novosDados: Partial<Usuario>): void{
    const usuario = usuarios.find((u) => u.id === id);

    if(usuario){
        Object.assign(usuario, novosDados);
        console.log(`Usuário ${usuario.nome} modificado com sucesso!`);
    } else{
        console.log(`Usuário com ID ${id} não encontrado.`);
    }

}
    console.log("usuarios iniciais:");
    usuarios.forEach(mostrarUsuario);

    const novoUsuario: Usuario = {id: 3, nome: "Carlos", email: "carlos@gmail.com", idade: 28, admin: false };
    adicionarUsuario(novoUsuario);

    modificarUsuario(2, { nome: "João Silva", idade: 46 });

    console.log("Usuários atualizados:");
    usuarios.forEach(mostrarUsuario);
