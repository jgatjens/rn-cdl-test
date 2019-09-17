import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

import DetailCard from '../components/DetailCard'
import CustomButton from '../components/CustomButton'
import Colors from '../constants/Colors';

const w = Dimensions.get('window').width; //full width

export default function DetailScreen() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Image
          source={require('../assets/images/detail/cover.png')}
          style={styles.coverImage}
        />
        <View style={styles.playButton}>
          <CustomButton size={54} iconName='ios-play-circle' color='white' />
        </View>

      </View>

      <DetailCard
        id={'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba'}
        title={'Marcos'}
        image={require('../assets/images/cards/card-1.png')}
      />

      <Text style={styles.description}>After being struck by lightning, Barry Allen wakes up from his coma to discover he's been given the power of super speed, becoming the Flash, fighting crime in Central City.</Text>

      <View style={styles.buttonContainer}>
          <CustomButton 
            size={54} 
            iconName='ios-heart' 
            color={Colors.tabIconSelected} 
            label='Add' 
          />
          
          <CustomButton 
            onPress={() => navigate('Comments')}
            size={54} 
            iconName='ios-text' 
            color={Colors.tabIconSelected} 
            label='Comments' 
          />
      </View>

    </View>
  );
}

DetailScreen.navigationOptions = {
  title: 'Details',
  headerTransparent: true,
  headerTintColor: '#fff',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    fontFamily: 'HelveticaNeue-Thin',
    position: 'relative',
  },
  videoContainer: {
    flex: 1,
    width: w,
    position: 'absolute',
    height: 180
  },
  buttonContainer: {
    backgroundColor: '#F8F8F8',
    flex: 1,
    width: w,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  coverImage: {
    width: w,
    height: 280
  },
  playButton: {
    position: 'absolute',
    top: 130,
    left: '50%',
    marginLeft: -22,
    width: 54,
    height: 54
  },
  description: {
    color: Colors.textColor,
    marginTop: 15,
    textAlign: 'left',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    fontSize: 18
  },
  
});
