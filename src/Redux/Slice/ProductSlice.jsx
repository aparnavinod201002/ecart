import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

 export const fetchProductsData=createAsyncThunk("allProducts/fetchProductsData",async()=>{
    const result= await axios.get("https://dummyjson.com/products")
    localStorage.setItem("products",JSON.stringify(result.data.products))
    return result.data.products
})

const productSlice=createSlice({
    name:"allProducts",
    initialState:{
        products:[],
        productsDummy:[],
        Loading:false,
        error:""
    },
    reducers:{
searchProduct:(state,action)=>{
  state.products=state.productsDummy.filter(item=>item.title.toLowerCase().includes(action.payload))
}
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProductsData.pending,(state)=>{
state.Loading=true
          }),
          builder.addCase(fetchProductsData.fulfilled,(state,action)=>{
            state.products=action.payload
            state.productsDummy=action.payload
            
            state.Loading=false
          }),
          builder.addCase(fetchProductsData.rejected,(state)=>{
            state.error="API Failed.... Pleasevtry after some time.."
            state.products=[]
            state.productsDummy=[]
            state.Loading=false
          })
    }
})
export const {searchProduct}=productSlice.actions
export default productSlice.reducer