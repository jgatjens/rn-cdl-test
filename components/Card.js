import React from 'react';
import { Image, StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { useNavigation } from 'react-navigation-hooks'
import Colors from '../constants/Colors';

export default function Card(props) {
  const { navigate } = useNavigation();

  return (
    <TouchableHighlight underlayColor={'#fff'} onPress={() => navigate('Detail', props)}>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/cards/card-shadow.png')}
          style={styles.shadowImage}
          />
        <Image
          source={props.image}
          style={styles.image}
          />
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    flex: 1,
    marginLeft: 5,
    minHeight: 240,
    backgroundColor: 'transparent',
    position: 'relative',
  },
  text: {
    color: Colors.textColor,
    marginTop: 5,
    textAlign: 'center',
    fontSize: 20
  },  
  viewsContainer: {
    color: '#fff',
    textAlign: 'left',
    fontSize: 22,
    top: 60,
    left: 155,
    position: 'absolute'
  },  
  shadowImage: {
    width: 123,
    height: 185,
    top: 50,
    left: 10, 
    position: 'absolute'
  },
  image: {
    width: 150,
    height: 210, 
    borderColor: '#D1D5D8', 
    borderRadius: 6
  },
})
