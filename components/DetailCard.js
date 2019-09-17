import React from 'react';
import { Image, StyleSheet, View, Text, Dimensions } from 'react-native';

const w = Dimensions.get('window').width; //full width

export default function  DetailCard(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/cards/card-shadow.png')}
        style={styles.shadowImage}
        />
      <Image
        source={props.image}
        style={styles.image}
      />
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.viewsContainer}>
        <Text style={styles.text}>160,687 views</Text>
        <Text style={styles.text}>3,292 likes</Text>
        <Text style={styles.text}>3,292 dislikes</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    position: 'relative',
    marginTop: 200,
    height: 170,
    width: w
  },
  text: {
    marginTop: 2,
    fontSize: 18
  },  
  title: {
    color: '#fff',
    marginTop: 5,
    textAlign: 'left',
    fontSize: 22,
    textTransform: 'uppercase',
    top: 30,
    left: 155,
    position: 'absolute'
  },  
  viewsContainer: {
    color: '#fff',
    textAlign: 'left',
    fontSize: 22,
    top: 95,
    left: 155,
    position: 'absolute'
  },  
  shadowImage: {
    width: 123,
    height: 185,
    top: -25,
    left: 20, 
    position: 'absolute'
  },
  image: {
    width: 120,
    height: 170, 
    marginLeft: 20,
    borderColor: '#D1D5D8', 
    borderRadius: 4,
  }
})
