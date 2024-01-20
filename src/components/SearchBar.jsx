import { useState } from 'react';

function SearchBar({ setSearchTerm }) {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(inputValue);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Suchen..."
      />
    </form>
  );
}

export default SearchBar;