import React, { Component } from 'react'
import Contact from './Contact'
import Home from './Home'
import Nav from './Nav'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './Login'


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      name: 'Charlie',
      money: 500
    }
  }

  addMoney = () => {
    this.setState({money: this.state.money +10})
  }


  render() {
    return (
      <BrowserRouter>
        <div>
          
          <Nav />
          { this.state.name }
          <button onClick= {this.addMoney}>Add Money</button>

          <Routes>
            <Route path='/' element={<Home money={this.state.money}/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>


          </Routes>



        </div>
      </BrowserRouter>
    )
  }
}
