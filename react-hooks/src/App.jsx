import './App.css'
import ThemeProvider from './data/ThemeProvider';
import Teste from './ui/Teste';
import Teste2 from './ui/Teste2';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Teste />
        <Teste2 />
      </div>
    </ThemeProvider>
  );
}

export default App

