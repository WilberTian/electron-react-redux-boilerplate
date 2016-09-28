import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import * as counterAction from '../redux/action/counter.action'

export class App extends Component {
    render() {
        return (
            <Counter count={this.props.counterState.count} {...this.props.counterAction}/>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        counterState: state.counterReducer
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        counterAction: bindActionCreators(counterAction, dispatch)
    }
}

export default connect(mapStateToProps, mapActionsToProps)(App)

