import React, {useState} from "react";
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar';
import ItemList from './components/ItemList';


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;
  const handleSearch = async (term) => {
    setSearchTerm(term);
    
    // const response = await axios.get(
    
    //   `https://api.spoonacular.com/food/products/search?apiKey=${apiKey}&query=${term}&number=10`,
      
    // );
    // setItems(response.data.products);
    
    fetch('https://api.spoonacular.com/food/products/search?apiKey='+apiKey+'&query='+term+'&number=10').then((respone) => respone.json()).
    then(
      (response) => {
         console.log(response.products);
          setItems(response.products) })
     
   
    
  };

  return (
    <div > <h2 style={{color:"green" }}>Search for Grocery Products</h2>
        <SearchBar onSearch={handleSearch} />
      {items == [] ? <h4>No Items Found!</h4> : <ItemList items={items} searchTerm={searchTerm} />}
     
     
    </div>
  );
}

export default App;
