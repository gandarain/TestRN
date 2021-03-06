import React, { Component } from 'react'
import {
  View,
  TouchableOpacity
} from 'react-native'
import {
  Icon,
} from 'native-base'
import styles from '../styles/StyleActionCard'

class ComponentActionCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={[styles.container, {borderBottomWidth: this.props.data.show_schedule ? 1 : 0}]}>
        <View style={styles.subContainer}>
          <TouchableOpacity style={styles.containerIcon}>
            <Icon type='MaterialCommunityIcons' name='check' style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerIcon}>
            <Icon type='MaterialCommunityIcons' name='account' style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerIcon}>
            <Icon type='MaterialCommunityIcons' name='pencil' style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerIcon}>
            <Icon type='MaterialCommunityIcons' name='delete' style={styles.icon} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity 
          style={styles.containerShowScheduler} 
          onPress={(item) => this.props.showUnshowSchedule(item)}
        >
          <Icon type='MaterialCommunityIcons' name={this.props.data.show_schedule ?'chevron-down' : 'chevron-up'} style={styles.icon} />
        </TouchableOpacity>
      </View>
    )
  }
}

export default ComponentActionCard