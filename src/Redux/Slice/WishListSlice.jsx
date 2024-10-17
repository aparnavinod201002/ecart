import { createSlice } from "@reduxjs/toolkit";

const WishListSlice=createSlice({
    name:"wishlist",
    initialState:{
        wishlist:[]
},
reducers:{
addToWishlist:(state,action)=>{
    state.wishlist.push(action.payload)
},
removeFromWishlist:(state,action)=>{
state.wishlist=state.wishlist.filter(item=>item.id!=action.payload)
}
}
})
export const {addToWishlist,removeFromWishlist}=WishListSlice.actions
export default WishListSlice.reducer