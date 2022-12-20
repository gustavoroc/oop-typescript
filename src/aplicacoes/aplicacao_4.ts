import { Cliente } from "../models/Cliente/Cliente";
import { Endereco } from "../models/Cliente/Endereco";
import { ContaCorrente } from "../models/Conta/ContaCorrente";
import { ContaPoupanca } from "../models/Conta/ContaPoupanca";

const cliente1 = new Cliente(
  "329.421.909-23",
  "Gustavo E. Silva",
  "48999128752",
  true,
  [new ContaCorrente(0, "09302-2")],
  [
    new Endereco(
      "68084-214",
      "Avenida Jorge Rafael",
      "4021",
      "Apartamento 732",
      "Curitiba",
      "PR",
      "329.421.909-23"
    ),
    new Endereco(
      "68284-213",
      "Avenida Jorge Rafael",
      "4022",
      "Apartamento 63",
      "Curitiba",
      "PR",
      "329.421.909-23"
    ),
    new Endereco(
      "28284-233",
      "Avenida Rafael",
      "402",
      "Apartamento 13",
      "Curitiba",
      "PR",
      "329.421.909-23"
    ),
  ]
);

const cliente2 = new Cliente(
  "629.411.309-03",
  "Renan E. Bastos",
  "489718298752",
  true,
  [new ContaPoupanca(10, "08212-2")],
  [
    new Endereco(
      "69484-214",
      "Avenida Rafael",
      "421",
      "Apartamento 72",
      "Curitiba",
      "PR",
      "629.411.309-03"
    ),
  ]
);

const contaCliente1 = cliente1.contas[0];
const contaCliente2 = cliente2.contas[0];

contaCliente1.depositar(1000);

console.log(contaCliente1.calcularSaldo());

contaCliente2.depositar(1000);

console.log(contaCliente2.calcularSaldo());

(contaCliente1 as ContaCorrente).transferir(contaCliente2, 500);

console.log(contaCliente1.calcularSaldo());
console.log(contaCliente2.calcularSaldo());
