import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

let Head = ()=><h1>ro</h1>

class App extends Component {
  render() {
    return <Head />
  }
}

ReactDOM.render(<App />, document.getElementById('root'))