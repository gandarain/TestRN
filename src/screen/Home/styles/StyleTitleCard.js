import { StyleSheet } from 'react-native'
import { color } from '../../../assets/style/ColorList'

export default StyleSheet.create({
  container: {
    width: '100%', 
    flexDirection: 'row', 
    paddingBottom: 5
  },
  containerTitle: {
    width: '80%'
  },
  containerSubTitle: {
    width: '20%', 
    backgroundColor: color.card.lecture, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
})
