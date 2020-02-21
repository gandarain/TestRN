import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

// ***** Import Screen ***** //
import SplashScreen from '../screen/Splash/SplashScreen'
import HomeScreen from '../screen/Home/Home'
// ***** /Import Screen ***** //

const AppStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false
    }
  }
})

const AppNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  AppStack: AppStack,
})

export default createAppContainer(AppNavigator)