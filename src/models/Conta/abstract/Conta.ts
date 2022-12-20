import { ClientError } from '../../Error/ClientError';
import { Credito } from '../Credito';
import { Debito } from '../Debito';

export abstract class Conta {
  public credito: Credito[] = [];
  public debito: Debito[] = [];

  constructor(private numero: string) {}

  public depositar(valor: number, date = new Date()): void {
    const credito = new Credito(valor, date, this.numero);
    this.credito.push(credito);
  }

  public sacar(valor: number, date = new Date()): void {
    if (this.calcularSaldo() >= valor) {
      const debito = new Debito(valor, date, this.numero);
      this.debito.push(debito);
    } else {
      throw new ClientError('Saldo insuficiente', 403);
    }
  }

  abstract calcularSaldo(): Number;
}
