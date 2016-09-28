import React, { Component, PropTypes } from 'react'

export default class Counter extends Component {

    render() {
        let { count, addCount, subCount } = this.props

        return (
        <div className="container">
            <span id='count-value'>{count}</span>
            <span id='add-btn' onClick={() => addCount(count)}>Add</span>
            <span id='sub-btn' onClick={() => subCount(count)}>Sub</span>
        </div>
        )
    }

}
