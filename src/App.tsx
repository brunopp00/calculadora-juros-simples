import { useState } from 'react'
import './App.css'

function App() {

    const [juros, setJuros] = useState(0)
    const [capital, setCapital] = useState(0)
    const [taxa, setTaxa] = useState(0)
    const [tempo, setTempo] = useState(0)
    
    const [numFinal, setNumFinal] = useState(0)
    
    function calcular() {
        let numFinal = 0
        if(juros === 0) {
            numFinal = (capital*taxa*tempo) / 100
        } else if(capital === 0) {
            numFinal = (juros * 100) / (taxa*tempo)
        } else if(taxa === 0) {
            numFinal = (juros * 100) / (capital*tempo)
        } else if(tempo === 0) {
            numFinal = (juros * 100) / (capital*taxa)
        }
        setJuros(0)
        setCapital(0)
        setTaxa(0)
        setTempo(0)
        setNumFinal(numFinal)
    }

    function reset() {
        setNumFinal(0)
    }

  return (
    <div className="App">
            <h1>Calculadora de Juros Simples</h1>
            {numFinal !== 0 ? (
                <>
                    <h1>O resultado foi {String(numFinal)}</h1>
                    <button onClick={() => reset()}>Resetar</button>
                </>
            ) : (
                <>
                    <label>Juros</label>
                    <input placeholder='Juros' step={"0.01"} type="number" value={juros} onChange={e => setJuros(Number(e.target.value))} />
                    <label>Capital</label>
                    <input placeholder='Capital' step={"0.01"} type="number" value={capital} onChange={e => setCapital(Number(e.target.value))} />
                    <label>Taxa</label>
                    <input placeholder='Taxa' step={"0.01"} type="number" value={taxa} onChange={e => setTaxa(Number(e.target.value))} />
                    <label>Tempo ao Mês</label>
                    <input placeholder='Tempo ao mês' step={"0.01"} type="number" value={tempo} onChange={e => setTempo(Number(e.target.value))} />
                    <p>O número que for 0 será o número a ser descoberto pela conta!</p>
                    <button onClick={() => calcular()}>Calcular</button>
                </>
            )}
    </div>
  )
}

export default App
