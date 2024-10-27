
import "./App.css";
import Header from "./Components/Header";
import AppRoutes from "./Components/AppRoutes";
import CartContext from "./Components/CartContext";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const addCart = (item) => {
    setCart([...cart, item]);
  };
  return (
    <CartContext.Provider value={{ cart, addCart }}>
      <div className="App">
        <Header />
        <AppRoutes />
      </div>
    </CartContext.Provider>
  );
}

export default App;
