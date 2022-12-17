abstract class Conta {
    private numero: String;

    public depositar(valor: number): string {
        return `O valor de ${valor} foi depositado na conta ${this.numero}`;
    };

    public sacar(valor: number): string {
        return `O valor de ${valor} foi sacado da conta ${this.numero}`;
    };
};

export default Conta;