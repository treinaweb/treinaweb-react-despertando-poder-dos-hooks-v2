import { useEffect, useRef, useState } from 'react'
import './App.css'

function Counter() {
  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);
  const botao = useRef();

  useEffect(() => {
    console.log('1');
    setContador2(contador2 + 5);
  }, [contador]);


  return (
    <div>
      <button ref={botao} onClick={() => setContador(contador + 1)}>Contador1: {contador}</button>
      <button onClick={() => setContador2(contador2 + 1)}>Contador2: {contador2}</button>
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

