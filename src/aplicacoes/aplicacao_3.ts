import { Cliente } from "../models/Cliente/Cliente";
import { Endereco } from "../models/Cliente/Endereco";
import { ContaCorrente } from "../models/Conta/ContaCorrente";

const cliente1 = new Cliente(
  "329.421.909-23",
  "Gustavo E. Silva",
  "48999128752",
  true,
  [new ContaCorrente(1000, "09302-2")],
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

const contaCliente1 = cliente1.contas[0];

contaCliente1.depositar(100);

console.log(contaCliente1.calcularSaldo());

contaCliente1.sacar(50);

console.log(contaCliente1.calcularSaldo());

try {
  contaCliente1.sacar(4000);
} catch (err) {
  console.log(err);
}
