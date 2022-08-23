import React, { Component } from 'react'
import Checklistitem from '../components/Checklistitem';

export default class ToDoList extends Component {
    constructor() {
        super();
        this.state = {
            todoItems : []
        }
    };

    addToList =  (e) => {
        e.preventDefault();
        const thingToDo = e.target.thing.value
        const obj = {
            text: thingToDo,
            complete: false
        }
        this.setState({todoItems: this.state.todoItems.concat([obj])})
    };
    
    removeFromList = (index) => {
        const newList = [...this.state.todoItems]
        newList.splice(index, 1)
        this.setState({todoItems: newList})
    };

    markComplete = (newObj, index) => {
        const newList = this.state.todoItems.slice()
        newList.splice(index, 1, newObj)
        this.setState({todoItems: newList})
    };

    showList = () => {
        return this.state.todoItems.map((t, i) => <Checklistitem key={i} obj={t} index={i} markComplete={this.markComplete} removeFromList={this.removeFromList}></Checklistitem>)
    }

    render() {
        return (
            <div className='text-center' style={{margin:20}}>
                <form onSubmit={(e)=>{this.addToList(e)}}>
                    <input style={{margin:10}} name='thing'/>
                    <button className='btn btn-primary'>Add To List</button>

                </form>

                {this.showList()}




            </div>
        )
    }
}