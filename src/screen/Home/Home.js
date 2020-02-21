import React, { Component } from 'react'
import {
  Container,
  Content,
  Icon
} from 'native-base'
import { TouchableOpacity } from 'react-native'
import { color } from '../../assets/style/ColorList'
import ComponentHeader from './components/ComponentHeader'
import ComponentCard from './components/ComponentCard'
import styles from './styles/Style'

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
        <Content style={styles.container}>
          <ComponentCard
            index={0}
            show_schedule={this.state.show_schedule}
            showUnshowSchedule={() => this.showUnshowSchedule()} 
          />
          <ComponentCard
            index={1}
            show_schedule={this.state.show_schedule}
            showUnshowSchedule={() => this.showUnshowSchedule()} 
          />
          <ComponentCard
            index={2}
            show_schedule={this.state.show_schedule}
            showUnshowSchedule={() => this.showUnshowSchedule()} 
          />
        </Content>
        <TouchableOpacity style={styles.containerButton}>
          <Icon type='MaterialCommunityIcons' name='plus' style={{ color: color.whiteColor }} />
        </TouchableOpacity>
      </Container>
    )
  }
}

export default HomeScreen