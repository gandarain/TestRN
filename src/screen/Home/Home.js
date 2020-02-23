import React, { Component } from 'react'
import { Container, Icon } from 'native-base'
import { FlatList, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { color } from '../../assets/style/ColorList'
import ComponentHeader from './components/ComponentHeader'
import ComponentCard from './components/ComponentCard'
import styles from './styles/Style'

import { connect } from 'react-redux'
import { setData, showSchedule } from '../../actions'

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
        refreshing: false
      })
      this.props.setData(data)
    }, 1000)
  }

  render() {
    return (
      <Container>
        <ComponentHeader />
        <SafeAreaView style={styles.container}>
          <FlatList
            refreshing={this.state.refreshing}
            data={this.props.data}
            renderItem={({ item, index }) => (
              <ComponentCard
                key={item.id}
                data={item}
                index={index}
                show_schedule={item.show_schedule}
                showUnshowSchedule={() => this.props.showSchedule(item.id)} />
            )}
            keyExtractor={item => item.id.toString()}
            onRefresh={() => this.loadData()}
          />
        </SafeAreaView>
        <TouchableOpacity style={styles.containerButton}>
          <Icon type='MaterialCommunityIcons' name='plus' style={{ color: color.whiteColor }} />
        </TouchableOpacity>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.data.data,
})

export default connect(
  mapStateToProps, { setData, showSchedule }
)(HomeScreen)