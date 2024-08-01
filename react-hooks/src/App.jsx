import { useEffect, useRef, useState } from 'react'
import './App.css'

function Counter() {
  const [contador, setContador] = useState(-1);
  const [title, setTitle] = useState('');

  useEffect(() => {
    setContador(contador => contador + 1);
  }, [title]);

  return (
    <div>
      <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      <button onClick={() => setContador(contador + 1)}>Contador: {contador}</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App

