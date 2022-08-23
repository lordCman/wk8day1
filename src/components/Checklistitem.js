import React, { Component } from 'react'

export default class Checklistitem extends Component {

    handleClick = () => {
        const copy = {...this.props.obj, complete: !this.props.obj.complete}
        this.props.markComplete(copy, this.props.index)
    }

    render() {
        return (
            <div style={{margin:10}} className = ''>
                <span style={{margin:10}} className='fw-semibold fs-2'>{this.props.obj.text}</span>
                <input style={{margin:5}} type='checkbox' checked={this.props.obj.complete} />
                <button style={{margin:5}} className='btn btn-success' onClick={()=>{this.handleClick()}}>Mark Complete</button>
                <button style={{margin:10}} className='btn btn-danger' onClick={()=>{this.props.removeFromList(this.props.index)}}>x</button>
            </div>
        )
    }
}