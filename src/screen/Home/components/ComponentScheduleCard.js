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

  renderDay() {
    let date = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return date[this.props.data.schedule.getDay()]
  }

  renderTime() {
    let hours = this.props.data.schedule.getHours()
    let minutes = this.props.data.schedule.getMinutes()
    let ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = hours ? hours : 12
    hours = hours < 10 ? '0'+hours : hours
    minutes = minutes < 10 ? '0'+minutes : minutes
    let time = `${hours}:${minutes} ${ampm}`
    return time
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
          <Text style={fontStyles.mediumFontWhiteBold}>{this.renderDay()}</Text>
          <Text style={fontStyles.mediumFontWhite}>{this.renderTime()}</Text>
        </View>
      </View>
    )
  }
}

export default ComponentScheduleCard