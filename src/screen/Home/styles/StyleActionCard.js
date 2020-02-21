import { StyleSheet } from 'react-native'
import { color } from '../../../assets/style/ColorList'

export default StyleSheet.create({
  container: {
    width: '100%', 
    flexDirection: 'row', 
    paddingVertical: 20, 
    borderBottomColor: 'white'
  },
  subContainer: {
    width: '80%', 
    flexDirection: 'row'
  },
  containerIcon: {
    width: '20%'
  },
  icon: {
    color: color.whiteColor, 
    fontSize: 25
  },
  containerShowScheduler: {
    width: '20%', 
    flexDirection: 'row', 
    justifyContent: 'flex-end'
  }
})
