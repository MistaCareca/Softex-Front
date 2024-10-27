function tabuada(event){
    event.preventDefault();

    const valor = Number(document.querySelector('.valor').value);
    const resultadoDiv = document.querySelector('#reusltado');
    resultadoDiv.innerHTML = '';
    
    for(let i = 1; i <= 10; i++){
        let produto = valor * i;
        resultadoDiv.innerHTML += `<p>${i} X ${valor} = ${produto}</p>`;
    }
}