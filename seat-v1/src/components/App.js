import React, { Component } from 'react'
import Request              from 'superagent'
import FloorButton          from './button'
import TestMap              from './testfloor'

import './App.css'



class App extends Component {

  render() {

    return (
      <div className="app">
          <h2>UCSD SEAT</h2>
          <TestMap /> 
      </div>
    )
  }
}

export default App
