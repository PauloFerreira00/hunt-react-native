import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main';

const appNavigator = createStackNavigator(
    {
      Main: Main,
    }
);

export default createAppContainer(appNavigator);