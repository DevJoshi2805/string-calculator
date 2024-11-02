import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import add from './calculator';

function App() {

  const [numbers, setNumbers] = useState("")
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const [numberUsed, setNumberUsed] = useState("")

  const handleInput = (e) => {
    if (numberUsed) setNumberUsed("")
    if (result) setResult(null)
    if (error) setError(null)
    setNumbers(e.target.value)
  }

  const handleClick = () => {
    try {
      setNumberUsed(numbers)
      setResult(add(numbers.replace(/\\n/, '\n')))
      setNumbers("")
      setError(null)
    } catch (e) { 
      setError(e.message)
      setResult(null)
    }
    
  }

  return (
    <div className="calculator">
      <div className='input_area'>
        <h2>Enter String here</h2>
        <input value={numbers} onChange={handleInput} placeholder='Please enter your Numeber Here!!!'/>
        <button className='submit_button' onClick={handleClick}>Calculate</button>    
      </div>
      
      <div className='result_area'>
        <h2>Output</h2>
        {result && <h3>The result of {numberUsed || "String"} is: {result}</h3>}
        {error && <h3 style={{color: "red"}}>Error for {numberUsed || "String"} is: {error}</h3>}        
      </div>

      <div className='info'>
        <h5>This Assignment Submittion is from Devendra Joshi.</h5>
      </div>
    </div>
  );
}

export default App;
