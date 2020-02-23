import React, { Component } from 'react'
import AppNavigator from './src/navigator/Navigator'
import { Root } from 'native-base'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/reducers'


export default class App extends Component {
  constructor() {
    super()
    this.store = createStore(reducers)
  }

  render() {
    return (
      <Root>
        <Provider store={this.store}>
          <AppNavigator />
        </Provider>
      </Root>
    )
  }
}