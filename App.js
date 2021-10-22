import { StatusBar } from 'expo-status-bar';
import React ,{ useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/components/Home';
import FindPage from './src/components/FindPage';
import ScannerPage from './src/components/ScannerPage';
import ShakePage from './src/components/ShakePage';

const Drawer = createDrawerNavigator();


export default function App() {

  const [isLog, setIsLog] =useState(true)


  return (
    <NavigationContainer>      
      <Drawer.Navigator initialRouteName="Home">        
        <Drawer.Screen name="Accueil" component={Home} />
        {isLog && <>
        <Drawer.Screen name="Rechercher en tapotant" component={FindPage} />
        <Drawer.Screen name="Rechercher en scannant" component={ScannerPage} />
        <Drawer.Screen name="Shake Shake Shake" component={ShakePage} />
        </>
        }
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
