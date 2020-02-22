import React, { Component } from 'react'
import {
  View,
} from 'react-native'
import { cardColor } from '../../../assets/style/ColorList'
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
        <ComponentScheduleCard data={this.props.data} />
      )
    }
  }

  render() {
    return (
      <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
        <View style={{ backgroundColor: cardColor[this.props.index], paddingHorizontal: 20, paddingVertical: 10, borderRadius: 5 }}>
          <ComponentTitleCard data={this.props.data} index={this.props.index} />
          <ComponentDescriptionCard data={this.props.data} />
          <ComponentActionCard 
            data={this.props.data} 
            showUnshowSchedule={(item) => this.props.showUnshowSchedule(item)} 
          />
          {this.renderSchedule()}
        </View>
      </View>
    )
  }
}

export default ComponentCard