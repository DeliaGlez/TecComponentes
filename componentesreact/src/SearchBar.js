function SearchBar({ label}) {
    return (
      <>
        <div className="Search">
            <input
            type="text"
            placeholder={label}            
            />
            <button >Buscar</button>
        </div>
      </>
    );
  }
  
  
  export default SearchBar;