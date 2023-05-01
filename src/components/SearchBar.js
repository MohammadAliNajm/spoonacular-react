import React, {useState} from "react";
import '../App.css';
function SearchBar({ onSearch }) {
    const [term, setTerm] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSearch(term);
    };
  
    return (
      <div className="sb-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for items..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="searchBar"
        />
        <button type="submit" className="searchButton">Search</button>
      </form>
      </div>
    );
  }
  
  export default SearchBar;