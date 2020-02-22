import React, { Component } from 'react'
import {
  Container,
  Content,
  Icon
} from 'native-base'
import {FlatList, SafeAreaView} from 'react-native'
import { TouchableOpacity } from 'react-native'
import { color } from '../../assets/style/ColorList'
import ComponentHeader from './components/ComponentHeader'
import ComponentCard from './components/ComponentCard'
import styles from './styles/Style'

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      refreshing: false
    }
  }

  componentDidMount(){
    this.loadData()
  }

  loadData() {
    this.setState({
      refreshing: true
    })
    let data = [
      {
        id: 1,
        title: 'Software Engineering',
        division: 'Computer Engineering',
        time: '3rd Year/Standard',
        type: 'Lecture',
        grade: 'A',
        schedule: new Date(),
        show_schedule: false
      },
      {
        id: 2,
        title: 'DMSA',
        division: 'Computer Engineering',
        time: '3rd Year/Standard',
        type: 'Practical',
        grade: 'A',
        schedule: new Date(),
        show_schedule: false
      },
      {
        id: 3,
        title: 'PCPD',
        division: 'Computer Engineering',
        time: '3rd Year/Standard',
        type: 'Lecture',
        grade: 'A',
        schedule: new Date(),
        show_schedule: false
      }
    ]
    setTimeout(() => {
      this.setState({
        data: data,
        refreshing: false
      })
    }, 1000)
    
  }

  showUnshowSchedule(item) {
    let id = item.id
    this.setState(prevState => ({
      data: prevState.data.map(
        item => item.id === id? { ...item, show_schedule: !item.show_schedule }: item
      )
    }))
  }

  onRefresh() {
    this.setState({
      data: []
    })
    this.loadData()
  }

  render() {
    return (
      <Container>
        <ComponentHeader />
        <SafeAreaView style={styles.container}>
          <FlatList
            refreshing={this.state.refreshing}
            data={this.state.data}
            renderItem={({ item, index }) => (
              <ComponentCard
                data={item}
                index={index}
                show_schedule={item.show_schedule}
                showUnshowSchedule={() => this.showUnshowSchedule(item)} />
            )}
            keyExtractor={item => item.id.toString()}
            onRefresh={() => this.onRefresh()}
          />
        </SafeAreaView>
        <TouchableOpacity style={styles.containerButton}>
          <Icon type='MaterialCommunityIcons' name='plus' style={{ color: color.whiteColor }} />
        </TouchableOpacity>
      </Container>
    )
  }
}

export default HomeScreen