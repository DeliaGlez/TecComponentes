function Carta ({ url,titulo,descripcion,txtBtn }) {
    return (
      <>
        <div className="carta">
            <img src={url}  />
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <button>{txtBtn}</button>
        </div>
      </>
    );
  }
  
  
  export default Carta;