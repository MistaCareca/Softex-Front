class Aluno{
    constructor(nome, matricula){
        this.nome =nome;
        this.matricula = matricula;

    }

    media(notaP, notaG){
        const media = (notaG + notaP)/2;
        if(media >= 7){
            console.log(`O aluno ${this.nome}, ${this.matricula} esta: Aprovado na materia com media ${media}`);
        } else{
            console.log(`O aluno ${this.nome}, ${this.matricula} esta: Reprovado na materia com media ${media}`);
        }
    }
}

const anulo1 = new Aluno('joao', 2534);

anulo1.media(1,1);
anulo1.media(0,0);
anulo1.media(10,4);
anulo1.media(8,7);
anulo1.media(6,6);
anulo1.media(4,5);

