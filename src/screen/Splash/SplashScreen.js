import React, { Component } from 'react'
import {
  Text,
  ActivityIndicator,
  View
} from 'react-native'
import styles from './styles/Styles'
import fontStyles from '../../assets/style/FontStyle'

class SplashScreen extends Component {
  static navigationOptions = () => ({ headerShown: false })
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Home')
    }, 3500)
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="white" />
        <Text style={fontStyles.titleWhiteBold}>Loading</Text>
      </View>
    )
  }
}

export default SplashScreen