import React, { useState , useEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground , Pressable, ScrollView, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { BarCodeScanner } from 'expo-barcode-scanner';


function ScannerPage() {
    //State
        //State qui affiche ou pas la views du scan
    const [userIsScanning,setUserIsScanning ] = useState(false);
        //Resultat de la reponse de la permission d'utiliser l'appareil photo
    const [hasPermission, setHasPermission] = useState(null);

    //Le toogle pour la view du scan
    function handleScan() {
        setUserIsScanning(!userIsScanning)
    }
    //Fonction qui demande la permission a l'user d'utiliser sont app photo
    function askForCameraPermission(){
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })()
      }
    // Au chargement appel la fonction de demande de permission
    useEffect(() => {
        askForCameraPermission();
    }, []);
    //Fonction sur l'event du scan 
    const handleBarCodeScanned = ({ type, data }) => {
        //Passe a false pour fermer la view scan
        setUserIsScanning(false);
        //Log du scan
        console.log('Type: ' + type + '\nData: ' + data)
    };

    if (hasPermission === null) {
        return (
          <View style={styles.container}>
            <Text>Requesting for camera permission</Text>
          </View>)
      }
      if (hasPermission === false) {
        return (
          <View style={styles.container}>
            <Text style={{ margin: 10 }}>No access to camera</Text>
            <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
          </View>)
      }

  return (<>
    <View style={styles.container}>
        <Text>Scanner Page</Text>
        {userIsScanning && 
    <View style={styles.barcodebox}>
    <BarCodeScanner
      onBarCodeScanned={handleBarCodeScanned}
      style={{ height: 400, width: 400 }} />
    </View>
    }
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
    
</>
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
    barcodebox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 300,
        overflow: 'hidden',
        borderRadius: 30,
        backgroundColor: 'tomato'
      }
});

export default ScannerPage;
//#4db6ac
//#82e9de
//#00867d