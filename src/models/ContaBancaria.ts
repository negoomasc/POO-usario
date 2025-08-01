export class ContaBancaria {
  private saldo: number;

  constructor() {
    this.saldo = 0;
  }

  depositar(valor: number): void {
    if (valor > 0) {
      this.saldo += valor;
    }
  }

  sacar(valor: number): void {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
    }
  }

  verSaldo(): number {
    return this.saldo;
  }
}
