import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import Card from '../components/Card';

const fakeData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Marcos',
    desc: `After being struck by lightning, Barry Allen wakes up from his coma to discover he's been given the power of super speed, becoming the Flash, fighting crime in Central City.`,
    image: require('../assets/images/cards/card-1.png')
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bi',
    title: 'Top of the Lake',
    desc: `After being struck by lightning, Barry Allen wakes up from his coma to discover he's been given the power of super speed, becoming the Flash, fighting crime in Central City.`,
    image: require('../assets/images/cards/card-2.png')
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
    title: 'Outlander',
    desc: `After being struck by lightning, Barry Allen wakes up from his coma to discover he's been given the power of super speed, becoming the Flash, fighting crime in Central City.`,
    image: require('../assets/images/cards/card-3.png')
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
    title: 'Young Sheldon',
    desc: `After being struck by lightning, Barry Allen wakes up from his coma to discover he's been given the power of super speed, becoming the Flash, fighting crime in Central City.`,
    image: require('../assets/images/cards/card-4.png')
  },
]

export default function CardList(props) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal={false}
        numColumns={2}
        data={fakeData}
        renderItem={({ item }) => <Card title={item.title} desc={item.desc} image={item.image} /> }
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    width: 325,
    backgroundColor: '#fff',
  }
})
