import React, {useState} from "react";
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar';
import {BrowserRouter as Router,Route,Routes,NavLink} from 'react-router-dom'
import MapIng from "./map_ingredients/map_ing_screen";
import Layout from "./map_ingredients/Layout";
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;
  const handleSearch = async (term) => {
    setSearchTerm(term);
    
    const response = await axios.get(
    
      `https://api.spoonacular.com/food/products/search?apiKey=${apiKey}&query=${term}&number=10`,
      
    );
    setItems(response.data.products);
    
    // fetch('https://api.spoonacular.com/food/products/search?apiKey='+apiKey+'&query='+term+'&number=10').then((respone) => respone.json()).
    // then(
    //   (response) => {
    //      console.log(response.products);
    //       setItems(response.products) })
     
  };

  // return (
  //   <div > 
  //     {/* <h2 style={{color:"green" }}>Search for Grocery Products</h2>
  //       <SearchBar onSearch={handleSearch} />
  //     {items == [] ? <h4>No Items Found!</h4> : <ItemList items={items} searchTerm={searchTerm} />}
  //     */}
  //     <Router>
  //       {/* <nav>
  //       <ul style={{
  //     display:'flex',
  //     flexDirection: 'row',
  //     alignItems:'center',
  //     listStyle:'none',
      
      
  //  }}>
  //     <li className='navitems'>
  //     <NavLink  className='navlinks' to='/'>Home</NavLink>
  //     </li>
  //     <li className='navitems'>
      
  //     <NavLink className='navlinks' to='/MapIng'>Map Ingredients</NavLink>
  //     </li>
     
  //   </ul>
    
  //       </nav> */}
  //       <Routes>
  //         <Route  path='/' element={<Layout />} />
  //   <Route   path="/" element={<SearchBar items={items}  />} />
  //  <Route path='MapIng' element={<MapIng />} />
  //  </Routes>
  //     </Router>
     
  //   </div>
  // );
  return (
    <Router>
      <Routes>
        <Route exact path="/spoonacular-react/" element={<Layout />}>
          <Route index element={<SearchBar items={items} />} />
          <Route path="/spoonacular-react/MapIng" element={<MapIng />} />
        
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
