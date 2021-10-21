import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground , Pressable} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


function FindPage() {

    const [barCode, setBarcode] = useState();
    const [data, setData] = useState();


    function findData(barCode) {
        console.log(barCode);
        getInfo(barCode);
        setBarcode("")
        /* console.log(data?.code);
       console.log(data?.product.image_url);
       console.log(data?.product.ingredients_text_fr);
       console.log(data?.product.nutrition_grade_fr);
       console.log(data?.product.product_name_fr);
       console.log(data?.product.generic_name_fr);
       console.log(data?.product.ecoscore_data.grade_fr); */
    }

    const getInfo = async (barCode) => {
        try {
         const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${barCode}.json`);
         const json = await response.json();
         setData(json);
         console.log("recherche ok");
       } catch (error) {
           console.error(error);
        } 
     }

  return (
    <View style={styles.container}>
        <View style={styles.find_top}>
            <Text style={styles.title}>Entrez un code barre :</Text>
            <TextInput 
                style={styles.input}
                value={barCode}
                onChangeText={setBarcode}
                placeholder="ex : 3245413125316"
                keyboardType="numeric"
            />
            <Pressable style={styles.button_find}
                onPress={()=> findData(barCode)}>
                <Text /* style={styles.button_find} */>Rechercher</Text>
            </Pressable>
        </View>
        
        {data && 
            <View style={styles.articles}>
                <Text>{data.product.product_name_fr}</Text>
                <Image
                style={{width: 200, height: 200}}
                source={{uri : `${data.product.image_url}`}}
                resizeMode="contain"
                />
            </View>
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
  },
  articles:{
      backgroundColor: "white",
      width:"80%",
  }
});

export default FindPage;
//#4db6ac
//#82e9de
//#00867d