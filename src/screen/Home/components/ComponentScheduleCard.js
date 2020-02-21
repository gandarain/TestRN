import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'
import {
  Icon,
} from 'native-base'
import fontStyles from '../../../assets/style/FontStyle'
import styles from '../styles/StyleScheduleCard'

class ComponentScheduleCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <View style={styles.containerIcon}>
            <Icon type='MaterialCommunityIcons' name='clock-outline' style={styles.icon} />
          </View>
          <Text style={fontStyles.bigFontWhiteBold}>Schedule</Text>
        </View>
        <View style={styles.containerDescription}>
          <Text style={fontStyles.mediumFontWhiteBold}>Monday</Text>
          <Text style={fontStyles.mediumFontWhite}>09.00 AM</Text>
        </View>
      </View>
    )
  }
}

export default ComponentScheduleCard