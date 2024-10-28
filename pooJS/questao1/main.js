class ContaBancaria{
    constructor(){
        this.saldo = 0;
    }

    depositar (valor){
        this.saldo += valor;
        console.log(`Depositado: R$${valor}. Saldo atual: R$${this.saldo}`);
    }

    sacar (valor){
        this.saldo -= valor;
        console.log(`Saque: R$${valor}. Saldo atual: R$${this.saldo}`);

    }

    verificar(){
        console.log(`Saldo atual: R$${this.saldo}`);
    }
}

const conta1 = new ContaBancaria();
conta1.verificar();
conta1.depositar(1000);
conta1.depositar(500);
conta1.sacar(500);
conta1.verificar();
