function Buscador({ label}) {
    return (
      <>
        <div className="Buscar">
            <input
            type="text"
            placeholder={label}            
            />
            <button >Buscar</button>
        </div>
      </>
    );
  }
  
  
  export default Buscador;