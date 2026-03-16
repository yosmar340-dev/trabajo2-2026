import { useState } from 'react'
import './App.css'
const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Contador clic: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
  )
}

export default App