import { useState } from 'react'
import './App.css'


function App() {
  let [couter,setCounter] = useState(15) // use take arg any datatype except function 
  
  const addValue = () => {
    setCounter(prevCouter => prevCouter + 1)
  }

  const dicValue = () => {
    if (couter > 0) {
      setCounter(prevCouter => prevCouter - 1)   
    }

  }
 
  
  return (
    <>
    <h1>Counter and dicounter</h1>
      <h2> Value: {couter}</h2>
      <button onClick={addValue}>Add  </button>
      <br /><br />
      <button onClick={dicValue}>minus  </button>
    </>
  )
}

export default App
