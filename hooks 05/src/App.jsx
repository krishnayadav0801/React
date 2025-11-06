import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(5)

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>chai or react</h1>
      <h2>Counter value: {counter}</h2>
      <button
        onClick={addValue}
      >Add value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}> {counter} Remove value</button>
      <p> {counter} </p>
    </>
  )
}

export default App
