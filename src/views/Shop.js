import React, { useState, useEffect } from 'react'
import Items from '../components/Items';


export default function Shop({addToCart}) {


    const [items, setItem] = useState([])

    const getShopItems = async () => {
        const res = await fetch('http://localhost:5000/api/items');
        const data = await res.json();
        if (data.status === 'ok') {
            setItem(data.items)
            console.log(data)
        }


    }

    useEffect(() => {
        getShopItems()
    }, [])

    return (
        <div className='row'>
            {items.map((i, idx)=><Items key={idx} item={i} addToCart = {addToCart}/>)}
        </div>
    )
}
