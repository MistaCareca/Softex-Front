function calcularPagamento(event){
    event.preventDefault();

    const valor_Hora = Number(document.querySelector('.valorHora').value);
    const hora_Trabalhada = Number(document.querySelector('.horatraBalhada').value);

    const salario_bruto = valor_Hora * hora_Trabalhada;


    let descontIR = 0, percentualIR = 0, percenturalINSS = 0, descontINSS = 0;

    if(salario_bruto <= 900){
        percentualIR = 0;

    } else if(salario_bruto <= 1500){
        percentualIR = 5;

    } else if(salario_bruto <= 2500){
        percentualIR = 10;

    } else{
        percentualIR = 20;

    }

    descontIR = (percentualIR / 100) * salario_bruto;

    if(salario_bruto <= 1300){
        percenturalINSS = 10;
    } else if(salario_bruto <= 2500){
        percenturalINSS = 9;
    } else{
        percenturalINSS = 11;
    }
    descontINSS = (percenturalINSS / 100) * salario_bruto;

    const descontoSindicato = 0.03 * salario_bruto;
    const fgts = 0.11 * salario_bruto
    const totalDescontos = descontINSS + descontIR;
    const salario_liquido = salario_bruto - totalDescontos;

    document.querySelector("#resultado").innerHTML = `
    <h2>-----Pagamento-----</h2>
    <p>Salario bruto: ${salario_bruto}</p>
    <p>(-) IR (${percentualIR}%): R$ ${descontIR}</p>
    <p>(-) INSS (${percenturalINSS}%): R$ ${descontINSS}</p>
    <p> EXTRA(-) Sindicato (3%): R$ ${descontoSindicato}</p>
    <p>FGTS (11%): R$ ${fgts}</p>
    <p>Total de Descontos: R$ ${totalDescontos}</p>
    <p>Salario Liguido: R$ ${salario_liquido}</p>
    <h2>------------------------</h2>
    `;
}