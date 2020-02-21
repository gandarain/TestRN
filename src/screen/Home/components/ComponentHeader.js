import React, { Component } from 'react'
import {
  Text,
  TouchableOpacity,
  StatusBar
} from 'react-native'
import {
  Icon,
  Header,
  Left,
  Body,
  Right
} from 'native-base'
import { color } from '../../../assets/style/ColorList'
import fontStyles from '../../../assets/style/FontStyle'

class ComponentHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Header style={{ backgroundColor: color.themaColor }}>
        <StatusBar barStyle="light-content" backgroundColor={color.themaColor} />
        <Left>
          <TouchableOpacity>
            <Icon type='MaterialCommunityIcons' name='menu' style={{ color: color.whiteColor }} />
          </TouchableOpacity>
        </Left>
        <Body>
          <Text style={fontStyles.bigFontWhite}>My Subjects</Text>
        </Body>
        <Right>
          <TouchableOpacity>
            <Icon type='MaterialCommunityIcons' name='dots-vertical' style={{ color: color.whiteColor }} />
          </TouchableOpacity>
        </Right>
      </Header>
    )
  }
}

export default ComponentHeader