import { createSlice } from "@reduxjs/toolkit";

const initialState={
    carts:[]
}

export const CartSlice= createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        addCart:(state,action)=>{
          
        },
        removeCart:(state,action)=>{

        }
    }
})
