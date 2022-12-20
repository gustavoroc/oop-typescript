import { Credito } from "../Credito"
import { Debito } from "../Debito"

export abstract class Conta {
    
    public credito: Credito[] = []
    public debito: Debito[] = []

    constructor(
        private numero: string,
    ) {}

    public depositar(valor: number): void {
        const credito = new Credito(valor, new Date(), this.numero)
        this.credito.push(credito)
    }

    public sacar(valor: number): void {
        if(this.calcularSaldo() >= valor) {
            const debito = new Debito(valor, new Date(), this.numero)
            this.debito.push(debito)
        } else {
            console.log("Não foi possivel efetuar a operação, seu saldo não é suficiente!")
        }
    }

    abstract calcularSaldo(): Number

}