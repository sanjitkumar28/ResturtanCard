import { Routes, Route } from "react-router-dom";
import ResturantList from "./ResturantList";
import About from "./About";
import Contact from "./Contact";
import ResturantMenu from "./ResturantMenu";
import Cart from "./Cart";

const AppRoutes=()=>{
return(
    <Routes>
    <Route path="/" element={<ResturantList/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/resturant/menu/:id" element={<ResturantMenu/>}/>
    <Route path="/cart" element={<Cart/>}/>
  </Routes>
)
}

export default AppRoutes;