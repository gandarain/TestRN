import { StyleSheet } from 'react-native'
import { color } from '../../../assets/style/ColorList'

export default StyleSheet.create({
  container: {
    width: '100%', 
  },
  containerTitle: {
    width: '100%', 
    flexDirection: 'row', 
    paddingVertical: 20
  },
  containerIcon: {
    paddingRight: 10
  },
  icon: {
    color: color.whiteColor, 
    fontSize: 25
  },
  containerDescription: {
    width: '50%', 
    flexDirection: 'row', 
    justifyContent: 'space-between'
  }
})
