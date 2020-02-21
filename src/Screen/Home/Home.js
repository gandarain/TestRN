import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar
} from 'react-native'
import {
  Container,
  Icon,
  Content,
  Header,
  Left,
  Body,
  Right
} from 'native-base'
import { color } from '../../Assets/Style/ColorList'

import { incrementValue, decrementValue } from '../../Redux/Actions'
import { connect } from 'react-redux'

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: color.themaColor }}>
          <StatusBar barStyle="light-content" backgroundColor={color.themaColor} />
          <Left>
            <TouchableOpacity>
              <Icon type='MaterialCommunityIcons' name='menu' style={{ color: 'white' }} />
            </TouchableOpacity>
          </Left>
          <Body>
            <Text style={{ color: color.whiteColor, fontSize: 20 }}>My Subjects</Text>
          </Body>
          <Right>
            <TouchableOpacity>
              <Icon type='MaterialCommunityIcons' name='dots-vertical' style={{ color: color.whiteColor }} />
            </TouchableOpacity>
          </Right>
        </Header>
        <Content>
          <View style={{ backgroundColor: color.themaColor }}>
            <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
              <View style={{ backgroundColor: 'blue', paddingHorizontal: 20, paddingVertical: 10 }}>
                <View style={{ width: '100%', flexDirection: 'row' }}>
                  <View style={{ width: '80%' }}>
                    <Text style={{ color: color.whiteColor, fontSize: 20 }}>Software Engineering</Text>
                  </View>
                  <View style={{ width: '20%', backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'white' }}>Lecture</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.value.value
  }
}

export default connect(
  mapStateToProps, { incrementValue, decrementValue }
)(HomeScreen)