
import React from 'react'
import { Button,Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../Redux/Slice/WishListSlice'
import { addToCart } from '../Redux/Slice/CartSlice'

function Wishlist() {
  const dispatch=useDispatch()
  const{wishlist}=useSelector((state)=>state.WishListReducer)
 
  const handleCart=(product)=>{
    dispatch(addToCart(product))
   
  }
  return (
    <div style={{marginTop:"70px"}}>
        <Row className='mt-5 container'>
            {
              wishlist?.length>0?wishlist.map((product)=>(

                <Col className='mt-5' sm={12} md={6} lg={4} xl={3}>
            <Card style={{width:'18rem'}}>
                <Link to={`/view/${product.id}`}><Card.Img variant="top" style={{width:"100%"}} src={product.thumbnail}/></Link>
              <Card.Body>
                <Card.Title>{product.title.slice(0,10)}</Card.Title>
               
                <div className='d-flex justify-contet-between'>
                    <Button className="btn btn-light" onClick={()=>dispatch(removeFromWishlist(product.id))}><i className='fa-solid fa-trash text-danger'></i></Button>
                    <Button className="btn btn-light" onClick={()=>dispatch(handleCart(product))}><i className='fa-solid fa-cart-shopping text-warning'></i></Button>
                </div>
              </Card.Body>
                </Card></Col>
              )):<div className='d-flex align-items-center mt-5'>
                <img src="https://img.freepik.com/premium-psd/empty-cart-shopping-commerce-3d-illustration_66255-2017.jpg" alt="" />
            <h1 className='text-danger'>Your WishList is Empty</h1>
              </div>
              
              
              }
        </Row>
      
    </div>
  )
}

export default Wishlist
