import logo from './logo.svg';
import './App.css';
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id = "titulo">Nuevo Usuario</h1>

        <div className= "customInputs">
          <CustomInput label={"Usuario"} disabled={false} type={"text"}/>
          <CustomInput label={"Correo"} disabled={false} type={"text"}/>
          <CustomInput label={"Contraseña"} disabled={false} type={"password"}/>
        </div>

        <div id= "check">
          <CustomInput  label={"Acepto terminos  y condiciones"} disabled={false} type={"checkbox"}/>
        </div>
        
        <div className= "btns">
          <CustomButton texto="cancelar" disabled={false} />
          <CustomButton id="btnAceptar" texto="Aceptar" disabled={false} />
        </div>
        

      </header>
    </div>
  );
}

export default App;
