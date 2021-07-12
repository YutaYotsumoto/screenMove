import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {} from 'react-native';
import Screen from './src/Screen';

const App = () => {
  return <NavigationContainer>{<Screen />}</NavigationContainer>;
};

export default App;
