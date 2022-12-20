import { Conta } from "./abstract/Conta"

export class ContaCorrente extends Conta {
    constructor(
        private limite: number,
        numero: string
        ) {
            super(numero)
        }
        
    public transferir(
            contaDestino: Conta,
            valor: number
            ): void {
                if (this.calcularSaldo() >= valor) {
                    contaDestino.depositar(valor)
                } else {
                    console.log("Não foi possivel efetuar a operação, seu saldo não é suficiente!")
                }
        }
        
    public calcularSaldo(): number {
        let saldoTotal = this.limite

        this.credito.forEach((credito) => {
            saldoTotal = saldoTotal + credito.getValor()
        })

        this.debito.forEach((debito) => {
            saldoTotal = saldoTotal - debito.getValor()
        })

        return saldoTotal

    }
    
}