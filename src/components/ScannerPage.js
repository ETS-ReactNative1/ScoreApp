import React, { useState , useEffect } from 'react';
import { StyleSheet, Text, View, Image , RefreshControl, ImageBackground , Pressable, ScrollView, Button, TouchableHighlight} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { BarCodeScanner } from 'expo-barcode-scanner';

import Product from './Product';

import background from '../img/background.png';


function ScannerPage() {
    //State
        //State qui affiche ou pas la views du scan
    const [userIsScanning,setUserIsScanning ] = useState(false);
        //Resultat de la reponse de la permission d'utiliser l'appareil photo
    const [hasPermission, setHasPermission] = useState(null);

    const [data, setData] = useState();
    const [message, setMessage] = useState();
    const [refresh, setRefresh] = useState();


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
        getInfo(data);
        //Log du scan
        console.log('Type: ' + type + '\nData: ' + data)
    };
    //demande de permission pour utiliser la camera
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

      //fonction qui requet l'api avec le code bar
      const getInfo = async (barCode) => {
        fetch(`https://world.openfoodfacts.org/api/v0/product/${barCode}.json`)
           .then((res) => {
             res.json()
             .then((reponse) => {
               console.log(reponse.status);
               if (reponse.status === 1) {
                 setMessage()
                 setData(reponse)
                 console.log(reponse.product.product_name_fr);
               } else {
                 setData()
                 setMessage("Aucune données trouvées pour ce Code Barre")
                 setTimeout(function(){ setMessage()}, 3000);
               }
             })
           })
           .catch((err) => console.log(err))
       }
      
       //fonction qui clear la page au refresh
       function clearData() {
        setRefresh(true);
        setData()
        setRefresh(false);
      }

  return (<>
    <ImageBackground source={background} resizeMode="cover" style={styles.image}>
      <ScrollView style={styles.container}
        /* refresh de la page au swipe down */
        refreshControl={
        <RefreshControl
          refreshing={refresh}
          onRefresh={clearData}/>}>
        {userIsScanning && 
          <View style={styles.barcodebox}>
            <BarCodeScanner
              onBarCodeScanned={handleBarCodeScanned}
              style={{ height: 400, width: 400 }} />
          </View>
        }
        {!userIsScanning &&
          <TouchableHighlight 
            style={styles.button_scanner}
            activeOpacity={0.5}
            underlayColor={"#00867d"}
            onPress={()=> handleScan()}>
            <Text>Scanner</Text>
          </TouchableHighlight>
        }
        {userIsScanning && 
          <TouchableHighlight 
            style={styles.button_scanner}
            activeOpacity={0.5}
            underlayColor={"#00867d"}
            onPress={()=> handleScan()}>
            <Text>Arreter</Text>
          </TouchableHighlight>
        }
        {data &&
          <View style={styles.scroll}>
            <Product data={data}/>
          </View>
        }
      </ScrollView>
    </ImageBackground>
  </>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
    button_scanner:{
        marginTop: 20,
        backgroundColor: "white",
        width:"50%",
        height:40,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 20,
        borderColor: "#00867d",
        borderWidth:2,
        marginLeft:"auto",
        marginRight:"auto",
    },
    barcodebox: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 300,
        overflow: 'hidden',
        borderRadius: 30,
        marginLeft:"auto",
        marginRight:"auto",
        borderWidth:2,
        borderColor: "#00867d",
      },
      scroll:{
        flex:1,
        width:"100%",
      },
});

export default ScannerPage;
//#4db6ac
//#82e9de
//#00867d