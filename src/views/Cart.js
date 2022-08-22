import React, { useState, useEffect } from 'react'
import Myitem from '../components/Myitem';

export default function Cart({ cart, getCartCost, removeAll }) {


    console.log({cart})
    return (
        <div className='row'>
            <h1 className='text-primary'>Your Cart:<button className=' btn btn-success ' style={{margin:20}}>Checkout</button></h1>
            {cart.map((item ,id)=><Myitem item={item} key = {id} removeAll={removeAll} />)}
            <h3 className='text-success'>Total Price: ${getCartCost(cart)}</h3>
        </div>
    )}