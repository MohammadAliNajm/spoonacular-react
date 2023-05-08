import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav >
        <ul style={{ display:"flex", flexDirection:"row",listStyle:"none",alignItems:"center"}}>
          <li style={{margin:"10px"}}>
            <Link to="/spoonacular-react">Home</Link>
          </li>
          <li >
            <Link to="/spoonacular-react/MapIng">Map Ingredients</Link>
          </li>
         
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;