
import "./App.css";
import Header from "./Components/Header";
import AppRoutes from "./Components/AppRoutes";
import CartContext from "./Components/CartContext";
import {Provider} from 'react-redux'
import { useState } from "react";
import store from "./store";

function App() {
  const [cart, setCart] = useState([]);
  const addCart = (item) => {
    setCart([...cart, item]);
  };
  return (
    // <CartContext.Provider value={{ cart, addCart }}>
    <Provider store={store}>
      <div className="App">
        <Header />
        <AppRoutes />
      </div>
      </Provider>
    // </CartContext.Provider>
  );
}

export default App;
