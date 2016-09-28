import React from 'react'
import ReactDOM from 'react-dom'
import { Root } from './containers/Root'
import { configureStore } from './redux/store/configureStore'

import './styles/main.css'

var store = configureStore()

ReactDOM.render(
  <Root store={store} />, 
  document.getElementById('root')
)