const lista = [];

function adicionarTarefa(tarefa){
    lista.push(tarefa);
    imprimirTarefas(lista)
}

function chamaAdicionarTarefa(event){
    event.preventDefault();

    const tarefa = (document.querySelector(".tarefa").value).toString();

    adicionarTarefa(tarefa);
    document.querySelector(".tarefa").value = ""; 

}

function removerUltimaTarefa(event){
    event.preventDefault();
    lista.pop();
    imprimirTarefas(lista)
}

function removerPrimeiraTarefa(event){
    event.preventDefault();
    lista.shift();
    imprimirTarefas(lista)
}

function imprimirTarefas(lista){
    document.querySelector("#exibir").innerHTML = `<p>Lista de Tarefas: [${lista.join(', ')}]</p>`;
}

