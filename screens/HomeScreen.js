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
import SearchInput from '../components/SearchInput';
import CardList from '../components/CardList';

export default function HomeScreen() {
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
            Get started by searching anything you like with the 
            <Text onPress={handleHelpLink} style={styles.helpLinkText}> Youtube API.</Text>
          </Text>
          <SearchInput />
          <CardList />
        </View>
      </ScrollView>

      {/* <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          Items Found: 36
        </Text>
      </View> */}
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};


function handleHelpLink() {
  WebBrowser.openBrowserAsync('https://www.npmjs.com/package/react-native-youtube');
}

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
    marginTop: 60,
    marginBottom: 20,
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
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
});
