function multiplos(event){
    event.preventDefault();

    for(let i = 1; i <= 100; i++){
        if(i % 3 == 0){
            document.querySelector('#saida').innerHTML += `multiplo de 3: ${i}</br>`;
        }
    }
}