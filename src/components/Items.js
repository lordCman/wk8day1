import React from 'react'
import { Link } from 'react-router-dom'

export default function Items({ item, addToCart }) {
    return (
        <div className="card" style={{width: "18rem", margin:20, padding:20}}>
            <ul className="list-group">

                <li className="list-group item">
                    <Link to={`/shop/${item.id}`}>
                        <img src={ item.item_url } className="card-img-top" alt=''/>
                            <div className="card-body">
                                <h5 className="card-title fw-light" style={{}}>{ item.item }</h5>
                                <p className="card-text">${ item.price }</p>
                            </div>

                    </Link>
                    <button onClick={()=>addToCart(item)} to="/" className="btn btn-primary">Add to Cart</button>
                </li>
                <li className="list-group item">
                </li>
            </ul>
        </div>
    )
}