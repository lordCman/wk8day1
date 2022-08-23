import React, { Component } from 'react';
import { Link } from 'react-router-dom'



export default class Nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/checklist">Checklist</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                <Link className="nav-link" to="/feed">Insta</Link>
                <Link className="nav-link" to="/posts/create">Create Post</Link>
                <Link className="nav-link" to="/shop">Shop</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                <Link className="nav-link" to="/login">Login</Link>
                <Link className="nav-link" to="/signup">Signup</Link>
                <Link className="nav-link" to="/cart">Cart</Link>
                </div>
                </div>
            </div>
        </nav>
        
      
    )
  }
}
