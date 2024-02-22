import logo from './logo.svg';
import './App.css';
import Buscador from "./Buscador";
import Carta from './Carta';
import './Carta.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://i.pinimg.com/originals/95/f3/4e/95f34e9bc588226a8c91a1be5bbebd67.png"  width="45px" height="45px"></img>
        <h1>Recetas de Cocina</h1>
      </header>
      <Buscador label={"Nombre de la receta"}/>
      <div className="Cartas">
      <Carta url={""} titulo={"a"} descripcion={"a"} txtBtn={"Ver"}/>
      <Carta url={""} titulo={"a"} descripcion={"a"} txtBtn={"Ver"}/>
      <Carta url={""} titulo={"a"} descripcion={"a"} txtBtn={"Ver"}/>
      <Carta url={""} titulo={"a"} descripcion={"a"} txtBtn={"Ver"}/>
      <Carta url={""} titulo={"a"} descripcion={"a"} txtBtn={"Ver"}/>
      <Carta url={""} titulo={"a"} descripcion={"a"} txtBtn={"Ver"}/>
      <Carta url={""} titulo={"a"} descripcion={"a"} txtBtn={"Ver"}/>
      <Carta url={""} titulo={"a"} descripcion={"a"} txtBtn={"Ver"}/>

      </div>
    </div>

  );
}

export default App;
