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
            <Text style={fontStyles.mediumFontSecondary}>{this.props.data.time}</Text>
          </View>
        </View>
        <View style={styles.containerMajor}>
          <View style={styles.subContainerMajor}>
            <View style={styles.containerIcon}>
              <Icon type='MaterialCommunityIcons' name='domain' style={styles.icon} />
            </View>
            <View style={styles.containerDivision}>
              <Text style={fontStyles.mediumFontSecondary}>{this.props.data.division}</Text>
            </View>
          </View>
          <View style={styles.containerGrade}>
            <Text style={fontStyles.mediumFontSecondary}>{this.props.data.grade}</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default ComponentDescriptionCard