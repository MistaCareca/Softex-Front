function converterHorasParaMinutos(valor){
    return valor * 60;
}

function chamada(event){
    event.preventDefault();

    const horas = Number(document.querySelector(".valor").value);
    const resultado = converterHorasParaMinutos(horas);

    document.querySelector("#saida").innerHTML = `${horas} horas equivalem a ${resultado} minutos`;
}

