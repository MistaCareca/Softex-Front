class triangulo{
    constructor(catetoAd, catetoOp, base){
        this.catetoAd = catetoAd;
        this.catetoOp = catetoOp;
        this.base = base;
    }

    get calculaPerimetro(){
        return this.catetoAd + this.catetoOp + this.base;
    }

    area(){
        const sPerimetro = this.calculaPerimetro/2;
        const area = Math.sqrt(sPerimetro * (sPerimetro - this.catetoAd) * (sPerimetro - this.catetoOp) * (sPerimetro - this.base));
        console.log(`O valor da area do tringulo é: ${area}`);
    }

    perimetro(){
        console.log(`O valor do perimetro do tringulo é: ${this.calculaPerimetro}`);

    }

}

const triangulo1 = new triangulo(3, 4, 5);
triangulo1.area();
triangulo1.perimetro();
