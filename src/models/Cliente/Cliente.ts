import { Conta } from "../Conta/abstract/Conta";
import { IUsuario } from "../IUsuario";
import { Endereco } from "./Endereco";
import { Pessoa } from "./abstract/pessoa";

export class Cliente extends Pessoa implements IUsuario {
  constructor(
    cpf: string,
    nome: string,
    telefone: string,
    private vip: boolean,
    private conta: Conta,
    private enderecos: Endereco[]
  ) {
    super(cpf, nome, telefone);
  }

  public autenticar(): boolean {
    return true;
  }

  public listarEnderecos(): void {
    this.enderecos.forEach((endereco, index) => {
      console.log(`------${endereco}o Endereco -------`);
      console.log(endereco);
      console.log(`----------------------------------`);
    });
  }

  public getConta(): Conta {
    return this.conta;
  }
}
