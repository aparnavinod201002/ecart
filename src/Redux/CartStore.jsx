import { configureStore } from "@reduxjs/toolkit";
import productSlice from './Slice/ProductSlice'
import WishListSlice from './Slice/WishListSlice'
import cartSlice from './Slice/CartSlice'
const cartStore=configureStore({
    reducer:{
productReducer:productSlice,
WishListReducer:WishListSlice,
cartReducer:cartSlice
    }
})
export default cartStore