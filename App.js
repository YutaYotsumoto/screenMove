import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
//①インポート
import {createStackNavigator} from '@react-navigation/stack';

import {SafeAreaView, Text, StyleSheet} from 'react-native';

//②画面表示するための関数コンポネントを作成
const ProjectScreen = () => {
  return (
    <SafeAreaView style={styles.HomeScreen}>
      <Text>Project一覧表示</Text>
    </SafeAreaView>
  );
};

//③定数Stack内にcreateStackNavigator代入
const Stack = createStackNavigator();

//④Stack.Screen　nameでNavBarの記述　componentでcontentAreaにProjectScreen関数　をrun
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ProjectScreen} />
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
