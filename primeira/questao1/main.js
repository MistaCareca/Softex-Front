/*Escreva um programa para ler 2 valores 
(considere que não serão informadosvalores iguais)
e escrever o maior deles.*/


/*Uso pelo Terminal*/

/*function maior(valor1, valor2){
    let maior = valor1 > valor2 ? valor1 : valor2;
    console.log(`o maior valor entre ${valor1} e ${valor2} é ${maior}`);
}
    maior(10,12);*/

/*Uso pelo Navegador*/

    function maior(event){
        event.preventDefault();

        const valor1 = Number(document.querySelector(".valor1").value);
        const valor2 = Number(document.querySelector(".valor2").value);

        const maior = valor1 > valor2 ? valor1 : valor2;
        const resultado = `O maior valor entre ${valor1} e ${valor2} é ${maior}`;

        document.querySelector("#resultado").innerHTML = `<p>${resultado}</p>`;
    }
