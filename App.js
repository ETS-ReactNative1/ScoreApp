import { StatusBar } from 'expo-status-bar';
import React ,{ useState , useEffect} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground , SafeAreaView} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/components/Home';
import FindPage from './src/components/FindPage';
import ScannerPage from './src/components/ScannerPage';
import ShakePage from './src/components/ShakePage';
import TestRef from './src/components/TestRef';

const Drawer = createDrawerNavigator();

export default function App() {

  const [splashScreen, setSplashscreen] = useState(true);


  useEffect(() => {
    // set TimeOut permet d'afficher le slpashcreen pendant 3 sec et le set false ensuite
    setTimeout(() => setSplashscreen(false), 3000);

  }, []);

  function modifierHisto(value) {
    setHisto(value)
  }

  

  if (splashScreen === true) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Image
            style={{height:350, width:350}}
            source={require("./src/img/logo_bocal.jpg")}
          />
          <Text style={styles.sponsor}>présente</Text>
        </View>
      </SafeAreaView>
    );
  }



  return (
    <NavigationContainer>      
      <Drawer.Navigator initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#4db6ac',
          width: 240,
        },drawerType: "slide",
      }}
      >        
        <Drawer.Screen name="Accueil" component={Home}/>
        <Drawer.Screen name="Rechercher en tapotant" component={FindPage} />
        <Drawer.Screen name="Rechercher en scannant" component={ScannerPage} />
        <Drawer.Screen name="Shake Shake Shake" component={ShakePage} />
        {/* <Drawer.Screen name="Test ref" component={TestRef}/> */}
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
  sponsor:{
    fontWeight:"bold",
    fontSize:30,
  },
});
