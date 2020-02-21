import React, { Component } from 'react'
import {
  View,
} from 'react-native'
import {
  Container,
  Content,
} from 'native-base'
import { color } from '../../assets/style/ColorList'
import ComponentHeader from './components/ComponentHeader'
import ComponentCard from './components/ComponentCard'

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show_schedule: false
    }
  }

  showUnshowSchedule() {
    this.setState({
      show_schedule: !this.state.show_schedule
    })
  }

  render() {
    return (
      <Container>
        <ComponentHeader />
        <Content>
          <View style={{ backgroundColor: color.themaColor }}>
            <ComponentCard 
              show_schedule={this.state.show_schedule}
              showUnshowSchedule={() => this.showUnshowSchedule()} 
            />
          </View>
        </Content>
      </Container>
    )
  }
}

export default HomeScreen