function CustomHeader({ title,src,}) {
    return (
      <>
        <header className="App-header">
            <img src= {src} width="45px" height="45px" alt="Logo"></img>
            <h1>{title}</h1>
        </header>
      </>
    );
  }
  
  
  export default CustomHeader;