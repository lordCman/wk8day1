import React, { useState } from 'react'
import Contact from './views/Contact'
import Home from './views/Home'
import Nav from './components/Nav'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './views/Login'
import SignUp from './views/SignUp'
import IG from './views/IG'
import CreatePost from './views/CreatePost'
import Shop from './views/Shop'
import Cart from './views/Cart'
import Checklist from './views/Checklist'


export default function App() {


  const [user, setUser] = useState([])
  const [cart, setCart] = useState([])


  const logMeIn = (user) => {
    setUser(user)
  }

  // addMoney = () => {
  //   this.setState({money: this.state.money +10})
  // }

  const addToCart = (item) => {
    setCart([...cart, item])
  };

  const getCartCost = (cart) => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      let a = parseInt(cart[i].price)
      total += a
    }
    return total
  };

  const removeAll = (item) => {
    setCart(cart.slice(cart.indexOf(item, 1)))
  }


  return (
    <BrowserRouter>
      <div>

        <Nav />
        {/* { this.state.name }
          <button onClick= {this.addMoney}>Add Money</button> */}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login logMeIn={logMeIn} />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/feed' element={<IG />} />
          <Route path='/posts/create' element={<CreatePost />} />
          <Route path='/shop' element={<Shop addToCart={addToCart} />} />
          <Route path='/cart' element={<Cart cart={cart} getCartCost = {getCartCost} removeAll={removeAll}/>} />
          <Route path='/checklist' element={<Checklist />} />
        </Routes>



      </div>
    </BrowserRouter>
  )
        }

