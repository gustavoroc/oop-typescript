import { Cliente } from "../models/Cliente/Cliente";
import { Endereco } from "../models/Cliente/Endereco";
import { ContaPoupanca } from "../models/Conta/ContaPoupanca";

const cliente1 = new Cliente(
    "329.421.909-23",
    "Gustavo E. Silva",
    "48999128752",
    true,
    [new ContaPoupanca(1, "09302-2")],
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

const contaCliente1 = cliente1.contas[0]

for (let mes = 1; mes <= 12; mes++) {
    if (mes == 3)
    contaCliente1.sacar(100, new Date(2022, mes, 5))
    
    if (mes == 7)
    contaCliente1.sacar(200, new Date(2022, mes, 8))
    
    contaCliente1.depositar(200, new Date(2022, mes, 1))

    console.log(`O saldo para o mês ${mes}, já acrescido de rendimentos, é: ${contaCliente1.calcularSaldo()}.`)
}
