import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
//①インポート
import {createStackNavigator} from '@react-navigation/stack';

import {SafeAreaView, Text, StyleSheet} from 'react-native';

//②最初に表示する画面関数
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.HomeScreen}>
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
};

//2番目に表示する画面関数
const ProjectScreen = () => {
  return (
    <SafeAreaView style={styles.HomeScreen}>
      <Text>Project Screen</Text>
    </SafeAreaView>
  );
};

//③定数Stack内にcreateStackNavigator代入
const Stack = createStackNavigator();

//④Stack.Screen　nameでNavBarの記述　componentでcontentAreaにProjectScreen関数　をrun
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Project" component={ProjectScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  HomeScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
