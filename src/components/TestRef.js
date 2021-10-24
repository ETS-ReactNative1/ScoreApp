import React, { useState , useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView,  ImageBackground,TouchableOpacity, TouchableHighlight, RefreshControl} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import Product from './Product';
import background2 from '../img/background2.png';



function FindPage() {

    const [barCode, setBarcode] = useState();
    const [data, setData] = useState();
    const [message, setMessage] = useState();
    const [refresh, setRefresh] = useState();

    function findData(barCode) {
        console.log(barCode);
        getInfo(barCode);
        setBarcode("")
        
    }

    const getInfo = async (barCode) => {
      fetch(`https://world.openfoodfacts.org/api/v0/product/${barCode}.json`)
         .then((res) => {
           res.json()
           .then((reponse) => {
             console.log(reponse.status);
             if (reponse.status === 1) {
               setMessage()
               setData(reponse)
             } else {
               setData()
               setMessage("Aucune données trouvées pour ce Code Barre")
               setTimeout(function(){ setMessage()}, 3000);
             }
           })
         })
         .catch((err) => console.log(err))
     }

     function clearData() {
       setRefresh(true);
       setData()
       setRefresh(false);
     }
     

  return (
    <ImageBackground source={background2} resizeMode="cover" style={styles.image}>
        <ScrollView style={styles.body}
            refreshControl={
            <RefreshControl
                refreshing={refresh}
                onRefresh={clearData}/>}>
            <View style={styles.find_top}>
                <Text style={styles.title}>Entrez un code barre :</Text>
                <TextInput 
                    style={styles.input}
                    value={barCode}
                    onChangeText={setBarcode}
                    placeholder="ex : 3245413125316"
                    keyboardType="numeric"
                />
                <TouchableHighlight style={styles.button_find}
                onPress={()=> findData(barCode)}
                activeOpacity={0.5}
                underlayColor={"#00867d"}
                >
                    <Text>Rechercher</Text>
                </TouchableHighlight>
            </View>
            {data && 
                <View style={styles.scroll}>
                    <Product data={data}/>
                </View>
            }
            {message && 
                <View style={styles.scroll}>
                    <Text style={styles.message}>{message}</Text>
                </View>
            }
        </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  body:{
      flex:1,
  },
  image:{
    flex:1,
  },
  find_top:{
    width: "100%",
    alignItems:"center",
  },
  title:{
    fontSize: 20,
    marginTop:20,
    marginBottom:20,
  },
  input:{
      borderWidth: 2,
      height:40,
      width:"75%",
      backgroundColor:"white",
      textAlign:"center",
      marginBottom:20,
  },
  button_find:{
      backgroundColor: "white",
      width:"50%",
      height:40,
      justifyContent:"center",
      alignItems:"center",
      borderRadius: 20,
      borderColor: "#00867d",
      borderWidth:2,
      marginBottom:20,
  },
  scroll:{
    flex:1,
    width:"100%",
    alignItems:"center"
  },
  message:{
    marginTop:20,
    fontSize:20,
    width:"80%",
    textAlign:"center",
    backgroundColor:"white",
    padding:10,
    borderRadius:10,
    borderColor:"#00867d",
    borderWidth:2,
  },
});

export default FindPage;
//#4db6ac
//#82e9de
//#00867d

/* console.log(data?.code);
       console.log(data?.product.image_url);
       console.log(data?.product.ingredients_text_fr);
       console.log(data?.product.nutrition_grade_fr);
       console.log(data?.product.product_name_fr);
       console.log(data?.product.generic_name_fr);
       console.log(data?.product.ecoscore_data.grade_fr); */