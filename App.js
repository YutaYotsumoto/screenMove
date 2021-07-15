import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/Screens/HomeScreen';
import ProjectScreen from './src/Screens/ProjectScreen';

<HomeScreen />;

<ProjectScreen />;

//定数Stack内にcreateStackNavigator
const Stack = createStackNavigator();

//App関数内でNavigator　Screen　コンポネントをrun
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // options={{title: 'overview'}}
        />
        <Stack.Screen
          name="Project"
          component={ProjectScreen}
          // initialParams={{itemId: 2}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
