import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";
import { useState } from 'react';

function App() {
  const [contador, setContador] = useState(0);
  const contadorComprar = () => {
    setContador(prevState => prevState + 1);
  }

  const agregarNum = () => {
    setContador(prevState => prevState + 1)
  }

  return (
    <div className="App">
      <Cabecera contador={contador} />
      <Listado agregarNum={agregarNum} />
    </div>
  )
}

export default App;
