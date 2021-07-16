import React, {useState} from 'react';
import {SafeAreaView, Button, StyleSheet, TextInput} from 'react-native';

//ProjectScreen関数
const ProjectScreen = ({route, navigation}) => {
  const [ProjectTitle, setProjectText] = useState('');
  return (
    <SafeAreaView style={styles.HomeScreen}>
      <TextInput
        multiline
        placeholder="What's your project title ?"
        value={ProjectTitle}
        onChangeText={setProjectText}
      />
      <Button
        title="Done"
        onPress={() =>
          navigation.navigate({
            name: 'Home',
            params: {post: ProjectTitle},
            merge: true,
          })
        }
      />
    </SafeAreaView>
  );
};

// //最初のProjectScreen関数
// const ProjectScreen = ({route, navigation}) => {
//   const {itemId, otherParam} = route.params;
//   return (
//     <SafeAreaView style={styles.HomeScreen}>
//       <Text>Project Screen</Text>
//       <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//       <Button
//         title="Head to Project ... again"
//         onPress={() =>
//           navigation.push('Project', {itemId: Math.floor(Math.random() * 100)})
//         }
//       />
//       <Button title="back Home" onPress={() => navigation.navigate('Home')} />
//       <Button title="back FirstScreen" onPress={() => navigation.popToTop()} />
//       <Button title="goBack LastScreen" onPress={() => navigation.goBack()} />
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

export default ProjectScreen;
