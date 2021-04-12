/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreens = ({ navigation }) => (
  <HomeStack.Navigator 
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1a237e',
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
            backgroundColor="#1a237e" onPress={() => navigation.openDrawer()}
          />
        )
      }}
    />
  </HomeStack.Navigator>
)

const DetailsStackScreens = ({ navigation }) => (
  <DetailsStack.Navigator 
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1a237e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}
  >
    <DetailsStack.Screen 
      name="Details" 
      component={DetailsScreen}
      options={{
        headerLeft: () => (
          <Icon.Button 
            name="ios-menu" size={25} 
            backgroundColor="#1a237e" onPress={() => navigation.openDrawer()}
          />
        )
      }}   
    />
  </DetailsStack.Navigator>
)

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreens} />
        <Drawer.Screen name="Details" component={DetailsStackScreens} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
