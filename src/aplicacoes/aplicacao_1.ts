import { Cargo } from '../models/Funcionario/Cargo';
import { Funcionario } from '../models/Funcionario/Funcionario';

const funcionario1 = new Funcionario(
  2000,
  [new Cargo('Atendente')],
  '694.683.070-93',
  'Josias R. Costa',
  '419993842108'
);

const funcionario2 = new Funcionario(
  8000,
  [new Cargo('Gerente')],
  '530.440.080-18',
  'Lucas S. Erlenm',
  '489930948848'
);

console.log(funcionario1);
console.log(funcionario2);
