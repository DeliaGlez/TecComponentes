function SearchBar({ label, setSearchTerm }) {
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="Search">
        <input
          type="text"
          placeholder={label}
          onChange={handleInputChange}
        />
        <button>Buscar</button>
      </div>
    </>
  );
}

export default SearchBar;
