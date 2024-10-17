import { Button, Spinner } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../Redux/Slice/WishListSlice'
import { addToCart } from '../Redux/Slice/CartSlice'

function View() {
  const [product,setProduct]=useState({})
  const {Loading}=useSelector((state)=>state.productReducer)
  const{wishlist}=useSelector((state)=>state.WishListReducer)
  const {id}=useParams()
  const dispatch=useDispatch()
  const cart=useSelector((state)=>state.cartReducer)
 useEffect(()=>{
  const products=JSON.parse(localStorage.getItem("products"))
  setProduct(products?.find(product=>product?.id==id))
 },[])
  console.log(product);
  const handleWishlist=(product)=>{
    const existingProduct = wishlist.find(item=>item.id==product.id)
    if(existingProduct){
  alert("product already exists")
    }else{
  dispatch(addToWishlist(product))
    }
  }

  const handleCart=(product)=>{
    const existingProduct= cart?.find(item=>item.id==product.id)
    
    if(existingProduct){
  
      dispatch(addToCart(product))
      alert("items added")
      console.log(existingProduct)
    }
    else{
      dispatch(addToCart(product))
      alert("item added successfully")
  
    }
  }
  return (
    <div className='mt-5' style={{marginTop:"75px"}}>
     {
Loading?<div className='mt-5 text-center fw-bolder'><Spinner animation="border" variant="primary"/>Loading...</div>:
      
    <div className='container row' style={{marginTop:"100px"}}>
      <div className='col-lg-4 mb-5'>
        <img style={{width:"100%",height:"400px"}} src={product?.thumbnail}/>

      </div>

      <div className='col-lg-2'></div>
      <div className='col-lg-6'>
      
        <h1>{product?.title}</h1>
        <h5 className='fw-bolder'>Price:<span style={{color:"red"}}>{product?.price}</span></h5>
        <p>{product?.description}</p>
        <div className='d-flex justify-content-between mt-4'>
        <Button className="btn btn-light"  onClick={()=>handleWishlist(product)}><i className='fa-solid fa-heart text-danger'></i></Button>
                    <Button className="btn btn-light" onClick={()=>handleCart(product)}><i className='fa-solid fa-cart-shopping text-warning'></i></Button>
               
        </div>
     
      </div>
     
</div>
}
    </div>
      
      
  )
}


export default View
