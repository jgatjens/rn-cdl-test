import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function CommentsScreen() {
  return (
    <View style={styles.container}>
      <Text>Comments Screen</Text>
    </View>
  );
}

CommentsScreen.navigationOptions = {
  title: 'Comments',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'HelveticaNeue-Thin',
  },
});