import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState={
    carts:[]
}

export const CartSlice= createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        addCart:(state,action)=>{
          console.log('action',action);
          state.carts=[...state.carts,action.payload];
        },
        removeCart:(state,action)=>{
         
        }
    }
})

console.log('cartSlice',CartSlice);

export const {addCart,removeCart}=CartSlice.actions;

export default CartSlice.reducer;
