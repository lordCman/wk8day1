import React from 'react'



export default function Myitem({ item, id, removeAll}) {
    return (
        <div className="card" style={{width: '18rem'}}>
            <h2 key = {id}></h2>
            <img src={item.item_url} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{item.item}</h5>
                <h6 className="card-text">${item.price}</h6>
                {/* <h4><button onClick={removeAll(item)} className='btn btn-danger'>Remove Item</button></h4> */}
            </div>
        </div>
    )
}