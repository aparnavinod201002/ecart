import React, { useEffect, useState } from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../Redux/Slice/ProductSlice'

function Header({insideHome}) {
  const dispatch=useDispatch()
  const [wishlistCount,setWishlistCount]=useState(0)
  const [cartCount,setCartCount]=useState(0)
  const wishlist=useSelector((state)=>state.WishListReducer.wishlist)
  const cart=useSelector((state)=>state.cartReducer)
  useEffect(()=>{
    setWishlistCount(wishlist?.length)
    setCartCount(cart.length)
  },[wishlist,cart])
  return (
    <>
       <Navbar expand="lg" sm={12} md={6} lg={4} xl={3} className="bg-info position-fixed top-0 w-100" style={{zIndex: 1}}>
      <Container>
        <Navbar.Brand href="#home">e-Cart</Navbar.Brand>
       
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
           <Nav.Link>
              <input type='text' className='form-control' style={{width:"500px"}} placeholder='Search Products...' onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))}/>
            </Nav.Link>
            <Nav.Link className='btn btn-outline-light'>
                <Link to={'/wishlist'} style={{color:"black", fontWeight:"bold",textDecoration:"none"}}>
          <i className="fa-solid fa-heart text-danger"></i>Wishlist
          <Badge bg="success rounded ms-2">{wishlistCount}</Badge></Link>
          </Nav.Link>
            
          <Nav.Link className='btn btn-outline-light'>
                <Link to={'/cart'} style={{color:"black", fontWeight:"bold",textDecoration:"none"}}>
          <i className="fa-solid fa-cart-shopping text-warining"></i>Cart
          <Badge bg="success rounded ms-2">{cartCount}</Badge></Link>
          </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
