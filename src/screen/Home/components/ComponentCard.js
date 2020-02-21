import React, { Component } from 'react'
import {
  View,
} from 'react-native'
import { color } from '../../../assets/style/ColorList'
import ComponentTitleCard from './ComponentTitleCard'
import ComponentDescriptionCard from './ComponentDescriptionCard'
import ComponentActionCard from './ComponentActionCard'
import ComponentScheduleCard from './ComponentScheduleCard'

class ComponentCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderSchedule() {
    if(this.props.show_schedule){
      return(
        <ComponentScheduleCard />
      )
    }
  }

  render() {
    return (
      <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
        <View style={{ backgroundColor: color.cardType.lecture, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 5 }}>
          <ComponentTitleCard />
          <ComponentDescriptionCard />
          <ComponentActionCard 
            show_schedule={this.props.show_schedule} 
            showUnshowSchedule={() => this.props.showUnshowSchedule()} 
          />
          {this.renderSchedule()}
        </View>
      </View>
    )
  }
}

export default ComponentCard