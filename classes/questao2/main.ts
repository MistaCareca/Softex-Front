// Classe abstrata Veiculo
abstract class Veiculo {
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    abstract mostrarInformacoes(): void;

    abstract calcularConsumoCombustivel(distancia: number, litros: number): number;
}

class Carro extends Veiculo {
    numeroPortas: number;

    constructor(marca: string, modelo: string, ano: number, numeroPortas: number) {
        super(marca, modelo, ano);
        this.numeroPortas = numeroPortas;
    }

    mostrarInformacoes(): void {
        console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}, Portas: ${this.numeroPortas}`);
    }

    calcularConsumoCombustivel(distancia: number, litros: number): number {
        return distancia / litros;
    }
}

class Moto extends Veiculo {
    cilindradas: number;

    constructor(marca: string, modelo: string, ano: number, cilindradas: number) {
        super(marca, modelo, ano);
        this.cilindradas = cilindradas;
    }

    mostrarInformacoes(): void {
        console.log(`Moto: ${this.marca} ${this.modelo}, Ano: ${this.ano}, Cilindradas: ${this.cilindradas}cc`);
    }

    calcularConsumoCombustivel(distancia: number, litros: number): number {
        return distancia / litros;
    }
}

class Caminhao extends Veiculo {
    capacidadeCarga: number;

    constructor(marca: string, modelo: string, ano: number, capacidadeCarga: number) {
        super(marca, modelo, ano);
        this.capacidadeCarga = capacidadeCarga;
    }

    mostrarInformacoes(): void {
        console.log(`Caminhão: ${this.marca} ${this.modelo}, Ano: ${this.ano}, Carga: ${this.capacidadeCarga} toneladas`);
    }

    calcularConsumoCombustivel(distancia: number, litros: number): number {
        return distancia / (litros * 1.5);  
    }
}

function mostrarVeiculos(veiculos: Veiculo[]): void {
    veiculos.forEach((veiculo) => veiculo.mostrarInformacoes());
}

const veiculos: Veiculo[] = [];

veiculos.push(new Carro("Toyota", "Corolla", 2020, 4));
veiculos.push(new Moto("Yamaha", "MT-07", 2019, 700));
veiculos.push(new Caminhao("Volvo", "FH", 2018, 18));

console.log("Veículos registrados:");
mostrarVeiculos(veiculos);

console.log("\nConsumo de combustível:");
veiculos.forEach((veiculo) => {
    const consumo = veiculo.calcularConsumoCombustivel(500, 40);
    console.log(`Consumo de ${veiculo.marca} ${veiculo.modelo}: ${consumo.toFixed(2)} km/L`);
});
