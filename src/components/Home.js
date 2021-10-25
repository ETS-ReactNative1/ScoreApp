import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import background from '../img/background.jpg';



function Home() {
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
    fontSize:40,
    fontWeight:"bold"
  },
  slogan_container:{
    width:"100%",
    marginBottom: 50
  },
  slogan_top:{
    fontSize:20,
    width:"100%",
    textAlign:"left",
    paddingLeft: 20
  },
  slogan_bot:{
    fontSize:20,
    width:"100%",
    textAlign:"right",
    paddingRight: 20,
  }
    
});

export default Home;
//#4db6ac
//#82e9de
//#00867d