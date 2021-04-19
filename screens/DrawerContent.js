import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { 
  Avatar,
  Caption,
  Title,
  Drawer,
  Text,
  TouchableRipple,
  Switch
} from 'react-native-paper';
import { 
  DrawerContentScrollView, 
  DrawerItem 
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import { AuthContext } from '../components/AppContext';

export const DrawerContent = props => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const { signOut } = React.useContext(AuthContext);

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <View style={styles.drawerView}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image 
                source={{
                  uri: 'https://scontent.fnag1-2.fna.fbcdn.net/v/t1.6435-9/83929540_1482822131886198_8554250423156867072_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=q0W8820qsCoAX9cWXKP&_nc_ht=scontent.fnag1-2.fna&oh=f78506afb40d464939c096f5ccee3612&oe=60A19572'
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>Omkar Nazarkar</Title>
                <Caption style={styles.caption}>@omi8929</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon 
                  name="home-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Home"
              onPress={() => props.navigation.navigate('Home')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon 
                  name="search-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Search"
              onPress={() => props.navigation.navigate('Search')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon 
                  name="cart-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Cart"
              onPress={() => props.navigation.navigate('Cart')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon 
                  name="person-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Account"
              onPress={() => props.navigation.navigate('Account')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon 
                  name="settings-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Settings"
              onPress={() => props.navigation.navigate('Settings')}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple onPress={() => toggleTheme()}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={isDarkTheme}/>
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon 
              name="log-out"
              color={color}
              size={size}
            />
          )}
          label="Sign Out"
          onPress={() => {signOut()}}
        >

        </DrawerItem>
      </Drawer.Section>
    </View>
  )
};

const styles = StyleSheet.create({
  drawerView: {
    flex: 1,
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingHorizontal: 16,
  },
});
