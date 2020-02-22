import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'
import fontStyles from '../../../assets/style/FontStyle'
import styles from '../styles/StyleTitleCard'
import { subCardColor } from '../../../assets/style/ColorList'

class ComponentTitleCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={fontStyles.bigFontWhiteBold}>{this.props.data.title}</Text>
        </View>
        <View style={[styles.containerSubTitle, {backgroundColor: subCardColor[this.props.index]}]}>
          <Text style={fontStyles.mediumFontWhiteBold}>{this.props.data.type}</Text>
        </View>
      </View>
    )
  }
}

export default ComponentTitleCard