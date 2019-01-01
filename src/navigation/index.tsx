import { createAppContainer, createStackNavigator } from 'react-navigation';

import { Home as HomeScreen } from '../screens';

const RootStack = createStackNavigator({
  Home: {
    navigationOptions: () => ({
      header: null
    }),
    screen: HomeScreen
  }
});

export default createAppContainer(RootStack);
