export class Credito {
  constructor(
    private valor: number,
    private data: Date,
    private numeroDaConta: string
  ) {}

  public getValor(): number {
    return this.valor;
  }
}
