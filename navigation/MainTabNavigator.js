import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Colors from '../constants/Colors';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import DetailScreen from '../screens/DetailScreen';
import CommentsScreen from '../screens/CommentsScreen';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator({ 
  Home: HomeScreen, 
  Detail: DetailScreen,
  Comments: CommentsScreen 
}, config);

HomeStack.navigationOptions = {
  path: '',
  tabBarLabel: 'Home',
  defaultNavigationOptions: {
    headerTintColor: '#f4511e',
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : 'md-home'
      }
    />
  ),
};

const FavoritesStack = createStackNavigator({ Favorites: FavoriteScreen }, config);

FavoritesStack.navigationOptions = {
  path: '',
  tabBarLabel: 'Favorites',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={
        Platform.OS === 'ios' 
        ? `ios-heart${!focused ? '-empty' : ''}`
        : 'md-link'} />
  ),
};

const tabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    FavoritesStack,
  }, {
    tabBarOptions: {
      activeTintColor: Colors.tabIconSelected
    }
  }
);

tabNavigator.path = '';

export default tabNavigator;
