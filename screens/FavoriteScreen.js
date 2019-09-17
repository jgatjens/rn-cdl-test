import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import Colors from '../constants/Colors';
import Logo from '../components/Logo';
import CardList from '../components/CardList';

export default function FavoriteScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeLogo}>
        <TouchableHighlight onPress={handleWebpageLink} underlayColor={'#fff'}>
          <Logo />
        </TouchableHighlight>
        <Text style={styles.welcomeText}>jgatjens</Text>
      </View>

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>
            Favorites videos found on Youtube!
          </Text>
          <CardList />
        </View>
      </ScrollView>
    </View>
  );
}

FavoriteScreen.navigationOptions = {
  title: 'Favorites',
};

function handleWebpageLink() {
  WebBrowser.openBrowserAsync('http://jgatjens.com/');
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'HelveticaNeue-Thin',
  },
  contentContainer: {
    paddingTop: 10,
  },
  welcomeText: {
    color: Colors.tabIconSelected,
    marginTop: 5
  },  
  welcomeLogo: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  helpLinkText: {
    color: Colors.tabIconSelected
  }, 
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 0,
  },
});