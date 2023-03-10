import { Pessoa } from '../Cliente/abstract/pessoa';
import { IUsuario } from '../IUsuario';
import { Cargo } from './Cargo';

export class Funcionario extends Pessoa implements IUsuario {
  constructor(
    private _salario: number,
    private _cargos: Cargo[],
    cpf: string,
    nome: string,
    telefone: string
  ) {
    super(cpf, nome, telefone);
  }

  autenticar(): boolean {
    return true;
  }

  public get salario(): number {
    return this._salario;
  }

  public set salario(value: number) {
    this._salario = value;
  }

  public get cargos(): Cargo[] {
    return this._cargos;
  }

  public set cargos(value: Cargo[]) {
    this._cargos = value;
  }
}
