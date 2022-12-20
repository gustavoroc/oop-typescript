import { Conta } from "./abstract/Conta";

export class ContaPoupanca extends Conta {
  constructor(private rentabilidadeMensal: number, numero: string) {
    super(numero);
  }

  public calcularRendimento(): number {
    let saldoAtual = 0;

    this.credito.forEach((credito) => {
      saldoAtual = saldoAtual + credito.getValor();
    });

    this.debito.forEach((debito) => {
      saldoAtual = saldoAtual - debito.getValor();
    });

    return (saldoAtual * this.rentabilidadeMensal) / 10000;
  }

  public calcularSaldo(): number {
    let saldoTotal = this.calcularRendimento();

    this.credito.forEach((credito) => {
      saldoTotal = saldoTotal + credito.getValor();
    });

    this.debito.forEach((debito) => {
      saldoTotal = saldoTotal - debito.getValor();
    });

    return saldoTotal;
  }
}
