function calculaJurosCompostos(p, r, n, t){
    const formula = p* Math.pow((1 + r / n), (n * t));
    
    return formula;
}

function chamada(event){
    event.preventDefault();

    const p = Number(document.querySelector(".p").value);
    const r = Number(document.querySelector(".r").value);
    const n = Number(document.querySelector(".n").value);
    const t = Number(document.querySelector(".t").value);

    const resultado = calculaJurosCompostos(p, r, n, t);
    document.querySelector("#resultado").innerHTML = `<p>O resultado é ${resultado.toFixed(2)}</p>`;
}