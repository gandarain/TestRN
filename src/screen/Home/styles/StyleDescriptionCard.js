import { StyleSheet } from 'react-native'
import { color } from '../../../assets/style/ColorList'

export default StyleSheet.create({
  container: {
    width: '100%', 
    paddingBottom: 10
  },
  containerTime: {
    width: '50%', 
    flexDirection: 'row'
  },
  containerIcon: {
    paddingRight: 5
  },
  icon: {
    color: color.secondaryFont, 
    fontSize: 20
  },
  subContainerTime: {
    justifyContent: 'center'
  },
  containerMajor: {
    width: '100%', 
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  subContainerMajor: {
    width: '60%', 
    flexDirection: 'row'
  },
  containerGrade: {
    width: '20%', 
    flexDirection: 'row'
  }
})
