import React, { Component } from 'react'
import {
  Text,
  ActivityIndicator,
  View,
  StatusBar
} from 'react-native'
import styles from './styles/Styles'
import fontStyles from '../../assets/style/FontStyle'
import { color } from '../../assets/style/ColorList'

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
        <StatusBar barStyle="light-content" backgroundColor={color.themaColor} />
        <ActivityIndicator size="large" color="white" />
        <Text style={fontStyles.bigFontWhite}>Loading</Text>
      </View>
    )
  }
}

export default SplashScreen