import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main'
import Product from './pages/Product'

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'JSHunt',
        headerStyle: {
          backgroundColor: "#DA552F"
        },
        headerTintColor: "#FFF"
      }
    },
    Product
  })
)

export default Routes;