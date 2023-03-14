import { useState } from 'react';
import './App.css';

function App() {
  const [juros, setJuros] = useState(0);
  const [capital, setCapital] = useState(0);
  const [taxa, setTaxa] = useState(0);
  const [tempo, setTempo] = useState(0);
  const [numFinal, setNumFinal] = useState(0);
  const [taxaAoMes, setTaxaAoMes] = useState(false);
  const [tempoAoMes, setTempoAoMes] = useState(false);
  
  function calcular() {
    let numFinal = 0;
    if (juros === 0) {
      numFinal = (capital * (taxaAoMes ? taxa : taxa/12) * (tempoAoMes ? tempo : taxa/12)) / 100;
    } else if (capital === 0) {
      numFinal = (juros * 100) / ((taxaAoMes ? taxa : taxa/12) * (tempoAoMes ? tempo : taxa/12));
    } else if (taxa === 0) {
      numFinal = (juros * 100) / (capital * (tempoAoMes ? tempo : taxa/12));
    } else if (tempo === 0) {
      numFinal = (juros * 100) / (capital * (taxaAoMes ? taxa : taxa/12));
    }
    setNumFinal(numFinal);
  }

  function reset() {
    setJuros(0);
    setCapital(0);
    setTaxa(0);
    setTempo(0);
    setNumFinal(0);
  }

  return (
    <div className="App">
      <h1>Calculadora de Juros Simples</h1>
      {numFinal !== 0 ? (
        <>
          <h1>{juros === 0 ? `O juros produzido foi  ${String(numFinal)}` : capital === 0 ? `O capital aplicado foi ${String(numFinal)}` : taxa === 0 ? `A taxa foi ${String(numFinal)}% ao mês` : `O tempo foi ${String(numFinal)} ao mês`}</h1>
          <button onClick={() => reset()}>Resetar</button>
        </>
      ) : (
        <>
          <label>Juros</label>
          <input
            placeholder="Juros"
            step="0.01"
            type="number"
            value={juros}
            onChange={(e) => setJuros(Number(e.target.value))}
          />
          <label>Capital</label>
          <input
            placeholder="Capital"
            step="0.01"
            type="number"
            value={capital}
            onChange={(e) => setCapital(Number(e.target.value))}
          />
          <label>Taxa</label>
          <div className="input-select">
            <input
                className='input-taxa'
                placeholder="Taxa"
                step="0.01"
                type="number"
                value={taxa}
                onChange={(e) => setTaxa(Number(e.target.value))}
            />
            <select className='input' value={taxaAoMes ? 'S' : 'N'} onChange={(e) => setTaxaAoMes(e.target.value === 'S')}>
                <option value="S">Ao Mês</option>
                <option value="N">Ao Ano</option>
            </select>
          </div>
            <label>Tempo</label>
         <div className="input-select">
            <input
                className='input-taxa'
                placeholder="Tempo"
                step={"0.01"}
                type="number"
                value={tempo}
                onChange={(e) => setTempo(Number(e.target.value))}
            />
            <select className='input' value={tempoAoMes ? 'S' : 'N'} onChange={(e) => setTempoAoMes(e.target.value === 'S')}>
                <option value="S">Ao Mês</option>
                <option value="N">Ao Ano</option>
            </select>
          </div>
         <p>
            O número que for 0 será o número a ser descoberto pela conta!
         </p>
         <button onClick={() => calcular()}>
            Calcular
         </button>
                </>
            )}
    </div>
  )
}

export default App
