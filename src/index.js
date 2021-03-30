import React, { Component } from 'react'
import {View, Text} from 'react-native';
import ReactDOM from 'react-dom'
import './index.css'


class App extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  } 

  render() {
    return (
      <View>
        <Text> hello there! </Text>
      </View>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))