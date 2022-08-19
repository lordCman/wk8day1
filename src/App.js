import React, { Component } from 'react'
import Contact from './views/Contact'
import Home from './views/Home'
import Nav from './components/Nav'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './views/Login'
import SignUp from './views/SignUp'
import IG from './views/IG'
import CreatePost from './views/CreatePost'


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      user: {},
      name: 'Charlie',
      money: 500
    }
  }

  logMeIn = (user) => {
    this.setState({
      user: user
    })
  }

  addMoney = () => {
    this.setState({money: this.state.money +10})
  }


  render() {
    return (
      <BrowserRouter>
        <div>
          
          <Nav />
          {/* { this.state.name }
          <button onClick= {this.addMoney}>Add Money</button> */}

          <Routes>
            <Route path='/' element={<Home money={this.state.money}/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login logMeIn={this.logMeIn}/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/feed' element={<IG/>}/>
            <Route path='/posts/create' element={<CreatePost user={this.state.user}/>}/>
            

          </Routes>



        </div>
      </BrowserRouter>
    )
  }
}
