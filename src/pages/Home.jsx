
import React, { useEffect }  from 'react'
import { Card, Col, Row ,Button, Spinner} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {fetchProductsData} from '../Redux/Slice/ProductSlice'
import {addToWishlist} from '../Redux/Slice/WishListSlice'
import { addToCart } from '../Redux/Slice/CartSlice'
import Header from '../Components/Header'

function Home() {

const dispatch=useDispatch()
const {Loading,products,error}=useSelector((state)=>state.productReducer)
const{wishlist}=useSelector((state)=>state.WishListReducer)

const cart =useSelector((state)=>state.cartReducer)
console.log(cart)
useEffect(()=>{
  dispatch(fetchProductsData())
}

,[])

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
    
   
    <div style={{marginTop:"70px"}} className='d-flex justify-content-center'>
    {
    Loading?<div className='mt-5 text-center fw-bolder'>
    <Spinner animation="border" variant="info"/>Loading...
   
  </div>:
    
        <Row className='mt-5 container'>
          {
            products?.length>0?products.map((product,index)=>(
          
            <Col className='mt-5' sm={12} md={6} lg={4} xl={3}>
            <Card style={{width:'18rem'}} key={index}>
                <Link to={`/view/${product?.id}`}><Card.Img variant="top" style={{width:"100%"}} src={product?.thumbnail}/></Link>
              <Card.Body>
                <Card.Title> {product?.title.slice(0,20)}</Card.Title>
                <Card.Text>
                  {product?.description.slice(0,20)}
                     </Card.Text>
                <div className='d-flex justify-contet-between'>
                    <Button className="btn btn-light" onClick={()=>handleWishlist(product)}><i className='fa-solid fa-heart text-danger'></i></Button>
                    <Button className="btn btn-light" onClick={()=>handleCart(product)}><i className='fa-solid fa-cart-shopping text-warning'></i></Button>
                </div>
              </Card.Body>
                </Card></Col>
                )):<div className='text-danger text-center mt-5'>Nothing to Display</div>
              }
        </Row>
    }
   </div>
  
  )

}

export default Home
