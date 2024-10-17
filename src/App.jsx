import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import View from './pages/View'

import './bootstrap.min.css'
import Home from './pages/Home'
function App() {

  return (
    <>
      <Header/>
      <Routes>
<Route path ='/' element={<Home/>}/>
<Route path ='/wishlist' element={<Wishlist/>}/>
<Route path ='/cart' element={<Cart/>}/>
<Route path ='/view/:id' element={<View/>}/>
<Route path ='/*' element={<Navigate to={"/"}/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
