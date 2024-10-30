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
        console.log('action payload',action.payload);
         state.carts= state.carts.filter((cart)=>{
            console.log('rc',cart.card.info.id);
            console.log('rc1',action.payload.card.info.id);
            return cart.card.info.id!==action.payload.card.info.id
        }
        )
        }
    }
})

console.log('cartSlice',CartSlice);

export const {addCart,removeCart}=CartSlice.actions;

export default CartSlice.reducer;
