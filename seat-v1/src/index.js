import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import seatApp from './reducers'


import './index.css'

let store = createStore(seatApp)

render(
	<Provider store={store} >
		<App />
	</Provider>,
	document.getElementById('root')
)
