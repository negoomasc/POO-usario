export class ContaBancaria {
  private saldo: number;

  constructor() {
    this.saldo = 0;
  }

  depositar(valor: number): string {
    if (valor > 0) {
      this.saldo += valor;
      return 'Depósito realizado com sucesso.';
    }
    return 'Erro: Valor de depósito inválido.';
  }

  sacar(valor: number): string {
    if (valor <= 0) {
      return 'Erro: Valor de saque inválido.';
    }
    if (valor > this.saldo) {
      return 'Erro: Saldo insuficiente.';
    }
    this.saldo -= valor;
    return 'Saque realizado com sucesso.';
  }

  verSaldo(): number {
    return this.saldo;
  }
}
