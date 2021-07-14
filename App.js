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
        title="Jump to Project"
        onPress={() => navigation.navigate('Project')}
      />
    </SafeAreaView>
  );
};

//ProjectScreen関数
const ProjectScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.HomeScreen}>
      <Text>Project Screen</Text>
      <Button
        title="Jump to Project ... again"
        onPress={() => navigation.push('Project')}
      />
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
