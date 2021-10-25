import React  from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

import { 
  DancingScript_400Regular,
  DancingScript_500Medium,
  DancingScript_600SemiBold,
  DancingScript_700Bold 
} from '@expo-google-fonts/dancing-script'

import { 
  Gugi_400Regular 
} from '@expo-google-fonts/gugi'

import { 
  PermanentMarker_400Regular 
} from '@expo-google-fonts/permanent-marker'

import { useFonts } from 'expo-font';

import AppLoading from 'expo-app-loading';




function Home() {
  let [fontsLoaded, error ]=useFonts({
    DancingScript_400Regular,
    DancingScript_500Medium,
    DancingScript_600SemiBold,
    DancingScript_700Bold,
    Gugi_400Regular,
    PermanentMarker_400Regular 
  
  })

  if (!fontsLoaded) {
    return <AppLoading/>
  }

  return (
    //<ImageBackground source={background} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <View style={styles.logo_container}>
          <Text style={styles.text_logo}>Rate'N'Eat</Text>
          <Image
          style={styles.logo}
          source={require('../img/001.png')}
          resizeMode="contain"
          />

        </View>
        <View style={styles.slogan_container}> 
          <Text style={styles.slogan_top}>"Mangez raisonnable ...</Text>
          <Text style={styles.slogan_bot}>... mangez eco-responsable!"</Text>
        </View>
      </View>
    //</ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"space-around",
    alignItems:"center",
    backgroundColor: "#4db6ac"
  },
  logo_container:{
    alignItems:"center",
  },
  image:{
    flex:1,
  },
  logo:{
    width:300,
    height:300
  },
  text_logo:{
    fontSize:60,
    fontFamily:"Gugi_400Regular",
  },
  slogan_container:{
    width:"100%",
    marginBottom: 50
  },
  slogan_top:{
    fontSize:30,
    width:"100%",
    textAlign:"left",
    paddingLeft: 20,
    fontFamily:"DancingScript_400Regular"
  },
  slogan_bot:{
    fontSize:30,
    width:"100%",
    textAlign:"right",
    paddingRight: 20,
    fontFamily:"DancingScript_400Regular"

  }
    
});

export default Home;
//#4db6ac
//#82e9de
//#00867d