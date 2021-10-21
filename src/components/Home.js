import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';


function Home() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Score My Food</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4db6ac',
    justifyContent:"center",
    alignItems:"center",
  },
  title:{
      fontSize:40,

  }
});

export default Home;
//#4db6ac
//#82e9de
//#00867d