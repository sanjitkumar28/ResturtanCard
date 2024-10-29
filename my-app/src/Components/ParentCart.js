import Cart from "./Cart"
import CartContext from "./CartContext"
const ParentCart=()=>{
    const cart=[];
    return(
        <CartContext.Provider value={{cart}}>
        <Cart/>
        </CartContext.Provider>
    )
}
export default ParentCart;