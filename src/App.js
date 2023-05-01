import React, {useState} from "react";
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar';
import ItemList from './components/ItemList';


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);
const apiKey = process.env.api_key;
  const handleSearch = async (term) => {
    setSearchTerm(term);
    
    const response = await axios.get(
    
      `https://api.spoonacular.com/food/products/search?apiKey=${apiKey}&query=${term}&number=10`,
      
    );
    setItems(response.data.products);
  };

  return (
    <div >
        <SearchBar onSearch={handleSearch} />
      <ItemList items={items} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
