import './App.css';
import { useState } from 'react';

function App() {
  const [age, setAge] = useState(0);
  const [resultUp, setResultUp] = useState(0);
  const [resultLow, setResultLow] = useState(0);

  function calculate() {
    setResultUp((220 - age) * 0.85)
    setResultLow((220 - age) * 0.65)
  }

  return (
    <div>
      <h3>Heart rate limits calculator</h3>
      <form>
        <div>
          <label>AGE</label>
          <br />
          <input type="number" value={age} onChange={e => setAge(e.target.value)} />
        </div>
        <br/>

        <div>
          <label>HEART RATE LIMITS</label>
          <br />

          <output id='output'>{resultLow} - {resultUp}</output>
        </div>
        <br/>

        <button onClick={calculate}>Calculate</button>
      </form>
    </div>
  );
}

export default App;
