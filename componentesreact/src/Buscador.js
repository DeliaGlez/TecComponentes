function Buscador({ label}) {
    return (
      <>
        <div >
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