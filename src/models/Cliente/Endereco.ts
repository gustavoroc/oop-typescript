export class Endereco {
  constructor(
    private cep: string,
    private logradouro: string,
    private numero: string,
    private complemento: string,
    private cidade: string,
    private uf: string
  ) {}

  public toString(): string {
    return `
        Cep: ${this.cep}
        Logradouro: ${this.logradouro},
        Numero: ${this.numero}
        Complemento: ${this.complemento}
        Cidade: ${this.cidade}
        UF: ${this.uf}
    `;
  }
}
