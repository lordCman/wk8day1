import React, { Component } from 'react'

export default class Home extends Component {

   

  render() {
    return (
        <div>
            <h1>Welcome to my React App</h1>
            
            <h2>{this.props.money} </h2>


        </div>
    )
  }
}
