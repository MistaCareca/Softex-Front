function somavinte(event){
    event.preventDefault();

    let soma20 = 0;
    for(let i = 1; i <= 20; i++){
        let somado = soma20;
        soma20 += i; 
        document.querySelector('#saida').innerHTML += `<p>${somado} + ${i} = ${soma20}</p>`;
    }
    document.querySelector("#saida").innerHTML += `<p>Soma total: ${soma20}</p>`;
}
