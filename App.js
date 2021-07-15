import 'react-native-gesture-handler';
import * as React from 'react';
import {SafeAreaView, Button, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//HomeScreen関数
const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.HomeScreen}>
      <Text>Home Screen</Text>
      <Button
        title="Head to Project"
        onPress={() =>
          navigation.navigate('Project', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      />
    </SafeAreaView>
  );
};

//ProjectScreen関数
const ProjectScreen = ({route, navigation}) => {
  const {itemId, otherParam} = route.params;
  return (
    <SafeAreaView style={styles.HomeScreen}>
      <Text>Project Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Head to Project ... again"
        onPress={() =>
          navigation.push('Project', {itemId: Math.floor(Math.random() * 100)})
        }
      />
      <Button title="back Home" onPress={() => navigation.navigate('Home')} />
      <Button title="back FirstScreen" onPress={() => navigation.popToTop()} />
      <Button title="goBack LastScreen" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

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
