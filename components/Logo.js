import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function Logo(props) {
  return (
    <Image
    source={require('../assets/images/logo.png')}
    style={styles.logo}
  />
  );
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 84,
        resizeMode: 'contain',
        marginTop: 3,
    }
})
