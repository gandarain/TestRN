import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'
import {
  Icon,
} from 'native-base'
import styles from '../styles/StyleDescriptionCard'
import fontStyles from '../../../assets/style/FontStyle'

class ComponentDescriptionCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerTime}>
          <View style={styles.containerIcon}>
            <Icon type='MaterialCommunityIcons' name='account' style={styles.icon} />
          </View>
          <View style={styles.subContainerTime}>
            <Text style={fontStyles.mediumFontSecondary}>3rd Year/Standard</Text>
          </View>
        </View>
        <View style={styles.containerMajor}>
          <View style={styles.subContainerMajor}>
            <View style={styles.containerIcon}>
              <Icon type='MaterialCommunityIcons' name='domain' style={styles.icon} />
            </View>
            <View style={styles.subContainerTime}>
              <Text style={fontStyles.mediumFontSecondary}>Computer Engineering</Text>
            </View>
          </View>
          <View style={styles.subContainerMajor}>
            <Text style={fontStyles.mediumFontSecondary}>A</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default ComponentDescriptionCard