/*function investir(event){
    event.preventDefault();
 
    const valor =  parseFloat(document.querySelector('.valor'));
    let i = 0;
    const juros = 0.01;
    let montante = valor;
    
    while(i <= 12){
        montante = montante * juros;
        i++;
    }
    document.querySelector('#saida').innerHTML = `<p>O valor do montante final pos o 1 ano de investimento é ${montante.toFixed(2)</p>`;
}*/

function investir(event){
    event.preventDefault();

    const valor = parseFloat(document.querySelector('.valor').value);
    const juros = 0.01;
    let montante = valor;

    for(let i = 0; i <= 12; i++){
        montante += montante * juros;
    }

    document.querySelector('#saida').innerHTML = `<p>O valor do montante final pos o 1 ano de investimento é ${montante.toFixed(2)}</p>`;
}