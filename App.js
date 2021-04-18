/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreens from './screens/MainTabScreens';
import { DrawerContent } from './screens/DrawerContent';
import SettingsScreens from './screens/SettingsScreen';
import RootStackScreen from './screens/RootStackScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
      {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props} /> }>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreens} />
        <Drawer.Screen name="Settings" component={SettingsScreens} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
}

export default App;
