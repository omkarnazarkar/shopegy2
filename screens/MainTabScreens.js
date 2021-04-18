import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import AccountScreen from './AccountScreen';
import CartScreen from './CartScreen';

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const HomeStackScreens = ({ navigation }) => (
  <HomeStack.Navigator 
    screenOptions={{
      headerStyle: {
        backgroundColor: '#581359',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}
  >
    <HomeStack.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{
        headerLeft: () => (
          <Icon.Button 
            name="ios-menu" size={25} 
            backgroundColor="#581359" onPress={() => navigation.openDrawer()}
          />
        )
      }}
    />
  </HomeStack.Navigator>
)

const SearchStackScreens = ({ navigation }) => (
  <SearchStack.Navigator 
    screenOptions={{
      headerStyle: {
        backgroundColor: '#581359',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}
  >
    <SearchStack.Screen 
      name="Search" 
      component={SearchScreen}
      options={{
        headerLeft: () => (
          <Icon.Button 
            name="ios-menu" size={25} 
            backgroundColor="#581359" onPress={() => navigation.openDrawer()}
          />
        )
      }}   
    />
  </SearchStack.Navigator>
)

const MainTabScreens = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
    barStyle={{ backgroundColor: '#581359' }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreens}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchStackScreens}
      options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-search" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Cart"
      component={CartScreen}
      options={{
        tabBarLabel: 'Cart',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-cart" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarLabel: 'Account',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreens;
