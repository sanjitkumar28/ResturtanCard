import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './cartSlice'

const store=configureStore({
    reducer:{
    cartReducer:CartReducer
    },
})

export default store;
console.log('store',store);