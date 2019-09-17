import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import Colors from '../constants/Colors'

export default function SearchInput(props) {
  const [value, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search</Text>
      <TextInput
        placeholder='ex: Best Movies 2019'
        style={styles.input}
        onChangeText={text => onChangeText(text)}
        value={value}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: Colors.textColor,
    marginBottom: 5,
    fontSize: 18
  },  
  input: {
    height: 50, 
    width: 325,
    borderColor: '#D1D5D8', 
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 4
  }
})
