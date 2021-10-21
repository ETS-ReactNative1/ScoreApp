import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/components/Home';
import FindPage from './src/components/FindPage';
import ScannerPage from './src/components/ScannerPage';

const Drawer = createDrawerNavigator();

export default function App() {


  return (
    <NavigationContainer>      
      <Drawer.Navigator initialRouteName="Home">        
        <Drawer.Screen name="Accueil" component={Home} />
        <Drawer.Screen name="Rechercher en tapotant" component={FindPage} />
        <Drawer.Screen name="Rechercher en scannant" component={ScannerPage} />
      </Drawer.Navigator>    
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:"center",
    alignItems:"center",
  },
});
