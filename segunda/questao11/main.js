    function primo(event){
        event.preventDefault();

        const valor = Number(document.querySelector(".valor").value);
        let saida = document.querySelector('#resultado');

if(valor > 0){

        if( valor <= 1){
            saida.innerHTML += `<p>O valor ${valor} não é primo!<br>Informe outro!</p>`;
            return;
        }

        let primo = true;
        let stop = false;

        for(let i = 2; i <= Math.sqrt(valor) && stop == false; i++){
            if(valor % i === 0){
                primo = false;
                stop = true;
            } else{
                primo = true
            }
        }
        if(primo){
            saida.innerHTML += `<p>O valor ${valor} é primo!<br>Informe outro!</p>`;

        } else{
            saida.innerHTML += `<p>O valor ${valor} não é primo!<br>Informe outro!</p>`;

        }
    } else{
        saida.innerHTML = '';
    }
}