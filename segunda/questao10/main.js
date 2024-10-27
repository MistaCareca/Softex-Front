function contagem(event){
    event.preventDefault();

    const valor = Number(document.querySelector(".valor").value);
    let resultado = document.querySelector("#saida");

    resultado.innerHTML = '';

    for(let i = valor; i != 0; i--){
        if(i === 1){
            resultado.innerHTML += `<p>${i}!!!</p>`
        }else{
            resultado.innerHTML += `<p>${i}...</p>`;
        }
    }
}
