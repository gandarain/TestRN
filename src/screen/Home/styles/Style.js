import { StyleSheet } from 'react-native'
import { color } from '../../../assets/style/ColorList'

export default StyleSheet.create({
  container: {
    backgroundColor: color.themaColor
  },
  containerButton: {
    width: 60,  
    height: 60,   
    borderRadius: 30,            
    backgroundColor: '#FED253',                                    
    position: 'absolute',                                          
    bottom: 5,                                                    
    right: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
