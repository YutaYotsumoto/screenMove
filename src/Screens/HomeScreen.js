import React, {useEffect} from 'react';
import {SafeAreaView, Button, Text, StyleSheet} from 'react-native';

//HomeScreen関数
const HomeScreen = ({navigation, route}) => {
  useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return (
    <SafeAreaView style={styles.HomeScreen}>
      <Button
        title="Create Project"
        onPress={() => navigation.navigate('Project')}
      />
      <Text style={{margin: 10}}>Project: {route.params?.post}</Text>
    </SafeAreaView>
  );
};

// //最初のHomeScreenコード
// const HomeScreen = ({navigation}) => {
//   return (
//     <SafeAreaView style={styles.HomeScreen}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Head to Project"
//         onPress={() =>
//           navigation.navigate('Project', {
//             itemId: 86,
//             otherParam: 'anything you want here',
//           })
//         }
//       />
//     </SafeAreaView>
//   );
// };

const styles = StyleSheet.create({
  HomeScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
