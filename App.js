import { StatusBar } from 'expo-status-bar';
import React ,{ useState , useEffect} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground , SafeAreaView} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/components/Home';
import FindPage from './src/components/FindPage';
import ScannerPage from './src/components/ScannerPage';
import ShakePage from './src/components/ShakePage';

const Drawer = createDrawerNavigator();


export default function App() {

  const [isLog, setIsLog] =useState(true)
  const [splashScreen, setSplashscreen] = useState(true);
  const [topPosition, setTopPosition] = useState(0);

  useEffect(() => {
    // set TimeOut permet d'afficher le slpashcreen pendant 2 sec et le set false ensuite
    setTimeout(() => setSplashscreen(false), 3000);

  }, []);

  

  if (splashScreen === true) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#1E90FF" }}>
        <View
          style={{
            flex: 1,
            alignItems: "center"
          }}>
          <Image
            style={{ width: "100%" , height: "100%"}}
            source={require("./src/img/background.jpg")}
          />
        </View>
      </SafeAreaView>
    );
  }



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
