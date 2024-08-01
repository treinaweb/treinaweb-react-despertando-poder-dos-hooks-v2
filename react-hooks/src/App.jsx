import { useEffect, useRef, useState, createRef } from 'react'
import './App.css'

function Counter() {
  const [contador, setContador] = useState(0);
  const [title, setTitle] = useState('');
  const contadorRef = useRef(0);
  const input = createRef();

  useEffect(() => {
    setInterval(() => {
      console.log(contadorRef.current);
    }, 2000)
  }, []);

  useEffect(() => {
    contadorRef.current = contador;
  }, [contador]);

  return (
    <div>
      <input ref={input} type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
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

