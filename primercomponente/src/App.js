import logo from './logo.svg';
import './App.css';
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Nuevo Usuario</h1>

        <div></div>

        <CustomInput label={"Usuario"} disabled={false} type={"text"}/>
        <CustomInput label={"Correo"} disabled={false} type={"text"}/>
        <CustomInput label={"Contraseña"} disabled={false} type={"password"}/>

        

        <div>

            <CustomButton texto="cancelar" disabled={true} />
            <CustomButton texto="Aceptar" disabled={false} />
        </div>
        

      </header>
    </div>
  );
}

export default App;
