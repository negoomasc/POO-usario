import React, { useState } from 'react';
import { ContaBancaria } from './models/ContaBancaria';

const conta = new ContaBancaria();

const formatarReal = (valor: number): string =>
  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const App: React.FC = () => {
  const [valor, setValor] = useState<number>(0);
  const [operacao, setOperacao] = useState<'deposito' | 'saque'>('deposito');
  const [saldoAtual, setSaldoAtual] = useState<number>(conta.verSaldo());
  const [mensagem, setMensagem] = useState<string>('');

  const handleOperacao = () => {
    let retorno: string = '';
    if (operacao === 'deposito') {
      retorno = conta.depositar(valor);
    } else {
      retorno = conta.sacar(valor);
    }
    setMensagem(retorno);
    setSaldoAtual(conta.verSaldo());
    setValor(0);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>💰 Conta Bancária</h1>
      <p><strong>Saldo atual:</strong> {formatarReal(saldoAtual)}</p>

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

      {mensagem && <p style={{ marginTop: '10px', color: mensagem.startsWith('Erro') ? 'red' : 'green' }}>{mensagem}</p>}
    </div>
  );
};

export default App;
