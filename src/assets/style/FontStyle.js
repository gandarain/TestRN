import { StyleSheet } from 'react-native'
import { color } from './ColorList'

export default StyleSheet.create({
  bigFontWhite: {
    fontSize: 20, 
    color: color.fontColor
  },
  bigFontWhiteBold: {
    fontSize: 20, 
    color: color.fontColor,
    fontWeight: 'bold',
  },
  mediumFontWhite: {
    fontSize: 15, 
    color: color.fontColor
  },
  mediumFontWhiteBold: {
    fontSize: 15, 
    color: color.fontColor,
    fontWeight: 'bold', 
  },
  mediumFontSecondary: {
    fontSize: 15, 
    color: color.secondaryFont,
  }
})
