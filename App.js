import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import RecordScreen from './components/recordscreen';
import HomeScreen from './components/homescreen';
import ProfileScreen from './components/profilescreen';
import RecordStack from './components/recordstack';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
        initialRouteName="Record"
        screenOptions={{
          tabBarActiveTintColor: 'green',
          headerLargeTitleShadowVisible:false,
          headerShadowVisible:false,
          headerShown:false
        }}>
        <Tab.Screen name="Home" component={HomeScreen} 
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="Record Stack" component={RecordStack} screenOptions={{headerShown:false}} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="playlist-music" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="Profile" component={ProfileScreen} 
       options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
        }} />
      </Tab.Navigator>
    );
  }

  export default function App() {
    return (
      <NavigationContainer theme={DefaultTheme}>
        <MyTabs />
      </NavigationContainer>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  recordButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'red',
  },
  tabButton: {
    top: -30, // Raise the button
    justifyContent: 'center',
    alignItems: 'center',
    // ...styles.shadow, // Optional, if you want shadow on Android
  },
  navigationContainer: {
    backgroundColor: '#fecdd3'
  },
});
