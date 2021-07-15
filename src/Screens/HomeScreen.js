import React from 'react';
import {SafeAreaView, Button, Text, StyleSheet} from 'react-native';

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

const styles = StyleSheet.create({
  HomeScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
