import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar({ setSearchTerm }) {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(inputValue);
    navigate('/pflanzensuche');
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