import React, { useState , useEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground , Pressable, ScrollView, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


function ScannerPage() {

    const [userIsScanning,setUserIsScanning ] = useState(false)

    function handleScan() {
        setUserIsScanning(!userIsScanning)
    }

  return (
    <View style={styles.container}>
        <Text>Scanner Page</Text>
        {!userIsScanning &&
            <Pressable 
                style={styles.button_scanner}
                onPress={()=> handleScan()}>
                <Text>Scanner</Text>
            </Pressable>
        }
        {userIsScanning && 
            <Pressable 
                style={styles.button_scanner}
                onPress={()=> handleScan()}>
                <Text>Arreter</Text>
            </Pressable>
        }
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4db6ac',
        alignItems:"center"
      },
    button_scanner:{
        backgroundColor: "white",
        width:"50%",
        height:40,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 20,
        borderColor: "#00867d",
        borderWidth:2,
    },
});

export default ScannerPage;
//#4db6ac
//#82e9de
//#00867d