
import React, { useEffect, useState } from 'react'
import { Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { emptyCart, removeFromCart } from '../Redux/Slice/CartSlice'


function Cart() {
  
  const dispatch=useDispatch()
  const [total,setTotal]=useState(0)
  const cart=useSelector((state)=>state.cartReducer)
  dispatch(removeFromCart)
  

  useEffect(()=>{
    if(cart?.length>0){
      setTotal(cart?.map(product=>product.totalPrice).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }
  },[cart])
  return (
   
    <div className='container' style={{marginTop:"100px"}}>
     { cart.length>0? 
      <div className='row mt-5'>
        <div className='col-lg-8'>
          
<table className='table shadow'>
  <thead>
    <tr>
      <th>#</th>
      <th>Title</th>
      <th>Image</th>
      <th>Total Price</th>
      <th>Quantity</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {cart?.map((product,index)=>(
    <tr>
      <td>{index+1}</td>
      <td>{product?.title}</td>
      <td><img style={{width:"300px",height:"300px"}} src={product?.thumbnail}/></td>
      <td className='text-danger'>{product?.totalPrice}</td>
      <td><input type='text' value={product?.quantity} style={{width:"25px" }} readonly/></td>
      <td><button className='btn' onClick={()=>dispatch(removeFromCart(product?.id))}><i className='fa-solid fa-trash text-danger'></i></button></td>
    </tr>
    ))}
  </tbody>
</table>
<div className="d-flex justify-content-between">
  <Button className='btn btn-danger' onClick={()=>dispatch(emptyCart())}>Empty Cart</Button>

  <Link to={'/'} style={{textDecoration:"none"}} className='btn btn-success'>Shop More</Link>
</div>
        
        <div className='col-lg-1'></div>

      </div>
      <div className='col-lg-3'>
        <div className='container border rounded shadow mt p-5 w-100'>
          <h1>Cart Summary</h1>
          <h4>Total Products:{cart.length}</h4>
          <h5>Total:<span className='text-danger fw-bolder'>${total}</span></h5>
        </div>
        <div className='d-grid'>
        <Button className='btn btn-success m-s rounded'>CheckOut</Button>
        </div>
      </div>
      </div>:<div className='d-flex align-items-center mt-5'>
                <img src="https://img.freepik.com/premium-psd/empty-cart-shopping-commerce-3d-illustration_66255-2017.jpg" alt="" />
            <h1 className='text-danger'>Your Cart is Empty</h1>
              </div>}
    </div>
   


  
  )
}

export default Cart
