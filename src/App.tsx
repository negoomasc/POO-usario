import React, { useState } from 'react';
import { ContaBancaria } from './models/ContaBancaria';

const conta = new ContaBancaria();

const App: React.FC = () => {
  const [valor, setValor] = useState<number>(0);
  const [operacao, setOperacao] = useState<'deposito' | 'saque'>('deposito');
  const [saldoAtual, setSaldoAtual] = useState<number>(conta.verSaldo());

  const handleOperacao = () => {
    if (operacao === 'deposito') {
      conta.depositar(valor);
    } else {
      conta.sacar(valor);
    }
    setSaldoAtual(conta.verSaldo());
    setValor(0);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>💰 Conta Bancária</h1>
      <p>Saldo atual: R$ {saldoAtual.toFixed(2)}</p>

      <div>
        <label>
          Operação:
          <select value={operacao} onChange={(e) => setOperacao(e.target.value as 'deposito' | 'saque')}>
            <option value="deposito">Depósito</option>
            <option value="saque">Saque</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Valor:
          <input
            type="number"
            value={valor}
            onChange={(e) => setValor(Number(e.target.value))}
          />
        </label>
      </div>

      <button onClick={handleOperacao}>Executar</button>
    </div>
  );
};

export default App;
