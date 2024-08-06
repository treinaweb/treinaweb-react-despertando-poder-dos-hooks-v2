import { useState } from 'react';
import './App.css';

function App() {
  const [contador, setContador] = useState(0);
  const random = Math.random();

  return (
    <>
    <button onClick={() => setContador(contador + 1)}>Contador: {contador}</button>
    <h3>{random}</h3>
    </>
  )
}

export default App

