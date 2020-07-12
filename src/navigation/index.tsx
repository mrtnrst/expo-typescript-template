import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Home as HomeScreen } from '../screens';

const RootStack = createStackNavigator({
  Home: {
    navigationOptions: () => ({
      header: undefined,
    }),
    screen: HomeScreen,
  },
});

export default createAppContainer(RootStack);
